# FretFlow

An interactive web app for guitarists to visualize MIDI files on a fretboard. Load or play cached MIDIs, see auto-scrolling note data, and highlight all possible fret positions for each note (including duplicates).

## Features
- Responsive three-column layout: MIDI info scroller (left), scalable fretboard (center), playback controls (right).
- Start screen with "Load" (upload MIDI) or "Old" (browser-cached files).
- Highlights frequencies across standard tuning, with animations.
- Offline-capable via localStorage/IndexedDB.

## Tech Stack
- HTML/CSS/JS for UI.
- Tone.js for MIDI parsing/playback.
- SVG for fretboard rendering.

## Setup
1. Clone: `git clone https://github.com/kappter/FretFlow.git`
2. Open `index.html` in a browser.
3. Upload a MIDI to test!

## TODO
- Add tuning selector.
- Mobile touch support.
- Public MIDI search integration.

Built with ❤️ for guitar practice.
