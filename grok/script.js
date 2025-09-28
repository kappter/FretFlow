// Fretboard config (standard tuning: E2 A2 D3 G3 B3 E4)
const tuning = [40, 45, 50, 55, 59, 64]; // MIDI note numbers
const numFrets = 12;
const strings = 6;
let player = null;
let midiNotes = []; // To store parsed MIDI events

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

// Load MIDI file
document.getElementById('load-btn').addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.mid,.midi';
    input.onchange = e => loadMidiFile(e.target.files[0]);
    input.click();
});

document.getElementById('upload-btn').addEventListener('click', () => {
    document.getElementById('load-btn').click();
});

// Load sample MIDI (placeholders—replace with real URLs or base64)
document.getElementById('sample-select').addEventListener('change', e => {
    const url = e.target.value;
    if (url) {
        // Placeholder: Fetch or load sample MIDI
        // For now, simulate with a dummy MIDI
        player = new Tone.Player({
            url: 'https://tonejs.github.io/audio/berklee/guitar_nylon22.mp3', // Placeholder
            loop: false
        }).toDestination();
        midiNotes = [{ name: 'C4', number: 60, time: 0 }, { name: 'E4', number: 64, time: 1 }]; // Dummy data
        showMainApp();
    }
});

// Parse and load MIDI
function loadMidiFile(file) {
    const reader = new FileReader();
    reader.onload = async e => {
        player = new Tone.Player({
            url: e.target.result,
            loop: false
        }).toDestination();
        // Simulate MIDI parsing (replace with actual MIDI parsing library like midi-parser-js)
        midiNotes = [
            { name: 'C4', number: 60, time: 0 },
            { name: 'E4', number: 64, time: 1 },
            { name: 'G4', number: 67, time: 2 }
        ];
        showMainApp();
    };
    reader.readAsArrayBuffer(file);
}

function showMainApp() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');
}

// Playback controls
document.getElementById('play-btn').addEventListener('click', () => {
    if (player) {
        Tone.start();
        player.start();
        // Schedule note highlights and info
        midiNotes.forEach(note => {
            Tone.Transport.scheduleOnce(() => {
                highlightNote(note.number);
                updateMidiInfo(note, Tone.Transport.seconds);
            }, note.time);
        });
        Tone.Transport.start();
    }
});

document.getElementById('pause-btn').addEventListener('click', () => {
    if (player) {
        Tone.Transport.pause();
    }
});

document.getElementById('stop-btn').addEventListener('click', () => {
    if (player) {
        Tone.Transport.stop();
        player.stop();
        document.getElementById('midi-info').innerHTML = '';
        document.querySelectorAll('.highlight').forEach(el => el.remove());
    }
});

document.getElementById('speed').addEventListener('input', e => {
    if (player) {
        Tone.Transport.bpm.value = 120 * e.target.value;
    }
});

drawFretboard();
