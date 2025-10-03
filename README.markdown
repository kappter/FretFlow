# FretFlow

FretFlow is an interactive web app designed for guitarists to visualize MIDI file data on a guitar fretboard. It displays MIDI note events in an auto-scrolling text panel and highlights corresponding note positions (including duplicates) on a scalable, vertically aligned fretboard, without audio playback for now. Built for practice and education, it works on devices from phones to projectors.

## Features

- **Responsive Layout**: 100% width header and footer, with a three-column main view:
  - **Left**: Auto-scrolling text showing MIDI events (note names, numbers, and timings).
  - **Center**: Vertical guitar fretboard (nut on left, strings horizontal) highlighting note positions in real-time.
  - **Right**: Controls for visual playback (play/pause/stop, speed slider) and MIDI file upload/sample selection.
- **Start Screen**: Two options to begin:
  - **Load MIDI**: Upload a .mid file from your device.
  - **Sample MIDI**: Dropdown with six placeholder MIDI samples (e.g., C Major Scale, Blues Riff).
- **MIDI Visualization**: Parses MIDI files to display note events and highlight all possible fret positions in standard tuning (E2-A2-D3-G3-B3-E4).
- **Offline-Capable**: Runs entirely client-side using HTML, CSS, and JavaScript.
- **Responsive Design**: Scales for mobile devices or large screens like projectors.

## Tech Stack

- **HTML/CSS/JavaScript**: Core structure, styling, and logic.
- **midi-parser-js**: Client-side MIDI file parsing for note event extraction.
- **SVG**: Renders the scalable guitar fretboard.

## Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/kappter/FretFlow.git
   cd FretFlow
   ```

2. **Run Locally**:
   - Open `index.html` in a modern browser (e.g., Chrome, Firefox).
   - Upload a MIDI file or select a sample to test the visualizer.

3. **Deploy to GitHub Pages**:
   - Push files to the `main` branch:
     ```bash
     git add .
     git commit -m "Update FretFlow app"
     git push origin main
     ```
   - Enable GitHub Pages in Settings > Pages, set Source to `main`, folder `/ (root)`.
   - Visit https://kappter.github.io/FretFlow/.

## Usage

1. On the start screen, click **Load MIDI** to upload a .mid file or select a sample from the dropdown.
2. The main view loads with:
   - Auto-scrolling MIDI events (left).
   - Fretboard with highlighted note positions (center).
   - Playback controls and upload/sample options (right).
3. Click **Play** to start visualizing notes, adjust speed with the slider, or use **Pause/Stop** to control.

## TODO

- Add audio playback with Tone.js, ensuring proper AudioContext handling.
- Integrate real MIDI sample files into the dropdown.
- Support browser-cached MIDI files for the "Old" button using localStorage.
- Enhance fretboard with touch zooming and custom tuning options.
- Improve MIDI parsing for precise timing and note-off events.
- Add export for fretboard diagrams (e.g., PNG).

## Contributing

Feel free to fork, submit issues, or create pull requests. Ideas for new features (e.g., chord detection, public MIDI search) are welcome!

## License

MIT License. See [LICENSE](LICENSE) for details.

Built with 🎸 for guitar enthusiasts.