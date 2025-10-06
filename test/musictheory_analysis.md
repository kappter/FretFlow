# MusicTheory Project Analysis

## Overview
A web application that visualizes music theory modes on a guitar fretboard and piano roll with interactive controls.

## Key Features
- **Interactive Mode Selection**: Choose key (C, G#, Bb, etc.) and mode (Ionian, Dorian, Phrygian, etc.)
- **Notation Options**: Toggle between sharp and flat notation
- **Guitar Tuning Options**: Standard (EADGBE) and Drop D (DADGBE) tuning
- **String Order Toggle**: High string bottom or low string bottom
- **Theme Customization**: Color picker for dynamic theming
- **Guitar Fretboard Visualization**: Shows mode notes across 12 frets on 6 strings
- **Piano Roll Visualization**: Two octaves (C3 to B4) with highlighted mode notes
- **Information Display**: Table with notes, intervals, triads, four-note chords, five-note chords, six-note chords, and emotional characteristics
- **Relative Modes**: Shows equivalent note structures (e.g., C Ionian = A Aeolian)

## Design & Layout
- **Dark theme** with gradient background (linear-gradient from #1a1a1a to #2c2c2c)
- **Centered container** with rounded corners and shadow effects
- **Responsive design** that adapts to mobile devices
- **100% width header and footer**
- **Theme color** (#00ffcc default) applied to highlights, labels, and table headers
- **Hover effects** on container and table rows
- **Clean, modern aesthetic** with Roboto font

## Visualizations
- **Guitar Fretboard**: 
  - Vertical layout (nut on left, strings horizontal)
  - 12 frets displayed
  - Mode notes highlighted as circles
  - Fret markers at 3, 5, 7, 9, 12
  - Open string labels
  - Canvas-based rendering
  
- **Piano Roll**:
  - Two octaves (14 white keys, 10 black keys)
  - All keys labeled with note names and octaves
  - Mode notes highlighted with theme color
  - Gradient fills on keys for depth
  - Canvas-based rendering

## Tech Stack
- **Vanilla HTML/CSS/JavaScript** (no external dependencies)
- **HTML5 Canvas** for fretboard and piano roll rendering
- **CSS Custom Properties** for dynamic theming (--theme-color, --theme-color-rgb)
- **Responsive CSS** with media queries

## Files
- index.html (main file with embedded CSS and JavaScript)
- test.html
- README.md

## User Experience
- Single-page application
- All controls in one view
- Real-time updates when settings change
- No audio playback (purely visual)
- Client-side only (no server required)
