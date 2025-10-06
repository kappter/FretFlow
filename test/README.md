# MIDI Music Theory Visualizer

A merged web application that combines **MIDI visualization** from the FretFlow project with the **design layout and music theory features** from the musicTheory project. This application displays active tones on both a guitar fretboard and piano roll in real-time as MIDI files are played back.

## Features

### Core Functionality

- **MIDI File Upload**: Upload your own MIDI files (.mid, .midi) for visualization
- **Sample MIDI Files**: Three built-in sample patterns (C Major Scale, Blues Riff, Arpeggio Pattern)
- **Real-time Visualization**: Watch notes light up on both fretboard and piano roll as they play
- **Playback Controls**: Play, pause, and stop buttons with adjustable playback speed (0.5x to 2.0x)

### Guitar Fretboard Features

- **Multiple Tunings**:
  - Standard Tuning (E-A-D-G-B-E)
  - Drop D Tuning (D-A-D-G-B-E)
  - Open G Tuning (D-G-D-G-B-D)
  - DADGAD Tuning (D-A-D-G-A-D)
- **String Order Options**: Display with high string on bottom or low string on bottom
- **Visual Fret Markers**: Dots at frets 3, 5, 7, 9, and double dots at fret 12
- **Note Labels**: Active notes show their note names directly on the fretboard
- **String Labels**: Each string is labeled with its open note name

### Piano Roll Features

- **Two-Octave Range**: Displays C3 to B4 (28 keys total)
- **Realistic Piano Keys**: White and black keys with gradient shading
- **Active Note Highlighting**: Keys light up with theme color when notes are played
- **Note Labels**: Each key shows its note name and octave number

### Customization Options

- **Sharp/Flat Notation**: Toggle between sharp (♯) and flat (♭) note naming
- **Theme Color Picker**: Customize the accent color throughout the interface
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Theme**: Professional dark interface with cyan/teal default accent color

## Technical Details

### Architecture

The application is built as a **single-page application** using:
- **Pure HTML/CSS/JavaScript** (no framework dependencies)
- **MIDI Parser JS** library for MIDI file parsing
- **HTML5 Canvas** for rendering fretboard and piano roll visualizations

### Key Components

1. **MIDI Parser**: Parses MIDI files and extracts note events with timing information
2. **Playback Engine**: Time-based playback system with speed control
3. **Fretboard Renderer**: Draws guitar fretboard with strings, frets, and active notes
4. **Piano Roll Renderer**: Draws piano keyboard with active note highlighting
5. **Control Panel**: User interface for all settings and playback controls

### Design Philosophy

The application follows the **musicTheory project's design aesthetic**:
- Dark gradient background (#1a1a1a to #2c2c2c)
- Glowing theme color accents with box shadows
- Smooth hover transitions and button interactions
- Professional typography using Roboto font
- Organized layout with labeled sections
- Responsive controls that adapt to screen size

### MIDI Visualization Logic

The application uses a **time-based playback system**:
1. MIDI files are parsed to extract note-on events with timestamps
2. During playback, the current time is tracked
3. Notes within a 100ms tolerance window are considered "active"
4. Active notes are displayed on both fretboard and piano roll
5. The MIDI info panel logs each note event as it occurs

### Fretboard Mapping

Notes are mapped to the fretboard using:
- **String tuning values** (MIDI note numbers for open strings)
- **Fret calculations** (each fret adds one semitone)
- **Multiple positions** (same note can appear on different strings)
- All matching positions are highlighted simultaneously

## Usage Guide

### Getting Started

1. **Load MIDI Data**:
   - Click "Upload MIDI" to load your own MIDI file, or
   - Select a sample from the "Select Sample MIDI" dropdown

2. **Configure Settings** (optional):
   - Choose sharp or flat notation
   - Select guitar tuning
   - Choose string order preference
   - Pick a custom theme color

3. **Play and Visualize**:
   - Click the "Play" button to start playback
   - Watch notes light up on the fretboard and piano roll
   - Adjust speed with the slider if needed
   - Use pause/stop to control playback

### Tips

- **Speed Control**: Slow down playback (0.5x) to study note positions, or speed up (2.0x) for a quick overview
- **Multiple Tunings**: Experiment with different tunings to see how the same notes map to different fret positions
- **Theme Colors**: Choose colors that match your personal preference or brand
- **MIDI Info Panel**: Scroll through the info panel to see a log of all note events

## Browser Compatibility

The application works in all modern browsers that support:
- HTML5 Canvas
- ES6 JavaScript
- CSS3 (gradients, transforms, transitions)
- File API for MIDI upload

Tested on:
- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Project Structure

```
midi-visualizer/
├── index.html          # Main application file (all-in-one)
└── README.md          # This file
```

The entire application is contained in a **single HTML file** for easy deployment and portability. All CSS and JavaScript are embedded inline.

## Credits

This project merges concepts and code from:

- **FretFlow** (https://github.com/kappter/FretFlow)
  - MIDI parsing and playback logic
  - Time-based note visualization approach
  
- **musicTheory** (https://github.com/kappter/musicTheory)
  - Visual design and layout
  - Dark theme with glowing accents
  - Fretboard and piano roll rendering style

## License

This merged application inherits the licenses from both source projects. Please refer to the original repositories for specific licensing information.

## Future Enhancements

Potential features for future development:
- Audio playback (Web Audio API)
- Multi-track MIDI support
- Chord detection and display
- Scale highlighting
- Recording and export functionality
- More instrument visualizations (bass, ukulele, etc.)
- Animation effects for note transitions
- Loop and section repeat controls
