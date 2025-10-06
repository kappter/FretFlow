# MIDI Music Theory Visualizer - Design Specification

## Application Overview
A web-based MIDI visualizer that combines real-time MIDI playback with interactive guitar fretboard and piano roll visualizations, styled with a modern dark theme interface.

## Visual Design

### Color Scheme
- **Background**: Linear gradient from #1a1a1a to #2c2c2c
- **Container**: #2a2a2a with rounded corners
- **Theme Color**: #00ffcc (customizable via color picker)
- **Text**: #e0e0e0 (light gray)
- **Controls**: #3a3a3a background, #e0e0e0 text
- **Canvas Background**: #333
- **Highlight Color**: Theme color with transparency for active notes

### Typography
- **Font Family**: 'Roboto', sans-serif
- **Heading (h1)**: Theme color, text-shadow with glow effect
- **Body Text**: #e0e0e0
- **Canvas Labels**: Theme color, 16px
- **Button Text**: #e0e0e0

### Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│                  MIDI Music Theory Visualizer               │
│                        (h1 title)                           │
├─────────────────────────────────────────────────────────────┤
│  Controls Section (flex wrap)                               │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐       │
│  │ Upload MIDI  │ │ Sample MIDI  │ │ Notation     │       │
│  └──────────────┘ └──────────────┘ └──────────────┘       │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐       │
│  │ Tuning       │ │ String Order │ │ Theme Color  │       │
│  └──────────────┘ └──────────────┘ └──────────────┘       │
├─────────────────────────────────────────────────────────────┤
│  Playback Controls (centered)                               │
│  ┌──────┐ ┌───────┐ ┌──────┐  Speed: [========>   ] 1.0x  │
│  │ Play │ │ Pause │ │ Stop │                                │
│  └──────┘ └───────┘ └──────┘                                │
├─────────────────────────────────────────────────────────────┤
│  MIDI Info Panel (auto-scrolling)                           │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Note: C4 (60) at 0.00s                              │   │
│  │ Note: E4 (64) at 1.00s                              │   │
│  │ Note: G4 (67) at 2.00s                              │   │
│  └─────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│  Guitar Fretboard (C4 active)                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │     [Fretboard Canvas - 840x150px]                  │   │
│  │  E4 ─●─────────────────────────────────────────     │   │
│  │  B3 ───────────────────────────────────────────     │   │
│  │  G3 ───────────────────────────────────────────     │   │
│  │  D3 ───────────────────────────────────────────     │   │
│  │  A2 ───────────────────────────────────────────     │   │
│  │  E2 ───────────────────────────────────────────     │   │
│  └─────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│  Piano Roll (C4 active)                                     │
│  ┌─────────────────────────────────────────────────────┐   │
│  │     [Piano Roll Canvas - 840x100px]                 │   │
│  │  ┌─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┐                     │   │
│  │  │ │■│ │■│ │ │■│ │■│ │■│ │ │■│ │  (black keys)      │   │
│  │  ├─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┤                     │   │
│  │  │C│D│E│F│G│A│B│C│D│E│F│G│A│B│  (white keys)      │   │
│  │  └─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┘                     │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## Component Specifications

### 1. Header
- **Element**: `<h1>`
- **Text**: "MIDI Music Theory Visualizer"
- **Style**: Center-aligned, theme color, text-shadow glow

### 2. Controls Section
- **Container**: Flex container with wrap, gap: 20px
- **Components**:
  - **Upload MIDI Button**: Opens file picker for .mid/.midi files
  - **Sample MIDI Dropdown**: Pre-loaded sample files
  - **Notation Select**: Sharp/Flat options
  - **Tuning Select**: Standard/Drop D/Open G/DADGAD/Open D/Open C/Double Drop D
  - **String Order Select**: High String Bottom/Low String Bottom
  - **Theme Color Picker**: Input type="color", default #00ffcc

### 3. Playback Controls
- **Container**: Centered flex container
- **Components**:
  - **Play Button**: Starts MIDI playback
  - **Pause Button**: Pauses playback (can resume)
  - **Stop Button**: Stops and resets playback
  - **Speed Slider**: Input type="range", min=0.5, max=2.0, step=0.1, default=1.0
  - **Speed Display**: Shows current speed (e.g., "1.0x")

### 4. MIDI Info Panel
- **Element**: `<div>` with overflow-y: auto
- **Height**: 150px
- **Background**: #333
- **Border**: 1px solid #444
- **Content**: Auto-scrolling text showing note events
- **Format**: "Note: {name} ({number}) at {time}s"

### 5. Guitar Fretboard Canvas
- **Dimensions**: 840x150px
- **Background**: #333
- **Features**:
  - 6 horizontal strings (E2, A2, D3, G3, B3, E4)
  - 13 vertical fret lines (nut + 12 frets)
  - Fret markers at positions 3, 5, 7, 9, 12
  - Open string labels on left
  - Fret numbers below
  - Active notes highlighted as circles with theme color
- **Label**: "Guitar Fretboard (active notes)" in theme color

### 6. Piano Roll Canvas
- **Dimensions**: 840x100px
- **Background**: #333
- **Features**:
  - 2 octaves (C3 to B4)
  - 14 white keys with gradient fills
  - 10 black keys with gradient fills
  - All keys labeled with note name and octave
  - Active notes highlighted with theme color overlay
- **Label**: "Piano Roll (active notes)" in theme color

## Interaction Flows

### MIDI File Upload Flow
1. User clicks "Upload MIDI" button
2. File picker opens (.mid/.midi filter)
3. User selects file
4. File is parsed using midi-parser-js
5. MIDI events extracted and stored
6. Playback controls become active
7. First note preview shown on visualizations

### Sample MIDI Selection Flow
1. User selects option from dropdown
2. Pre-loaded MIDI data is loaded
3. Playback controls become active
4. First note preview shown on visualizations

### Playback Flow
1. User clicks "Play" button
2. Playback timer starts
3. For each time interval (60fps):
   - Check for notes at current playback time
   - Highlight notes on fretboard
   - Highlight notes on piano roll
   - Add note info to MIDI info panel
   - Auto-scroll info panel
4. Continue until end of MIDI or user stops

### Pause/Resume Flow
1. User clicks "Pause" button
2. Playback timer pauses
3. Current highlights remain visible
4. User clicks "Play" to resume from same position

### Stop Flow
1. User clicks "Stop" button
2. Playback timer resets to 0
3. All highlights cleared
4. MIDI info panel cleared

### Speed Adjustment Flow
1. User moves speed slider
2. Speed value updates display
3. If playing, playback rate adjusts in real-time

### Theme Color Change Flow
1. User selects new color from picker
2. CSS custom properties update
3. All theme-colored elements update immediately
4. Canvas redraws with new highlight color

## Technical Specifications

### MIDI Parsing
- **Library**: midi-parser-js (CDN link)
- **Input**: Binary MIDI file data
- **Output**: Array of note events with:
  - `name`: Note name (e.g., "C4")
  - `number`: MIDI note number (0-127)
  - `time`: Time in seconds from start

### Fretboard Note Mapping
- **Standard Tuning**: [40, 45, 50, 55, 59, 64] (E2, A2, D3, G3, B3, E4)
- **Algorithm**: For each string and fret (0-12), calculate: `noteNumber = tuning[string] + fret`
- **Highlight**: If noteNumber matches active MIDI note, draw circle at position

### Piano Roll Note Mapping
- **Range**: MIDI notes 48-71 (C3 to B4)
- **White Keys**: C, D, E, F, G, A, B (semitones 0, 2, 4, 5, 7, 9, 11)
- **Black Keys**: C#, D#, F#, G#, A# (semitones 1, 3, 6, 8, 10)
- **Highlight**: If note matches active MIDI note, overlay with theme color

### Playback Timing
- **Frame Rate**: 60fps (16ms intervals)
- **Time Increment**: 0.016 / speed
- **Note Tolerance**: ±0.05 seconds for matching
- **Speed Range**: 0.5x to 2.0x

### Responsive Breakpoints
- **Mobile**: max-width 600px
  - Stack controls vertically
  - Reduce canvas width to 100%
  - Adjust font sizes
  - Reduce padding

## File Structure
```
index.html (single file application)
├── <head>
│   ├── Meta tags
│   ├── Title
│   ├── <style> (embedded CSS)
│   └── MIDI parser library CDN
├── <body>
│   ├── Container div
│   │   ├── Header (h1)
│   │   ├── Controls section
│   │   ├── Playback controls
│   │   ├── MIDI info panel
│   │   ├── Fretboard canvas
│   │   └── Piano roll canvas
│   └── <script> (embedded JavaScript)
└── </html>
```

## Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Considerations
- Canvas redraws only when notes change
- Efficient note lookup using time-based filtering
- Throttled auto-scroll updates
- Optimized gradient rendering
- Minimal DOM manipulation
