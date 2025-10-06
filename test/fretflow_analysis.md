# FretFlow Project Analysis

## Overview
FretFlow is an interactive web app for guitarists to visualize MIDI file data on a guitar fretboard.

## Key Features
- **MIDI Visualization**: Parses MIDI files and displays note events
- **Auto-scrolling Text Panel**: Shows MIDI events (note names, numbers, timings)
- **Vertical Guitar Fretboard**: Highlights note positions in real-time (nut on left, strings horizontal)
- **Playback Controls**: Play/pause/stop, speed slider
- **MIDI File Upload**: Load .mid files from device
- **Sample MIDI Files**: Dropdown with placeholder samples (C Major Scale, Blues Riff, etc.)
- **Responsive Design**: Works on mobile to projector screens
- **Offline-Capable**: Runs entirely client-side

## Layout
- **Three-column main view**:
  - Left: Auto-scrolling text showing MIDI events
  - Center: Vertical guitar fretboard with real-time highlighting
  - Right: Controls for playback and MIDI file selection
- **100% width header and footer**

## Tech Stack
- HTML/CSS/JavaScript
- **midi-parser-js**: Client-side MIDI file parsing
- **SVG**: Renders scalable guitar fretboard
- Standard tuning: E2-A2-D3-G3-B3-E4

## Files
- index.html
- script.js
- styles.css
- test.html
- README.markdown

## TODO (from their repo)
- Add audio playback with Tone.js
- Integrate real MIDI sample files
- Support browser-cached MIDI files
- Touch zooming and custom tuning
- Improve MIDI parsing for timing
- Export fretboard diagrams (PNG)
