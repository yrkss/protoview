# 🌐 ProtoViewer

A clean, modern web application for browsing and exploring network protocols with real-time search and expandable details.

![ProtoViewer](https://via.placeholder.com/800x400/4d6bfe/ffffff?text=ProtoViewer)

## ✨ Features

- **📋 Complete Protocol List** — All protocols grouped by OSI layer
- **🔍 Real-time Search** — Filter protocols by name or abbreviation
- **📖 Expandable Cards** — Click any protocol to see full details
- **📎 Specifications** — Direct links to RFCs and official documentation
- **🔄 Cache Management** — Automatic cache clearing on data updates
- **📱 Responsive** — Works perfectly on all devices
- **🎨 Modern Design** — Clean, minimal, with subtle blue accents

## 🚀 Quick Start

### Local Development

```bash
# Clone or download the files
# Open index.html in any browser
```

Or use Live Server in VS Code:

```
# Install Live Server extension
# Right-click index.html → Open with Live Server
```

### Deploy to GitHub Pages

1. Create a repository on GitHub
2. Upload all files (`index.html`, `styles.css`, `protocols.js`, `script.js`)
3. Go to Settings → Pages
4. Select branch `main` and folder `/ (root)`
5. Click Save
6. Your app will be available at:
`https://<username>.github.io/<repository-name>/`

## 📂 Project Structure

```
protoviewer/
├── index.html          # Main page
├── styles.css          # Styles (DECA UI Kit inspired)
├── protocols.js        # Protocol database
├── script.js           # Application logic
└── README.md           # This file
```

## 🧩 Adding New Protocols

Open `protocols.js` and add a new object to the `PROTOCOLS` array:

```
{
    id: 'myproto',                    // Unique identifier
    name: 'My Protocol Name',         // Full name
    abbreviation: 'MP',               // Abbreviation
    layer: 7,                         // OSI layer (1-7)
    layerName: 'Application',         // Layer name (optional)
    description: 'Protocol description and purpose.',
    details: {
        'Default Port': '1234',
        'Transport': 'TCP',
        'Feature': 'Some important detail',
    },
    links: [
        { title: 'RFC 1234 — My Protocol', url: 'https://...' },
        { title: 'Documentation', url:
