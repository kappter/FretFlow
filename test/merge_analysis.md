# Merged Application Analysis

## Project Goal
Merge MIDI visualization functionality from FretFlow with the design layout and UI of musicTheory to create a unified application that shows active MIDI notes on both fretboard and piano roll.

## Key Components to Merge

### From FretFlow (MIDI Visualization)
1. **MIDI Parsing**: Uses midi-parser-js library to parse .mid files
2. **MIDI Playback Control**: Play/pause/stop buttons with speed slider
3. **Auto-scrolling Text Panel**: Shows MIDI events (note names, numbers, timings)
4. **Real-time Note Highlighting**: Highlights notes on fretboard as MIDI plays
5. **File Upload**: Load .mid files from device
6. **Sample MIDI Selection**: Dropdown with sample MIDI files
7. **Playback Timer**: Tracks playback time and synchronizes visualization

### From musicTheory (Design & Layout)
1. **Dark Theme**: Gradient background (#1a1a1a to #2c2c2c)
2. **Centered Container**: Rounded corners, shadow effects, hover animations
3. **Theme Color Customization**: Color picker with CSS custom properties
4. **Canvas-based Fretboard**: 12 frets, 6 strings, fret markers, note circles
5. **Canvas-based Piano Roll**: 2 octaves (C3-B4), white/black keys, gradients
6. **Control Panel**: Dropdowns for notation, tuning, string order
7. **Information Table**: Notes, intervals, chords, emotional characteristics
8. **Responsive Design**: Mobile-friendly with media queries
9. **Typography**: Roboto font, clean styling

## Merged Application Architecture

### Layout Structure
```
Header: "MIDI Music Theory Visualizer"
├── Controls Section
│   ├── MIDI Controls (left)
│   │   ├── Upload MIDI button
│   │   ├── Sample MIDI dropdown
│   │   ├── Play/Pause/Stop buttons
│   │   └── Speed slider
│   ├── Display Controls (right)
│   │   ├── Notation select (sharp/flat)
│   │   ├── Tuning select
│   │   ├── String order select
│   │   └── Theme color picker
├── MIDI Info Panel (auto-scrolling text)
├── Visualizations
│   ├── Guitar Fretboard (canvas)
│   └── Piano Roll (canvas)
└── Footer
```

### Technical Integration Points

1. **MIDI Note to Visualization Mapping**
   - Parse MIDI file to extract note events with timing
   - Convert MIDI note numbers to note names
   - Highlight corresponding positions on fretboard canvas
   - Highlight corresponding keys on piano roll canvas
   - Update in real-time during playback

2. **Fretboard Rendering**
   - Use musicTheory's canvas-based fretboard drawing
   - Adapt to show MIDI notes instead of mode notes
   - Keep fret markers, string labels, and styling
   - Add dynamic highlighting for active MIDI notes

3. **Piano Roll Rendering**
   - Use musicTheory's canvas-based piano roll
   - Adapt to show MIDI notes instead of mode notes
   - Keep gradient fills and key labels
   - Add dynamic highlighting for active MIDI notes

4. **Playback System**
   - Implement FretFlow's playback timer
   - Synchronize with canvas updates
   - Support speed control
   - Auto-scroll MIDI info panel

5. **Styling Integration**
   - Apply musicTheory's dark theme
   - Use theme color for MIDI note highlights
   - Maintain responsive design
   - Keep hover effects and animations

## Implementation Strategy

### Phase 1: Base Structure
- Create HTML structure with musicTheory's layout
- Add MIDI control elements from FretFlow
- Set up canvas elements for fretboard and piano roll

### Phase 2: MIDI Integration
- Include midi-parser-js library
- Implement MIDI file upload and parsing
- Create playback timer and control logic
- Add auto-scrolling MIDI info panel

### Phase 3: Visualization
- Adapt fretboard drawing to show MIDI notes
- Adapt piano roll drawing to show MIDI notes
- Implement real-time highlighting during playback
- Sync visualizations with playback timer

### Phase 4: Styling & Polish
- Apply musicTheory's CSS styling
- Implement theme color customization
- Add responsive design
- Test on different screen sizes

### Phase 5: Testing & Deployment
- Test MIDI file upload and parsing
- Test playback controls and speed adjustment
- Verify visualization accuracy
- Deploy to web

## Key Differences from Original Projects

1. **Removed from musicTheory**:
   - Mode selection (Ionian, Dorian, etc.)
   - Key selection
   - Information table with chords and intervals
   - Relative modes display
   - Static mode visualization

2. **Enhanced from FretFlow**:
   - Better visual design with dark theme
   - Canvas-based rendering instead of SVG
   - More polished UI with gradients and shadows
   - Theme color customization
   - Responsive design for mobile

3. **New Features**:
   - MIDI-driven visualization on musicTheory's design
   - Real-time synchronization between MIDI playback and canvas updates
   - Combined control panel for both MIDI and display settings
   - Unified dark theme aesthetic
