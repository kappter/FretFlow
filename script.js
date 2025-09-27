// Fretboard config (standard tuning: E2 A2 D3 G3 B3 E4)
const tuning = [40, 45, 50, 55, 59, 64]; // MIDI note numbers for open strings (low to high)
const numFrets = 12;
const strings = 6;

// Draw initial fretboard SVG
function drawFretboard() {
    const svg = document.getElementById('fretboard');
    svg.innerHTML = ''; // Clear

    // Strings
    for (let i = 0; i < strings; i++) {
        const y = 20 + i * 30;
        svg.innerHTML += `<line x1="0" y1="${y}" x2="500" y2="${y}" stroke="black" stroke-width="1"/>`;
    }

    // Frets
    for (let f = 0; f <= numFrets; f++) {
        const x = 40 + f * 40;
        svg.innerHTML += `<line x1="${x}" y1="20" x2="${x}" y2="200" stroke="black" stroke-width="2"/>`;
    }

    // Fret markers (octave positions)
    [3, 5, 7, 9, 12].forEach(f => {
        const x = 40 + f * 40;
        svg.innerHTML += `<circle cx="${x}" cy="110" r="3" fill="gray"/>`;
    });
}

// Highlight positions for a MIDI note (e.g., 64 = E4)
function highlightNote(note) {
    // Clear previous highlights
    document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));

    // Find all positions
    for (let str = 0; str < strings; str++) {
        for (let fret = 0; fret <= numFrets; fret++) {
            const posNote = tuning[str] + fret;
            if (posNote === note) {
                const x = 40 + fret * 40;
                const y = 20 + str * 30;
                const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                dot.setAttribute('cx', x);
                dot.setAttribute('cy', y);
                dot.setAttribute('r', 8);
                dot.setAttribute('fill', 'yellow');
                dot.classList.add('highlight');
                document.getElementById('fretboard').appendChild(dot);
            }
        }
    }
}

// MIDI handling with Tone.js
let player = null;
document.getElementById('load-btn').addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.mid,.midi';
    input.onchange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = ev => {
            // Parse MIDI (Tone.js can handle ArrayBuffer)
            player = new Tone.Player({
                url: ev.target.result,
                loop: false
            }).toDestination();
            // Cache in localStorage (base64 for simplicity)
            localStorage.setItem('cachedMIDI', btoa(ev.target.result));
            showMainApp();
        };
        reader.readAsArrayBuffer(file);
    };
    input.click();
});

document.getElementById('old-btn').addEventListener('click', () => {
    const cached = localStorage.getItem('cachedMIDI');
    if (cached) {
        player = new Tone.Player({
            url: atob(cached),
            loop: false
        }).toDestination();
        showMainApp();
    } else {
        alert('No cached files yet!');
    }
});

function showMainApp() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');
}

// Playback controls (stub—expand with Tone.Transport for scheduling highlights)
document.getElementById('play-btn').addEventListener('click', () => {
    if (player) {
        player.start();
        // TODO: Schedule highlights based on MIDI events
        // Use Tone.Transport.scheduleRepeat to highlight notes over time
    }
});
// Add similar for pause/stop...

drawFretboard(); // Init
