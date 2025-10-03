const tuning = [40, 45, 50, 55, 59, 64]; // Standard tuning: E2 A2 D3 G3 B3 E4
const numFrets = 12;
const strings = 6;
let midiNotes = [];
let playbackTimer = null;
let playbackTime = 0;
let isPlaying = false;

// Note number to name (simplified)
function noteToName(noteNumber) {
    const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const octave = Math.floor(noteNumber / 12) - 1;
    const note = noteNames[noteNumber % 12];
    return `${note}${octave}`;
}

// Draw vertical fretboard
function drawFretboard() {
    const svg = document.getElementById('fretboard');
    svg.innerHTML = '';

    // Strings (horizontal)
    for (let i = 0; i < strings; i++) {
        const y = 20 + i * 60;
        svg.innerHTML += `<line x1="40" y1="${y}" x2="560" y2="${y}" stroke="black" stroke-width="2"/>`;
    }

    // Frets (vertical lines)
    for (let f = 0; f <= numFrets; f++) {
        const x = 40 + f * 40;
        svg.innerHTML += `<line x1="${x}" y1="20" x2="${x}" y2="380" stroke="black" stroke-width="2"/>`;
    }

    // Fret markers
    [3, 5, 7, 9, 12].forEach(f => {
        const x = 40 + f * 40;
        svg.innerHTML += `<circle cx="${x}" cy="200" r="5" fill="gray"/>`;
    });
}

// Highlight note positions
function highlightNote(note) {
    document.querySelectorAll('.highlight').forEach(el => el.remove());

    for (let str = 0; str < strings; str++) {
        for (let fret = 0; fret <= numFrets; fret++) {
            if (tuning[str] + fret === note) {
                const x = 40 + fret * 40;
                const y = 20 + str * 60;
                const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                dot.setAttribute('cx', x);
                dot.setAttribute('cy', y);
                dot.setAttribute('r', 10);
                dot.setAttribute('fill', 'yellow');
                dot.classList.add('highlight');
                document.getElementById('fretboard').appendChild(dot);
            }
        }
    }
}

// Auto-scroll MIDI info
function updateMidiInfo(note, time) {
    const info = document.getElementById('midi-info');
    info.innerHTML += `Note: ${note.name} (${note.number}) at ${time.toFixed(2)}s<br>`;
    info.scrollTop = info.scrollHeight;
}

// Parse MIDI file
function parseMidi(data) {
    const midi = MidiParser.parse(data);
    const notes = [];
    let currentTime = 0;

    midi.track.forEach(track => {
        let deltaTime = 0;
        track.event.forEach(event => {
            deltaTime += event.deltaTime;
            if (event.type === 9 && event.data[1] > 0) { // Note On
                const noteNumber = event.data[0];
                notes.push({
                    name: noteToName(noteNumber),
                    number: noteNumber,
                    time: currentTime / midi.timeDivision // Convert to seconds (approx)
                });
            }
            currentTime += event.deltaTime;
        });
    });

    return notes.sort((a, b) => a.time - b.time);
}

// Load MIDI file
document.getElementById('load-btn').addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.mid,.midi';
    input.onchange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = e => {
            midiNotes = parseMidi(e.target.result);
            showMainApp();
        };
        reader.readAsBinaryString(file);
    };
    input.click();
});

document.getElementById('upload-btn').addEventListener('click', () => {
    document.getElementById('load-btn').click();
});

// Load sample MIDI (simulated data)
document.getElementById('sample-select').addEventListener('change', e => {
    if (e.target.value) {
        midiNotes = [
            { name: 'C4', number: 60, time: 0 },
            { name: 'E4', number: 64, time: 1 },
            { name: 'G4', number: 67, time: 2 },
            { name: 'C5', number: 72, time: 3 }
        ]; // Simulated MIDI data
        showMainApp();
    }
});

function showMainApp() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');
}

// Visual playback
function startPlayback() {
    if (isPlaying) return;
    isPlaying = true;
    playbackTime = 0;
    const speed = parseFloat(document.getElementById('speed').value) || 1;
    document.getElementById('midi-info').innerHTML = '';

    playbackTimer = setInterval(() => {
        playbackTime += 0.016 / speed; // ~60fps
        const currentNotes = midiNotes.filter(note => Math.abs(note.time - playbackTime) < 0.05);
        currentNotes.forEach(note => {
            highlightNote(note.number);
            updateMidiInfo(note, playbackTime);
        });
    }, 16);
}

document.getElementById('play-btn').addEventListener('click', () => {
    startPlayback();
});

document.getElementById('pause-btn').addEventListener('click', () => {
    if (isPlaying) {
        clearInterval(playbackTimer);
        isPlaying = false;
    }
});

document.getElementById('stop-btn').addEventListener('click', () => {
    clearInterval(playbackTimer);
    isPlaying = false;
    playbackTime = 0;
    document.getElementById('midi-info').innerHTML = '';
    document.querySelectorAll('.highlight').forEach(el => el.remove());
});

document.getElementById('speed').addEventListener('input', e => {
    if (isPlaying) {
        clearInterval(playbackTimer);
        startPlayback();
    }
});

drawFretboard();