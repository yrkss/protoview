# 🌐 ProtoViewer

A clean, modern web application for browsing and exploring network protocols with real-time search and expandable details.

## ✨ Features

- **📋 Complete Protocol List** — All protocols grouped by OSI layer (Layers 1-7)
- **🔍 Real-time Search** — Filter protocols by name or abbreviation
- **📖 Expandable Cards** — Click any protocol to see full details
- **📎 Specifications** — Direct links to RFCs and official documentation
- **🔄 Cache Management** — Automatic cache clearing on data updates
- **📱 Responsive** — Works perfectly on all devices
- **🎨 Modern Design** — Clean, minimal, with subtle blue accents

## 📊 Protocol Coverage

| OSI Layer | Protocols |
|-----------|-----------|
| Layer 7 — Application | HTTP, HTTPS, FTP, SFTP, FTPS, SMTP, POP3, IMAP, DNS, DHCP, SSH, Telnet, WebSocket, MQTT, AMQP, gRPC, REST, GraphQL, RTP, RTSP, SIP, LDAP, SNMP, NTP, Syslog, XMPP, iCalendar, SMPP, USSD, OpenVPN, RDP, VNC, NFS, SMB, CIFS, DICOM, HL7, Modbus, BACnet, BLE, LoRaWAN |
| Layer 6 — Presentation | TLS, SSL |
| Layer 5 — Session | NetBIOS |
| Layer 4 — Transport | TCP, UDP, QUIC, SCTP |
| Layer 3 — Network | IPv4, IPv6, ICMP, IGMP, ARP, IPsec, WireGuard |
| Layer 2 — Data Link | Ethernet, Wi-Fi, VLAN, PPP, CAN, Zigbee, Z-Wave |
| Layer 1 — Physical | USB, DSL, SONET/SDH, PON, RS-232, Thunderbolt, Ethernet PHY |

**Total: 61 protocols**

## 🚀 Quick Start

### Local Development

```bash
# Clone or download the files
# Open index.html in any browser
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
├── styles.css          # Styles
├── protocols.js        # Protocol database (61 protocols)
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
    layerName: 'Application',         // Layer name
    description: 'Protocol description and purpose.',
    details: {
        'Default Port': '1234',
        'Transport': 'TCP',
        'Feature': 'Some important detail',
    },
    links: [
        { title: 'RFC 1234 — My Protocol', url: 'https://...' },
        { title: 'Documentation', url: 'https://...' },
    ],
}
```

## 🎨 Design

Design inspired by [DECA Free UI Kit](https://www.uistore.design/items/deca-free-ui-kit-for-sketch-and-figma/) — clean, minimal, with focus on typography and readability.

### Color Palette

- **Primary**: `#4d6bfe` (blue)
- **Background**: `#f8f9fc` (light)
- **Text**: `#0d0d0d` (near black)
- **Secondary**: `#5a5a5a` (gray)

## 📄 License

MIT

---

Made with ❤️ for network enthusiasts

