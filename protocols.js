// ============================================================
//  Network Protocols Database
//  Add new protocols following the structure below.
// ============================================================

const PROTOCOLS = [
    // ===== APPLICATION LAYER (7) =====
    {
        id: 'http',
        name: 'HyperText Transfer Protocol',
        abbreviation: 'HTTP',
        layer: 7,
        layerName: 'Application',
        description:
            'Application layer protocol for transferring hypertext documents (web pages). Runs over TCP. Used for loading web pages, API requests, and data transfer over the internet. HTTP/3 runs over QUIC.',
        details: {
            'Default Port': '80 (HTTP), 443 (HTTPS)',
            'Transport': 'TCP (HTTP/1.1, HTTP/2), UDP (HTTP/3)',
            'Encoding': 'Text (ASCII) / Binary (HTTP/2)',
            'Status': 'Active, constantly evolving',
        },
        links: [
            { title: 'RFC 9110 — HTTP Semantics', url: 'https://datatracker.ietf.org/doc/html/rfc9110' },
            { title: 'RFC 9112 — HTTP/1.1', url: 'https://datatracker.ietf.org/doc/html/rfc9112' },
            { title: 'RFC 9113 — HTTP/2', url: 'https://datatracker.ietf.org/doc/html/rfc9113' },
            { title: 'RFC 9114 — HTTP/3', url: 'https://datatracker.ietf.org/doc/html/rfc9114' },
        ],
    },
    {
        id: 'https',
        name: 'HyperText Transfer Protocol Secure',
        abbreviation: 'HTTPS',
        layer: 7,
        layerName: 'Application',
        description:
            'Secure version of HTTP using TLS/SSL for traffic encryption. Provides confidentiality, integrity, and authentication. The standard for modern websites and APIs.',
        details: {
            'Default Port': '443',
            'Transport': 'TCP (TLS), UDP (QUIC + TLS)',
            'Encryption': 'TLS 1.2 / 1.3',
            'Certificates': 'X.509 (PKI)',
        },
        links: [
            { title: 'RFC 2818 — HTTPS', url: 'https://datatracker.ietf.org/doc/html/rfc2818' },
            { title: 'RFC 8446 — TLS 1.3', url: 'https://datatracker.ietf.org/doc/html/rfc8446' },
            { title: 'RFC 9114 — HTTP/3 (with TLS)', url: 'https://datatracker.ietf.org/doc/html/rfc9114' },
        ],
    },
    {
        id: 'ftp',
        name: 'File Transfer Protocol',
        abbreviation: 'FTP',
        layer: 7,
        layerName: 'Application',
        description:
            'Protocol for transferring files between client and server. Uses two channels: control (commands) and data (files). Currently being replaced by more secure protocols (SFTP, FTPS).',
        details: {
            'Default Port': '21 (control), 20 (data)',
            'Transport': 'TCP',
            'Modes': 'Active / Passive',
            'Security': 'None (transmitted in plain text)',
        },
        links: [
            { title: 'RFC 959 — FTP', url: 'https://datatracker.ietf.org/doc/html/rfc959' },
            { title: 'RFC 2428 — FTP Extensions', url: 'https://datatracker.ietf.org/doc/html/rfc2428' },
        ],
    },
    {
        id: 'smtp',
        name: 'Simple Mail Transfer Protocol',
        abbreviation: 'SMTP',
        layer: 7,
        layerName: 'Application',
        description:
            'Protocol for sending email between mail servers. Runs over TCP. Used for transmitting messages from client to server and between servers. POP3 or IMAP are used for receiving mail.',
        details: {
            'Default Port': '25, 587 (Submission), 465 (SMTPS)',
            'Transport': 'TCP',
            'Commands': 'HELO, MAIL FROM, RCPT TO, DATA, QUIT',
            'Extensions': 'ESMTP (RFC 5321)',
        },
        links: [
            { title: 'RFC 5321 — SMTP', url: 'https://datatracker.ietf.org/doc/html/rfc5321' },
            { title: 'RFC 5322 — Email Format', url: 'https://datatracker.ietf.org/doc/html/rfc5322' },
        ],
    },
    {
        id: 'dns',
        name: 'Domain Name System',
        abbreviation: 'DNS',
        layer: 7,
        layerName: 'Application',
        description:
            'Distributed system for translating domain names (e.g., example.com) to IP addresses. Runs over UDP (sometimes TCP). A critical component of the internet enabling request routing.',
        details: {
            'Default Port': '53 (UDP/TCP)',
            'Transport': 'UDP (primary), TCP (zone transfers)',
            'Record Types': 'A, AAAA, CNAME, MX, TXT, NS, PTR, SOA',
            'Root Servers': '13 root servers (A-M)',
        },
        links: [
            { title: 'RFC 1035 — DNS', url: 'https://datatracker.ietf.org/doc/html/rfc1035' },
            { title: 'RFC 2181 — DNS Clarifications', url: 'https://datatracker.ietf.org/doc/html/rfc2181' },
            { title: 'RFC 8484 — DNS over HTTPS', url: 'https://datatracker.ietf.org/doc/html/rfc8484' },
        ],
    },
    {
        id: 'dhcp',
        name: 'Dynamic Host Configuration Protocol',
        abbreviation: 'DHCP',
        layer: 7,
        layerName: 'Application',
        description:
            'Protocol for automatic configuration of network parameters: IP address, subnet mask, gateway, DNS servers. Runs over UDP. Simplifies IP address management in local networks.',
        details: {
            'Default Port': '67 (server), 68 (client)',
            'Transport': 'UDP',
            'Message Types': 'DHCPDISCOVER, DHCPOFFER, DHCPREQUEST, DHCPACK',
            'Options': 'Option 1 (Subnet Mask), Option 3 (Router), Option 6 (DNS)',
        },
        links: [
            { title: 'RFC 2131 — DHCP', url: 'https://datatracker.ietf.org/doc/html/rfc2131' },
            { title: 'RFC 2132 — DHCP Options', url: 'https://datatracker.ietf.org/doc/html/rfc2132' },
        ],
    },
    {
        id: 'ssh',
        name: 'Secure Shell',
        abbreviation: 'SSH',
        layer: 7,
        layerName: 'Application',
        description:
            'Secure protocol for remote server management and secure data transfer. Uses encryption to protect sessions. Replaces insecure protocols like Telnet and rlogin.',
        details: {
            'Default Port': '22',
            'Transport': 'TCP',
            'Encryption': 'AES, ChaCha20, 3DES (deprecated)',
            'Authentication': 'Password, public key, Kerberos',
        },
        links: [
            { title: 'RFC 4251 — SSH Protocol', url: 'https://datatracker.ietf.org/doc/html/rfc4251' },
            { title: 'RFC 4252 — SSH Authentication', url: 'https://datatracker.ietf.org/doc/html/rfc4252' },
            { title: 'RFC 4253 — SSH Transport', url: 'https://datatracker.ietf.org/doc/html/rfc4253' },
        ],
    },
    {
        id: 'websocket',
        name: 'WebSocket Protocol',
        abbreviation: 'WebSocket',
        layer: 7,
        layerName: 'Application',
        description:
            'Protocol for full-duplex communication between client and server over TCP. Used in real-time web applications: chats, games, stock data. Works via HTTP handshake, then switches to binary protocol.',
        details: {
            'Default Port': '80 (ws), 443 (wss)',
            'Transport': 'TCP (ws), TLS (wss)',
            'Frames': 'Text (UTF-8) or binary data',
            'Support': 'All modern browsers',
        },
        links: [
            { title: 'RFC 6455 — WebSocket', url: 'https://datatracker.ietf.org/doc/html/rfc6455' },
            { title: 'RFC 7692 — WebSocket Compression', url: 'https://datatracker.ietf.org/doc/html/rfc7692' },
        ],
    },
    {
        id: 'mqtt',
        name: 'MQ Telemetry Transport',
        abbreviation: 'MQTT',
        layer: 7,
        layerName: 'Application',
        description:
            'Lightweight publish-subscribe messaging protocol for IoT devices. Runs over TCP. Has minimal overhead (2-byte header), making it ideal for constrained devices.',
        details: {
            'Default Port': '1883 (MQTT), 8883 (MQTTS)',
            'Transport': 'TCP (MQTT), TLS (MQTTS)',
            'QoS Levels': '0 (at most once), 1 (at least once), 2 (exactly once)',
            'Topics': 'Hierarchical (e.g., home/livingroom/temperature)',
        },
        links: [
            { title: 'MQTT v5.0 Specification', url: 'https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html' },
            { title: 'MQTT v3.1.1 Specification', url: 'https://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html' },
        ],
    },
    {
        id: 'grpc',
        name: 'gRPC Remote Procedure Call',
        abbreviation: 'gRPC',
        layer: 7,
        layerName: 'Application',
        description:
            'Modern RPC framework from Google using HTTP/2 as transport and Protocol Buffers for serialization. Provides high performance, multiplexing, streaming, and multi-language support.',
        details: {
            'Transport': 'HTTP/2 (TCP)',
            'Serialization': 'Protocol Buffers (protobuf)',
            'Call Types': 'Unary, Server Streaming, Client Streaming, Bidirectional Streaming',
            'Interface': 'Defined in .proto files',
        },
        links: [
            { title: 'gRPC Official Documentation', url: 'https://grpc.io/docs/' },
            { title: 'gRPC on GitHub', url: 'https://github.com/grpc/grpc' },
        ],
    },
    {
        id: 'rest',
        name: 'Representational State Transfer',
        abbreviation: 'REST',
        layer: 7,
        layerName: 'Application',
        description:
            'Architectural style for building distributed systems. Uses HTTP as transport, standard methods (GET, POST, PUT, DELETE), and JSON/XML format. Not a protocol, but often considered an API standard.',
        details: {
            'Transport': 'HTTP/HTTPS',
            'Formats': 'JSON, XML, HTML, YAML',
            'Methods': 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS',
            'Principles': 'Client-server, stateless, cacheable',
        },
        links: [
            {
                title: 'RESTful Web Services (Fielding)',
                url: 'https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm',
            },
            { title: 'REST API Tutorial', url: 'https://restfulapi.net/' },
        ],
    },
    {
        id: 'graphql',
        name: 'GraphQL Query Language',
        abbreviation: 'GraphQL',
        layer: 7,
        layerName: 'Application',
        description:
            'Query language and runtime for APIs, developed by Facebook. Allows clients to request only needed data, reducing request count and data transfer volume.',
        details: {
            'Transport': 'HTTP/HTTPS (usually POST)',
            'Format': 'JSON',
            'Types': 'Query, Mutation, Subscription',
            'Introspection': 'Yes (schema available via queries)',
        },
        links: [
            { title: 'GraphQL Specification', url: 'https://spec.graphql.org/' },
            { title: 'GraphQL Documentation', url: 'https://graphql.org/learn/' },
        ],
    },
    {
        id: 'rtp',
        name: 'Real-time Transport Protocol',
        abbreviation: 'RTP',
        layer: 7,
        layerName: 'Application',
        description:
            'Protocol for real-time audio and video transmission over UDP. Used in IP telephony (VoIP), video conferencing, and streaming. Usually works with RTCP for session management.',
        details: {
            'Port': 'Usually 16384-32767 (dynamic)',
            'Transport': 'UDP',
            'Header': '12 bytes (minimum)',
            'Codecs': 'Opus, VP8, H.264, AAC, PCM',
        },
        links: [
            { title: 'RFC 3550 — RTP', url: 'https://datatracker.ietf.org/doc/html/rfc3550' },
            { title: 'RFC 3551 — RTP Codecs', url: 'https://datatracker.ietf.org/doc/html/rfc3551' },
        ],
    },
    {
        id: 'sip',
        name: 'Session Initiation Protocol',
        abbreviation: 'SIP',
        layer: 7,
        layerName: 'Application',
        description:
            'Protocol for establishing, managing, and terminating communication sessions (voice, video, messaging). Widely used in VoIP systems. Runs over TCP or UDP, usually with RTP for media transport.',
        details: {
            'Default Port': '5060 (UDP/TCP), 5061 (TLS)',
            'Transport': 'UDP, TCP, TLS',
            'Methods': 'INVITE, ACK, BYE, CANCEL, REGISTER, OPTIONS',
            'Response Codes': '1xx (Informational), 2xx (Success), 3xx (Redirection)',
        },
        links: [
            { title: 'RFC 3261 — SIP', url: 'https://datatracker.ietf.org/doc/html/rfc3261' },
            { title: 'RFC 3263 — SIP Locating', url: 'https://datatracker.ietf.org/doc/html/rfc3263' },
        ],
    },
    {
        id: 'ldap',
        name: 'Lightweight Directory Access Protocol',
        abbreviation: 'LDAP',
        layer: 7,
        layerName: 'Application',
        description:
            'Protocol for accessing directories over a network. Used for storing and retrieving information about users, computers, and other objects. Often used in enterprise networks (Active Directory).',
        details: {
            'Default Port': '389 (LDAP), 636 (LDAPS)',
            'Transport': 'TCP (TLS)',
            'Operations': 'Bind, Search, Compare, Add, Delete, Modify, Move',
            'Model': 'Hierarchical (DIT — Directory Information Tree)',
        },
        links: [
            { title: 'RFC 4510 — LDAP v3', url: 'https://datatracker.ietf.org/doc/html/rfc4510' },
            { title: 'RFC 4511 — LDAP Protocol', url: 'https://datatracker.ietf.org/doc/html/rfc4511' },
        ],
    },
    {
        id: 'snmp',
        name: 'Simple Network Management Protocol',
        abbreviation: 'SNMP',
        layer: 7,
        layerName: 'Application',
        description:
            'Protocol for managing network devices (routers, switches, printers). Allows collecting information and configuring device parameters. Uses MIB (Management Information Base) to describe data.',
        details: {
            'Default Port': '161 (agent), 162 (trap)',
            'Transport': 'UDP',
            'Versions': 'SNMPv1, v2c, v3 (with security)',
            'Operations': 'GET, GETNEXT, SET, GETBULK, TRAP',
        },
        links: [
            { title: 'RFC 1157 — SNMP v1', url: 'https://datatracker.ietf.org/doc/html/rfc1157' },
            { title: 'RFC 3411 — SNMP v3', url: 'https://datatracker.ietf.org/doc/html/rfc3411' },
        ],
    },
    {
        id: 'ntp',
        name: 'Network Time Protocol',
        abbreviation: 'NTP',
        layer: 7,
        layerName: 'Application',
        description:
            'Protocol for time synchronization in computer networks. Uses a hierarchy of time servers (strata) to achieve millisecond accuracy. Critical for many distributed systems.',
        details: {
            'Default Port': '123 (UDP)',
            'Transport': 'UDP',
            'Accuracy': 'Milliseconds (LAN), tens of milliseconds (WAN)',
            'Strata': '0 (reference), 1 (primary), 2 (secondary), ...',
        },
        links: [
            { title: 'RFC 5905 — NTP v4', url: 'https://datatracker.ietf.org/doc/html/rfc5905' },
            { title: 'RFC 1305 — NTP v3', url: 'https://datatracker.ietf.org/doc/html/rfc1305' },
        ],
    },
    {
        id: 'syslog',
        name: 'System Logging Protocol',
        abbreviation: 'Syslog',
        layer: 7,
        layerName: 'Application',
        description:
            'Protocol for sending and receiving logs over a network. Used for centralized collection of event logs from various devices and applications. Supports classification by severity and facility.',
        details: {
            'Default Port': '514 (UDP), 6514 (TLS)',
            'Transport': 'UDP, TCP, TLS',
            'Severity Levels': 'Emergency, Alert, Critical, Error, Warning, Notice, Info, Debug',
            'Facilities': 'Kernel, User, Mail, System, Security, Network',
        },
        links: [
            { title: 'RFC 5424 — Syslog Protocol', url: 'https://datatracker.ietf.org/doc/html/rfc5424' },
            { title: 'RFC 5425 — Syslog TLS', url: 'https://datatracker.ietf.org/doc/html/rfc5425' },
        ],
    },
    {
        id: 'xmpp',
        name: 'Extensible Messaging and Presence Protocol',
        abbreviation: 'XMPP',
        layer: 7,
        layerName: 'Application',
        description:
            'XML-based protocol for real-time messaging. Used in messengers (Jabber, WhatsApp, Google Talk) and IoT. Provides federated architecture (servers exchange data).',
        details: {
            'Default Port': '5222 (client-server), 5269 (server-server)',
            'Transport': 'TCP (TLS)',
            'Format': 'XML (Streams and Stanzas)',
            'Extensions': 'XEP (XMPP Extension Protocols)',
        },
        links: [
            { title: 'RFC 6120 — XMPP Core', url: 'https://datatracker.ietf.org/doc/html/rfc6120' },
            { title: 'RFC 6121 — XMPP IM', url: 'https://datatracker.ietf.org/doc/html/rfc6121' },
        ],
    },
    {
        id: 'smpp',
        name: 'Short Message Peer-to-Peer Protocol',
        abbreviation: 'SMPP',
        layer: 7,
        layerName: 'Application',
        description:
            'Protocol for exchanging SMS messages between mobile operators and applications. Used in SMS gateways, marketing platforms, and two-factor authentication systems. Provides delivery, status, and transaction support.',
        details: {
            'Default Port': '2775',
            'Transport': 'TCP',
            'Versions': 'SMPP v3.3, v3.4, v5.0 (most common v3.4)',
            'Commands': 'BIND_TRANSCEIVER, SUBMIT_SM, DELIVER_SM, ENQUIRE_LINK, UNBIND',
            'Statuses': 'DELIVRD (delivered), EXPIRED, DELETED, UNDELIV, ACCEPTD',
        },
        links: [
            { title: 'SMPP v3.4 Specification', url: 'https://smpp.org/SMPP_v3_4_Issue1_2.pdf' },
            { title: 'SMPP v5.0 Specification', url: 'https://smpp.org/SMPP_v5_0.pdf' },
            { title: 'SMPP Protocol Overview', url: 'https://smpp.org/' },
        ],
    },
    {
        id: 'openvpn',
        name: 'OpenVPN Protocol',
        abbreviation: 'OpenVPN',
        layer: 7,
        layerName: 'Application',
        description:
            'Popular open-source VPN protocol. Uses TLS/SSL for key exchange and can run over TCP or UDP. Supports flexible configuration and a wide range of cryptographic algorithms.',
        details: {
            'Port': '1194 (UDP/TCP)',
            'Transport': 'UDP or TCP',
            'Encryption': 'AES-256, ChaCha20, Blowfish',
            'Authentication': 'Certificates, passwords, LDAP, RADIUS',
        },
        links: [
            { title: 'OpenVPN Official Site', url: 'https://openvpn.net/' },
            { title: 'OpenVPN Community Documentation', url: 'https://community.openvpn.net/openvpn/wiki' },
        ],
    },
    {
        id: 'rdp',
        name: 'Remote Desktop Protocol',
        abbreviation: 'RDP',
        layer: 7,
        layerName: 'Application',
        description:
            'Microsoft protocol for remote desktop access. Transmits GUI, keyboard, and mouse over the network. Supports encryption, compression, and device redirection.',
        details: {
            'Default Port': '3389',
            'Transport': 'TCP (RDP), UDP (for improved performance)',
            'Encryption': 'TLS, RSA, RC4 (deprecated)',
            'Features': 'Device redirection, multi-monitor, audio',
        },
        links: [
            {
                title: 'RDP Protocol Specification',
                url: 'https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-rdp/',
            },
            {
                title: 'MS-RDPBCGR — RDP Basic Connectivity',
                url: 'https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-rdpbcgr/',
            },
        ],
    },
    {
        id: 'vnc',
        name: 'Virtual Network Computing',
        abbreviation: 'VNC',
        layer: 7,
        layerName: 'Application',
        description:
            'Protocol for remote GUI control. Uses RFB (Remote Framebuffer) protocol for transmitting images and input events. Runs on many platforms (RealVNC, TigerVNC, TightVNC).',
        details: {
            'Default Port': '5900 (display 0)',
            'Transport': 'TCP',
            'Encryption': 'Optional (TLS, SSH tunnel)',
            'Codecs': 'Raw, ZRLE, Tight, Hextile, RRE',
        },
        links: [
            { title: 'RFB Protocol (VNC)', url: 'https://github.com/rfbproto/rfbproto' },
            { title: 'VNC Wikipedia', url: 'https://en.wikipedia.org/wiki/Virtual_Network_Computing' },
        ],
    },
    {
        id: 'nfs',
        name: 'Network File System',
        abbreviation: 'NFS',
        layer: 7,
        layerName: 'Application',
        description:
            'Protocol for accessing files over a network. Developed by Sun Microsystems. Allows mounting remote file systems as local. Widely used in Unix/Linux environments.',
        details: {
            'Port': '2049 (NFS), 111 (portmapper)',
            'Transport': 'UDP, TCP',
            'Versions': 'NFSv2, v3, v4 (with Kerberos support)',
            'Security': 'Kerberos, LIPKEY, SPKM-3',
        },
        links: [
            { title: 'RFC 1094 — NFS v2', url: 'https://datatracker.ietf.org/doc/html/rfc1094' },
            { title: 'RFC 1813 — NFS v3', url: 'https://datatracker.ietf.org/doc/html/rfc1813' },
            { title: 'RFC 7530 — NFS v4', url: 'https://datatracker.ietf.org/doc/html/rfc7530' },
        ],
    },
    {
        id: 'smb',
        name: 'Server Message Block',
        abbreviation: 'SMB',
        layer: 7,
        layerName: 'Application',
        description:
            'Protocol for file, printer, and resource sharing in Windows networks. Used in Windows Networking, Samba, and other implementations. Includes built-in encryption support.',
        details: {
            'Port': '445 (SMB over TCP), 139 (NetBIOS)',
            'Transport': 'TCP, QUIC (SMB over QUIC)',
            'Versions': 'SMB 1.0 (deprecated), 2.0, 2.1, 3.0, 3.1.1',
            'Commands': 'NEGOTIATE, SESSION_SETUP, TREE_CONNECT, READ, WRITE',
        },
        links: [
            {
                title: 'MS-SMB — SMB Protocol',
                url: 'https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-smb/',
            },
            { title: 'SMB Wikipedia', url: 'https://en.wikipedia.org/wiki/Server_Message_Block' },
        ],
    },
    {
        id: 'modbus',
        name: 'Modbus Protocol',
        abbreviation: 'Modbus',
        layer: 7,
        layerName: 'Application',
        description:
            'Protocol for communication in industrial automation systems (SCADA). Widely used in industry for controlling devices (PLCs, sensors, actuators). Supports serial and network transport.',
        details: {
            'Transport': 'Serial (RTU, ASCII), TCP (Modbus TCP)',
            'Port': '502 (Modbus TCP)',
            'Data Types': 'Coils (1-bit), Registers (16-bit), Inputs, Holding Registers',
            'Commands': 'READ_COILS, READ_HOLDING_REGISTERS, WRITE_SINGLE_COIL',
        },
        links: [
            {
                title: 'Modbus Protocol Specification',
                url: 'https://modbus.org/docs/Modbus_Application_Protocol_V1_1b3.pdf',
            },
            { title: 'Modbus Organization', url: 'https://modbus.org/' },
        ],
    },
    {
        id: 'ble',
        name: 'Bluetooth Low Energy',
        abbreviation: 'BLE',
        layer: 7,
        layerName: 'Application',
        description:
            'Low-power wireless protocol for IoT, wearables, and medical sensors. Uses GATT (Generic Attribute Profile) for data exchange.',
        details: {
            'Frequency': '2.4 GHz (ISM band)',
            'Speeds': '1 Mbps, 2 Mbps (LE 2M), 125/500 kbps (LE Coded)',
            'Profiles': 'GATT (Generic Attribute), GAP (Generic Access)',
            'Range': 'Up to 100 meters (Class 1), up to 10 meters (Class 2)',
        },
        links: [
            { title: 'Bluetooth SIG', url: 'https://www.bluetooth.com/' },
            { title: 'BLE Specifications', url: 'https://www.bluetooth.com/specifications/' },
        ],
    },
    {
        id: 'lora',
        name: 'LoRaWAN Protocol',
        abbreviation: 'LoRaWAN',
        layer: 7,
        layerName: 'Application',
        description:
            'Wireless protocol for long-range networks (LPWAN). Used in IoT for data transmission over long distances with low power consumption.',
        details: {
            'Frequencies': '433 MHz, 868 MHz, 915 MHz, 2.4 GHz',
            'Speeds': '0.3-50 kbps',
            'Range': 'Up to 15 km (rural), up to 5 km (urban)',
            'Topology': 'Star (with gateways)',
        },
        links: [
            { title: 'LoRa Alliance', url: 'https://lora-alliance.org/' },
            {
                title: 'LoRaWAN Specification',
                url: 'https://lora-alliance.org/resource_hub/lorawan-specification-v1-0-4/',
            },
        ],
    },

    // ===== PRESENTATION LAYER (6) =====
    {
        id: 'tls',
        name: 'Transport Layer Security',
        abbreviation: 'TLS',
        layer: 6,
        layerName: 'Presentation',
        description:
            'Cryptographic protocol for securing communication on the internet. Provides confidentiality, integrity, and authentication. Used in HTTPS, email, messengers, and many other applications. Successor to SSL.',
        details: {
            'Versions': 'TLS 1.0 (deprecated), 1.1 (deprecated), 1.2, 1.3',
            'Port': '443 (HTTPS), 465 (SMTPS), 993 (IMAPS)',
            'Encryption': 'AES-GCM, ChaCha20-Poly1305',
            'Handshake': '1-RTT (TLS 1.3), 0-RTT (optional)',
        },
        links: [
            { title: 'RFC 8446 — TLS 1.3', url: 'https://datatracker.ietf.org/doc/html/rfc8446' },
            { title: 'RFC 5246 — TLS 1.2', url: 'https://datatracker.ietf.org/doc/html/rfc5246' },
        ],
    },
    {
        id: 'ssl',
        name: 'Secure Sockets Layer',
        abbreviation: 'SSL',
        layer: 6,
        layerName: 'Presentation',
        description:
            'Predecessor to TLS, developed by Netscape. All SSL versions are considered insecure and deprecated. TLS 1.0 is effectively SSL 3.1. Modern systems use TLS 1.2 and 1.3.',
        details: {
            'Versions': 'SSL 1.0 (unreleased), 2.0 (deprecated), 3.0 (deprecated)',
            'Port': '443 (HTTPS), 465 (SMTPS), 993 (IMAPS)',
            'Security': 'Vulnerable (POODLE, BEAST, Heartbleed)',
            'Status': 'Fully replaced by TLS',
        },
        links: [
            { title: 'SSL 3.0 Specification', url: 'https://datatracker.ietf.org/doc/html/rfc6101' },
            { title: 'TLS/SSL Wikipedia', url: 'https://en.wikipedia.org/wiki/Transport_Layer_Security' },
        ],
    },

    // ===== TRANSPORT LAYER (4) =====
    {
        id: 'tcp',
        name: 'Transmission Control Protocol',
        abbreviation: 'TCP',
        layer: 4,
        layerName: 'Transport',
        description:
            'Reliable, connection-oriented transport layer protocol. Provides guaranteed data delivery, flow control, congestion management, and recovery of lost packets. Foundation of most internet applications.',
        details: {
            'Port': 'Dynamic (1–65535)',
            'Connection': 'Three-way handshake (SYN, SYN-ACK, ACK)',
            'Reliability': 'ACK, timeouts, retransmission',
            'Control': 'Flow Control (Window), Congestion Control',
        },
        links: [
            { title: 'RFC 9293 — TCP', url: 'https://datatracker.ietf.org/doc/html/rfc9293' },
            { title: 'RFC 5681 — TCP Congestion Control', url: 'https://datatracker.ietf.org/doc/html/rfc5681' },
            { title: 'RFC 7323 — TCP Extensions', url: 'https://datatracker.ietf.org/doc/html/rfc7323' },
        ],
    },
    {
        id: 'udp',
        name: 'User Datagram Protocol',
        abbreviation: 'UDP',
        layer: 4,
        layerName: 'Transport',
        description:
            'Simple, unreliable connectionless protocol. Does not guarantee delivery, order, or data integrity. Used in applications where speed is more important than reliability (video, audio, DNS, games).',
        details: {
            'Port': 'Dynamic (1–65535)',
            'Connection': 'None (connectionless)',
            'Reliability': 'None (best-effort)',
            'Usage': 'Streaming, VoIP, DNS, QUIC',
        },
        links: [
            { title: 'RFC 768 — UDP', url: 'https://datatracker.ietf.org/doc/html/rfc768' },
            { title: 'RFC 8085 — UDP Usage Guidelines', url: 'https://datatracker.ietf.org/doc/html/rfc8085' },
        ],
    },
    {
        id: 'quic',
        name: 'Quick UDP Internet Connections',
        abbreviation: 'QUIC',
        layer: 4,
        layerName: 'Transport',
        description:
            'Modern transport protocol running over UDP. Provides multiplexing, encryption (TLS 1.3), reduced latency, and packet loss resilience. Used in HTTP/3 and other Google applications.',
        details: {
            'Port': '443 (typically)',
            'Transport': 'UDP',
            'Encryption': 'TLS 1.3 (built-in)',
            'Features': 'Multiplexing, 0-RTT, connection migration',
        },
        links: [
            { title: 'RFC 9000 — QUIC', url: 'https://datatracker.ietf.org/doc/html/rfc9000' },
            { title: 'RFC 9001 — QUIC TLS', url: 'https://datatracker.ietf.org/doc/html/rfc9001' },
            { title: 'RFC 9002 — QUIC Recovery', url: 'https://datatracker.ietf.org/doc/html/rfc9002' },
        ],
    },

    // ===== NETWORK LAYER (3) =====
    {
        id: 'ipv4',
        name: 'Internet Protocol version 4',
        abbreviation: 'IPv4',
        layer: 3,
        layerName: 'Network',
        description:
            'First and most widely used version of the Internet Protocol. Uses 32-bit addresses (about 4.3 billion unique addresses). Due to limited address space, gradually being replaced by IPv6.',
        details: {
            'Address': '32 bits (e.g., 192.168.1.1)',
            'Fragmentation': 'Yes (MTU discovery)',
            'DHCP': 'Yes (automatic configuration)',
            'NAT': 'Yes (widely used)',
        },
        links: [
            { title: 'RFC 791 — IPv4', url: 'https://datatracker.ietf.org/doc/html/rfc791' },
            { title: 'RFC 1918 — Private IP Addresses', url: 'https://datatracker.ietf.org/doc/html/rfc1918' },
        ],
    },
    {
        id: 'ipv6',
        name: 'Internet Protocol version 6',
        abbreviation: 'IPv6',
        layer: 3,
        layerName: 'Network',
        description:
            'Modern version of the Internet Protocol using 128-bit addresses. Provides virtually unlimited address space, improved routing, and built-in security support (IPsec).',
        details: {
            'Address': '128 bits (e.g., 2001:db8::1)',
            'Fragmentation': 'Source only (not routers)',
            'Neighbor Discovery': 'Replaces ARP',
            'Autoconfiguration': 'SLAAC (Stateless Address Autoconfiguration)',
        },
        links: [
            { title: 'RFC 8200 — IPv6', url: 'https://datatracker.ietf.org/doc/html/rfc8200' },
            { title: 'RFC 4291 — IPv6 Addressing', url: 'https://datatracker.ietf.org/doc/html/rfc4291' },
            { title: 'RFC 4862 — IPv6 SLAAC', url: 'https://datatracker.ietf.org/doc/html/rfc4862' },
        ],
    },
    {
        id: 'icmp',
        name: 'Internet Control Message Protocol',
        abbreviation: 'ICMP',
        layer: 3,
        layerName: 'Network',
        description:
            'Protocol for diagnostic messages and network management. Used in ping (Echo Request/Reply) and traceroute utilities. Reports routing errors, host unreachability, and congestion.',
        details: {
            'Message Types': '0 (Echo Reply), 3 (Destination Unreachable), 8 (Echo Request), 11 (Time Exceeded)',
            'Codes': 'Additional information (e.g., 0 = Network Unreachable)',
            'Usage': 'ping, traceroute, path MTU discovery',
            'Security': 'Often blocked by firewalls',
        },
        links: [
            { title: 'RFC 792 — ICMP', url: 'https://datatracker.ietf.org/doc/html/rfc792' },
            { title: 'RFC 4443 — ICMPv6', url: 'https://datatracker.ietf.org/doc/html/rfc4443' },
        ],
    },
    {
        id: 'ipsec',
        name: 'Internet Protocol Security',
        abbreviation: 'IPsec',
        layer: 3,
        layerName: 'Network',
        description:
            'Suite of protocols for securing IP traffic. Provides encryption, authentication, and data integrity at the network layer. Used in VPN connections (L2TP/IPsec, IKEv2).',
        details: {
            'Modes': 'Transport (data only), Tunnel (entire packet)',
            'Components': 'AH (Authentication Header), ESP (Encapsulating Security Payload), IKE (Key Exchange)',
            'IKE Versions': 'IKEv1, IKEv2',
        },
        links: [
            { title: 'RFC 2401 — IPsec', url: 'https://datatracker.ietf.org/doc/html/rfc2401' },
            { title: 'RFC 7296 — IKEv2', url: 'https://datatracker.ietf.org/doc/html/rfc7296' },
        ],
    },
    {
        id: 'wireguard',
        name: 'WireGuard VPN Protocol',
        abbreviation: 'WireGuard',
        layer: 3,
        layerName: 'Network',
        description:
            'Modern, simple, and high-performance VPN protocol. Uses modern cryptography (Curve25519, ChaCha20, Poly1305). Built into the Linux kernel and considered one of the best VPN solutions.',
        details: {
            'Port': '51820 (UDP)',
            'Transport': 'UDP',
            'Cryptography': 'Curve25519, ChaCha20-Poly1305, BLAKE2s',
            'Features': 'Cryptographic routing, minimal overhead',
        },
        links: [
            { title: 'WireGuard Official Site', url: 'https://www.wireguard.com/' },
            { title: 'WireGuard Protocol Documentation', url: 'https://www.wireguard.com/protocol/' },
        ],
    },

    // ===== DATA LINK LAYER (2) =====
    {
        id: 'ethernet',
        name: 'Ethernet (IEEE 802.3)',
        abbreviation: 'Ethernet',
        layer: 2,
        layerName: 'Data Link',
        description:
            'Family of standards for wired local networks. Defines the physical layer (cables, signals) and data link layer (frames, MAC addressing). The most common LAN technology.',
        details: {
            'Speeds': '10 Mbps, 100 Mbps, 1 Gbps, 10 Gbps, 40 Gbps, 100 Gbps',
            'MAC Addresses': '48 bits (unique)',
            'Frames': 'Ethernet II (DIX), IEEE 802.3',
            'Media': 'Twisted pair (UTP), fiber optic, coaxial',
        },
        links: [
            { title: 'IEEE 802.3 — Ethernet', url: 'https://standards.ieee.org/ieee/802.3/' },
            { title: 'Ethernet Wikipedia', url: 'https://en.wikipedia.org/wiki/Ethernet' },
        ],
    },
    {
        id: 'wifi',
        name: 'Wi-Fi (IEEE 802.11)',
        abbreviation: 'Wi-Fi',
        layer: 2,
        layerName: 'Data Link',
        description:
            'Family of standards for wireless local networks. Defines the physical layer (radio signals) and data link layer (frames, MAC addressing). Widely used in home and enterprise networks.',
        details: {
            'Standards': '802.11a/b/g/n/ac/ax (Wi-Fi 6), be (Wi-Fi 7)',
            'Frequencies': '2.4 GHz, 5 GHz, 6 GHz',
            'Security': 'WEP, WPA, WPA2, WPA3',
            'Speeds': 'Up to 9.6 Gbps (Wi-Fi 6)',
        },
        links: [
            { title: 'IEEE 802.11 — Wi-Fi', url: 'https://standards.ieee.org/ieee/802.11/' },
            { title: 'Wi-Fi Alliance', url: 'https://www.wi-fi.org/' },
        ],
    },
    {
        id: 'zigbee',
        name: 'Zigbee Protocol (IEEE 802.15.4)',
        abbreviation: 'Zigbee',
        layer: 2,
        layerName: 'Data Link',
        description:
            'Wireless protocol for IoT and home automation. Operates on 2.4 GHz, 915 MHz, and 868 MHz frequencies. Supports mesh networks and low power consumption.',
        details: {
            'Standard': 'IEEE 802.15.4, Zigbee Alliance',
            'Frequencies': '2.4 GHz (global), 915 MHz (Americas), 868 MHz (Europe)',
            'Speeds': '250 kbps (2.4 GHz), 40 kbps (915 MHz), 20 kbps (868 MHz)',
            'Topologies': 'Star, Tree, Mesh',
        },
        links: [
            { title: 'Zigbee Alliance', url: 'https://csa-iot.org/' },
            { title: 'IEEE 802.15.4', url: 'https://standards.ieee.org/ieee/802.15.4/' },
        ],
    },
    {
        id: 'z-wave',
        name: 'Z-Wave Protocol',
        abbreviation: 'Z-Wave',
        layer: 2,
        layerName: 'Data Link',
        description:
            'Wireless protocol for home automation. Operates on 800-900 MHz frequencies (region-dependent). Supports mesh networks and low power consumption.',
        details: {
            'Frequencies': '868 MHz (Europe), 908 MHz (Americas), 921 MHz (Asia)',
            'Speeds': '9.6 kbps, 40 kbps, 100 kbps',
            'Topology': 'Mesh with routing',
            'Range': 'Up to 100 meters in open space',
        },
        links: [
            { title: 'Z-Wave Alliance', url: 'https://z-wavealliance.org/' },
            { title: 'Z-Wave Protocol Overview', url: 'https://z-wavealliance.org/z-wave-technology/' },
        ],
    },
];

// ============================================================
//  Helper functions
// ============================================================

function findProtocols(query) {
    if (!query || query.trim() === '') {
        return [];
    }

    const q = query.toLowerCase().trim();
    const results = [];

    for (const proto of PROTOCOLS) {
        const nameMatch = proto.name.toLowerCase().includes(q);
        const abbrMatch = proto.abbreviation.toLowerCase().includes(q);
        const idMatch = proto.id.toLowerCase().includes(q);

        if (nameMatch || abbrMatch || idMatch) {
            results.push(proto);
        }
    }

    results.sort((a, b) => {
        const aAbbr = a.abbreviation.toLowerCase();
        const bAbbr = b.abbreviation.toLowerCase();

        if (aAbbr === q && bAbbr !== q) return -1;
        if (bAbbr === q && aAbbr !== q) return 1;
        if (aAbbr.startsWith(q) && !bAbbr.startsWith(q)) return -1;
        if (bAbbr.startsWith(q) && !aAbbr.startsWith(q)) return 1;

        return a.name.localeCompare(b.name);
    });

    return results;
}

function getProtocolById(id) {
    return PROTOCOLS.find((p) => p.id === id) || null;
}

// Export for browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PROTOCOLS, findProtocols, getProtocolById };
}
