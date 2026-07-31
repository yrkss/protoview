// ============================================================
//  Network Protocols Database — Complete OSI Model (Layers 1-7)
//  Total: 61 protocols
// ============================================================

const PROTOCOLS = [
    // ===== LAYER 7: APPLICATION =====
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
        id: 'sftp',
        name: 'SSH File Transfer Protocol',
        abbreviation: 'SFTP',
        layer: 7,
        layerName: 'Application',
        description:
            'Secure protocol for file transfer over SSH. Provides encryption, authentication, and data integrity. Used instead of FTP for secure file transfer.',
        details: {
            'Default Port': '22 (SSH)',
            'Transport': 'TCP (SSH)',
            'Commands': 'open, close, read, write, remove, rename, mkdir, rmdir',
            'Security': 'SSH encryption',
        },
        links: [
            { title: 'RFC 913 — SFTP (updated)', url: 'https://datatracker.ietf.org/doc/html/rfc913' },
            { title: 'SFTP Specification', url: 'https://filezilla-project.org/sftp_spec.htm' },
        ],
    },
    {
        id: 'ftps',
        name: 'FTP over SSL/TLS',
        abbreviation: 'FTPS',
        layer: 7,
        layerName: 'Application',
        description:
            'Secure version of FTP using SSL/TLS for encrypting control and data channels. Provides confidentiality and authentication.',
        details: {
            'Default Port': '990 (control), 989 (data)',
            'Transport': 'TCP (TLS)',
            'Modes': 'Explicit TLS, Implicit TLS',
            'Security': 'TLS 1.2 / 1.3',
        },
        links: [{ title: 'RFC 4217 — FTP over TLS', url: 'https://datatracker.ietf.org/doc/html/rfc4217' }],
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
        id: 'pop3',
        name: 'Post Office Protocol version 3',
        abbreviation: 'POP3',
        layer: 7,
        layerName: 'Application',
        description:
            'Protocol for retrieving email from a mail server. Downloads messages to the client and usually deletes them from the server. Simpler than IMAP but less functional.',
        details: {
            'Default Port': '110 (unencrypted), 995 (POP3S)',
            'Transport': 'TCP',
            'Commands': 'USER, PASS, STAT, LIST, RETR, DELE, QUIT',
            'States': 'Authorization, Transaction, Update',
        },
        links: [
            { title: 'RFC 1939 — POP3', url: 'https://datatracker.ietf.org/doc/html/rfc1939' },
            { title: 'RFC 2595 — POP3 over TLS', url: 'https://datatracker.ietf.org/doc/html/rfc2595' },
        ],
    },
    {
        id: 'imap',
        name: 'Internet Message Access Protocol',
        abbreviation: 'IMAP',
        layer: 7,
        layerName: 'Application',
        description:
            'Protocol for accessing email on a server. Allows managing folders, searching messages, and synchronizing state across devices. More powerful than POP3.',
        details: {
            'Default Port': '143 (unencrypted), 993 (IMAPS)',
            'Transport': 'TCP',
            'Commands': 'LOGIN, SELECT, FETCH, SEARCH, STORE, APPEND, CLOSE',
            'States': 'Unauthenticated, Authenticated, Selected',
        },
        links: [
            { title: 'RFC 9051 — IMAP v4rev2', url: 'https://datatracker.ietf.org/doc/html/rfc9051' },
            { title: 'RFC 2595 — IMAP over TLS', url: 'https://datatracker.ietf.org/doc/html/rfc2595' },
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
        id: 'telnet',
        name: 'Teletype Network Protocol',
        abbreviation: 'TELNET',
        layer: 7,
        layerName: 'Application',
        description:
            'Protocol for remote access to servers via text interface. Runs over TCP. Transmits data in plain text, so it is considered insecure and replaced by SSH.',
        details: {
            'Default Port': '23',
            'Transport': 'TCP',
            'Options': 'Echo, Suppress Go Ahead, Binary Transmission',
            'Security': 'None (transmitted in plain text)',
        },
        links: [
            { title: 'RFC 854 — TELNET', url: 'https://datatracker.ietf.org/doc/html/rfc854' },
            { title: 'RFC 855 — TELNET Options', url: 'https://datatracker.ietf.org/doc/html/rfc855' },
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
        id: 'amqp',
        name: 'Advanced Message Queuing Protocol',
        abbreviation: 'AMQP',
        layer: 7,
        layerName: 'Application',
        description:
            'Protocol for message exchange between applications. Used in message brokers (RabbitMQ, ActiveMQ). Provides routing, reliability, and transactional support.',
        details: {
            'Default Port': '5672 (AMQP), 5671 (AMQPS)',
            'Transport': 'TCP (TLS)',
            'Model': 'Producer → Exchange → Queue → Consumer',
            'Frames': 'Method, header, body',
        },
        links: [
            { title: 'AMQP 1.0 Specification', url: 'https://www.amqp.org/specification/1.0/' },
            { title: 'AMQP 0-9-1 Reference', url: 'https://www.rabbitmq.com/amqp-0-9-1-reference.html' },
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
        id: 'rtsp',
        name: 'Real Time Streaming Protocol',
        abbreviation: 'RTSP',
        layer: 7,
        layerName: 'Application',
        description:
            'Protocol for controlling media streams. Used to set up and manage media sessions between client and server. Supports VCR commands: play, pause, fast-forward, rewind.',
        details: {
            'Default Port': '554',
            'Transport': 'TCP (control), UDP/RTP (data)',
            'Commands': 'DESCRIBE, SETUP, PLAY, PAUSE, TEARDOWN',
            'Methods': 'Announce, Record, Playback',
        },
        links: [
            { title: 'RFC 7826 — RTSP v2.0', url: 'https://datatracker.ietf.org/doc/html/rfc7826' },
            { title: 'RFC 2326 — RTSP v1.0', url: 'https://datatracker.ietf.org/doc/html/rfc2326' },
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
        id: 'ical',
        name: 'Internet Calendaring and Scheduling Core',
        abbreviation: 'iCalendar',
        layer: 7,
        layerName: 'Application',
        description:
            'Standard for exchanging calendar information and scheduling events. Uses iCalendar format (.ics) to describe events, tasks, and meetings. Often used for publishing calendars and sharing invitations.',
        details: {
            'Format': 'iCalendar (.ics)',
            'Transport': 'HTTP/HTTPS, E-mail (iMIP)',
            'Components': 'VEVENT, VTODO, VJOURNAL, VFREEBUSY',
            'Properties': 'SUMMARY, DTSTART, DTEND, LOCATION, ATTENDEE',
        },
        links: [
            { title: 'RFC 5545 — iCalendar', url: 'https://datatracker.ietf.org/doc/html/rfc5545' },
            { title: 'RFC 5546 — iTIP (iCalendar Transport)', url: 'https://datatracker.ietf.org/doc/html/rfc5546' },
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
        id: 'ussd',
        name: 'Unstructured Supplementary Service Data',
        abbreviation: 'USSD',
        layer: 7,
        layerName: 'Application',
        description:
            'Protocol for sending short messages in GSM networks. Used for interactive mobile operator services (balance, tariffs, services). Unlike SMS, it establishes a session and supports dialogue.',
        details: {
            'Transport': 'GSM MAP (Signaling)',
            'Codes': '*100# (balance), *111# (services), etc.',
            'Sessions': 'Interactive (request-response)',
            'Usage': 'Mobile operators, banking services, voting',
        },
        links: [
            { title: 'USSD Technical Specification', url: 'https://www.etsi.org/deliver/etsi_ts/122000_122099/122090/' },
            { title: 'USSD Wikipedia', url: 'https://en.wikipedia.org/wiki/Unstructured_Supplementary_Service_Data' },
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
        id: 'cifs',
        name: 'Common Internet File System',
        abbreviation: 'CIFS',
        layer: 7,
        layerName: 'Application',
        description:
            'Dialect of the SMB protocol developed by Microsoft. Used for file and printer sharing over a network. An older version of SMB, but the term is often used as a synonym for SMB.',
        details: {
            'Port': '445',
            'Transport': 'TCP',
            'Features': 'Supports transactions, authentication, caching',
            'Status': 'Replaced by SMB 2.0 and above',
        },
        links: [
            {
                title: 'CIFS Protocol Specification',
                url: 'https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cifs/',
            },
            { title: 'CIFS Wikipedia', url: 'https://en.wikipedia.org/wiki/Server_Message_Block#CIFS' },
        ],
    },
    {
        id: 'dicom',
        name: 'Digital Imaging and Communications in Medicine',
        abbreviation: 'DICOM',
        layer: 7,
        layerName: 'Application',
        description:
            'Standard for transmitting, storing, and exchanging medical images (X-ray, MRI, CT) and related information. Used in medical information systems (PACS, RIS).',
        details: {
            'Port': '11112 (DICOM), 2762 (DICOM TLS)',
            'Transport': 'TCP, DICOM Web Services (REST)',
            'Objects': 'Image, Study, Series, Patient, Modality',
            'Formats': 'DICOM (.dcm), JPEG, JPEG2000, MPEG',
        },
        links: [
            { title: 'DICOM Standard', url: 'https://www.dicomstandard.org/' },
            {
                title: 'DICOM Introduction',
                url: 'https://dicom.nema.org/medical/dicom/current/output/html/part01.html',
            },
        ],
    },
    {
        id: 'hl7',
        name: 'Health Level Seven International',
        abbreviation: 'HL7',
        layer: 7,
        layerName: 'Application',
        description:
            'Standard for exchanging data in healthcare. Defines formats and protocols for transmitting medical information between systems (EHR, laboratories, pharmacies).',
        details: {
            'Versions': 'HL7 v2 (text-based), v3 (XML), FHIR (RESTful API)',
            'Transport': 'MLLP (TCP), HTTP (FHIR)',
            'Messages': 'ADT (registration), ORU (results), ORM (orders)',
            'Formats': 'Pipe-delimited, XML, JSON (FHIR)',
        },
        links: [
            { title: 'HL7 International', url: 'https://www.hl7.org/' },
            { title: 'HL7 FHIR Specification', url: 'https://hl7.org/fhir/' },
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
        id: 'bacnet',
        name: 'Building Automation and Control Networks',
        abbreviation: 'BACnet',
        layer: 7,
        layerName: 'Application',
        description:
            'Protocol for building automation systems (HVAC, lighting, security). Developed by ASHRAE. Supports multiple transport technologies (BACnet/IP, MS/TP, ARCnet, Zigbee).',
        details: {
            'Transport': 'UDP (BACnet/IP), RS-485 (MS/TP)',
            'Port': '47808 (BACnet/IP)',
            'Objects': 'AnalogInput, AnalogOutput, BinaryInput, BinaryOutput, Device',
            'Properties': 'PresentValue, Units, Description, Reliability',
        },
        links: [
            { title: 'BACnet Standard (ASHRAE 135)', url: 'https://www.bacnet.org/' },
            { title: 'BACnet Protocol Stack', url: 'https://bacnet.sourceforge.net/' },
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

    // ===== LAYER 6: PRESENTATION =====
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

    // ===== LAYER 5: SESSION =====
    {
        id: 'netbios',
        name: 'Network Basic Input/Output System',
        abbreviation: 'NetBIOS',
        layer: 5,
        layerName: 'Session',
        description:
            'Protocol for providing communication services on local networks. Works at the session layer, establishing and maintaining connections. Often used with NetBEUI and TCP/IP.',
        details: {
            'Port': '137 (NetBIOS Name), 138 (Datagram), 139 (Session)',
            'Transport': 'UDP (name, datagram), TCP (session)',
            'Services': 'Name Service, Datagram Service, Session Service',
            'Status': 'Legacy, mostly replaced by DNS and SMB',
        },
        links: [
            { title: 'RFC 1001 — NetBIOS over TCP/IP', url: 'https://datatracker.ietf.org/doc/html/rfc1001' },
            { title: 'RFC 1002 — NetBIOS over TCP/IP', url: 'https://datatracker.ietf.org/doc/html/rfc1002' },
        ],
    },

    // ===== LAYER 4: TRANSPORT =====
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
    {
        id: 'sctp',
        name: 'Stream Control Transmission Protocol',
        abbreviation: 'SCTP',
        layer: 4,
        layerName: 'Transport',
        description:
            'Reliable transport protocol with multi-homing and stream multiplexing support. Used in telephony networks (SIGTRAN) and some VoIP systems. Combines advantages of TCP and UDP.',
        details: {
            'Port': 'Dynamic (1–65535)',
            'Connection': 'Four-way handshake (INIT, INIT-ACK, COOKIE-ECHO, COOKIE-ACK)',
            'Reliability': 'SACK, retransmission',
            'Features': 'Multi-homing, stream multiplexing',
        },
        links: [
            { title: 'RFC 4960 — SCTP', url: 'https://datatracker.ietf.org/doc/html/rfc4960' },
            { title: 'RFC 3286 — SCTP Introduction', url: 'https://datatracker.ietf.org/doc/html/rfc3286' },
        ],
    },

    // ===== LAYER 3: NETWORK =====
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
        id: 'igmp',
        name: 'Internet Group Management Protocol',
        abbreviation: 'IGMP',
        layer: 3,
        layerName: 'Network',
        description:
            'Protocol for managing multicast group addressing in IPv4 networks. Used by hosts to inform routers about their desire to receive multicast traffic for specific groups.',
        details: {
            'Versions': 'IGMPv1, v2, v3',
            'Transport': 'IP (with header)',
            'Messages': 'Membership Query, Membership Report, Leave Group',
            'Usage': 'IPTV, video conferencing',
        },
        links: [
            { title: 'RFC 1112 — IGMPv1', url: 'https://datatracker.ietf.org/doc/html/rfc1112' },
            { title: 'RFC 2236 — IGMPv2', url: 'https://datatracker.ietf.org/doc/html/rfc2236' },
            { title: 'RFC 3376 — IGMPv3', url: 'https://datatracker.ietf.org/doc/html/rfc3376' },
        ],
    },
    {
        id: 'arp',
        name: 'Address Resolution Protocol',
        abbreviation: 'ARP',
        layer: 3,
        layerName: 'Network',
        description:
            'Protocol for translating IP addresses to MAC addresses in local networks. Works only within a single network segment (broadcast domain). Critical for Ethernet and other link-layer technologies.',
        details: {
            'Transport': 'Directly over link layer',
            'Message Types': 'ARP Request, ARP Reply',
            'Cache': 'ARP table (usually 5-10 minutes)',
            'Security': 'Vulnerable to ARP Spoofing (Man-in-the-Middle attacks)',
        },
        links: [
            { title: 'RFC 826 — ARP', url: 'https://datatracker.ietf.org/doc/html/rfc826' },
            { title: 'RFC 5227 — IPv4 Address Conflict Detection', url: 'https://datatracker.ietf.org/doc/html/rfc5227' },
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

    // ===== LAYER 2: DATA LINK =====
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
        id: 'vlan',
        name: 'Virtual Local Area Network (IEEE 802.1Q)',
        abbreviation: 'VLAN',
        layer: 2,
        layerName: 'Data Link',
        description:
            'Technology for logically partitioning networks into isolated segments. Allows grouping devices regardless of physical location. Improves network security and performance.',
        details: {
            'Standard': 'IEEE 802.1Q',
            'Tags': '4-byte header (VLAN ID 1-4094)',
            'Port Types': 'Access (Untagged), Trunk (Tagged)',
            'VLAN ID': '1 (default), 2-4094 (user-defined)',
        },
        links: [
            { title: 'IEEE 802.1Q — VLAN', url: 'https://standards.ieee.org/ieee/802.1Q/' },
            { title: 'VLAN Wikipedia', url: 'https://en.wikipedia.org/wiki/Virtual_LAN' },
        ],
    },
    {
        id: 'ppp',
        name: 'Point-to-Point Protocol',
        abbreviation: 'PPP',
        layer: 2,
        layerName: 'Data Link',
        description:
            'Protocol for establishing direct connection between two nodes. Used in dial-up, DSL, and VPN connections. Supports authentication (PAP, CHAP), encryption, and data compression.',
        details: {
            'Transport': 'Serial, Ethernet (PPPoE)',
            'Frames': 'Flags, Address, Control, Protocol, Data, FCS',
            'Authentication': 'PAP, CHAP, EAP',
            'NCP': 'Network Control Protocols (IPCP, IPXCP, IPv6CP)',
        },
        links: [
            { title: 'RFC 1661 — PPP', url: 'https://datatracker.ietf.org/doc/html/rfc1661' },
            { title: 'RFC 1334 — PAP/CHAP', url: 'https://datatracker.ietf.org/doc/html/rfc1334' },
            { title: 'RFC 2516 — PPPoE', url: 'https://datatracker.ietf.org/doc/html/rfc2516' },
        ],
    },
    {
        id: 'can',
        name: 'Controller Area Network',
        abbreviation: 'CAN',
        layer: 2,
        layerName: 'Data Link',
        description:
            'Protocol for automotive and industrial real-time systems. Used for communication between electronic control units (ECUs) in vehicles, robotics, and industrial applications.',
        details: {
            'Speeds': 'Up to 1 Mbps (CAN), up to 5 Mbps (CAN FD)',
            'Frames': 'Data Frame, Remote Frame, Error Frame, Overload Frame',
            'ID': '11-bit (CAN 2.0A), 29-bit (CAN 2.0B)',
            'Transport': 'Physical layer (CAN_H/CAN_L)',
        },
        links: [
            { title: 'CAN Specification 2.0', url: 'https://www.can-cia.org/can-specification/' },
            { title: 'CAN in Automation (CiA)', url: 'https://www.can-cia.org/' },
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

    // ===== LAYER 1: PHYSICAL =====
    {
        id: 'usb',
        name: 'Universal Serial Bus',
        abbreviation: 'USB',
        layer: 1,
        layerName: 'Physical',
        description:
            'Industry standard for short-distance digital data communication. Defines cables, connectors, and communication protocols for connection, communication, and power supply between computers and peripherals.',
        details: {
            'Versions': 'USB 1.0, 1.1, 2.0, 3.0, 3.1, 3.2, USB4',
            'Speeds': 'Up to 40 Gbps (USB4)',
            'Connectors': 'Type-A, Type-B, Type-C, Micro, Mini',
            'Power': 'Up to 240W (USB PD 3.1)',
        },
        links: [
            { title: 'USB Specifications', url: 'https://www.usb.org/documents' },
            { title: 'USB Wikipedia', url: 'https://en.wikipedia.org/wiki/USB' },
        ],
    },
    {
        id: 'dsl',
        name: 'Digital Subscriber Line',
        abbreviation: 'DSL',
        layer: 1,
        layerName: 'Physical',
        description:
            'Family of technologies for transmitting digital data over telephone lines. Uses high-frequency bands for data while voice uses low-frequency bands. Provides broadband internet access.',
        details: {
            'Variants': 'ADSL, VDSL, SDSL, HDSL',
            'Speeds': 'Up to 100 Mbps (VDSL2), up to 10 Gbps (G.fast)',
            'Distance': 'Up to 5 km (ADSL), up to 1 km (VDSL)',
            'Frequency': '25 kHz to 1.1 MHz (ADSL), up to 30 MHz (VDSL2)',
        },
        links: [
            { title: 'ITU G.992 — ADSL', url: 'https://www.itu.int/rec/T-REC-G.992' },
            { title: 'ITU G.993 — VDSL', url: 'https://www.itu.int/rec/T-REC-G.993' },
        ],
    },
    {
        id: 'sonet',
        name: 'Synchronous Optical Networking',
        abbreviation: 'SONET/SDH',
        layer: 1,
        layerName: 'Physical',
        description:
            'Standard for synchronous data transmission over optical fiber. Used in telecommunications backbone networks. Provides high-speed, reliable data transport with built-in error correction.',
        details: {
            'Speeds': '51.84 Mbps (OC-1) to 160 Gbps (OC-3072)',
            'Frames': 'STM-1, STM-4, STM-16, STM-64, STM-256',
            'Signal': 'Optical (OC) / Electrical (STS)',
            'Applications': 'Backbone networks, telecommunications',
        },
        links: [
            { title: 'ITU G.707 — SDH', url: 'https://www.itu.int/rec/T-REC-G.707' },
            { title: 'SONET Wikipedia', url: 'https://en.wikipedia.org/wiki/Synchronous_Optical_Networking' },
        ],
    },
    {
        id: 'pon',
        name: 'Passive Optical Network',
        abbreviation: 'PON',
        layer: 1,
        layerName: 'Physical',
        description:
            'Technology for delivering fiber-to-the-home (FTTH) broadband access. Uses passive splitters to serve multiple customers from a single fiber. Provides high-speed internet, voice, and video services.',
        details: {
            'Variants': 'GPON, EPON, XG-PON, NG-PON2',
            'Speeds': 'Up to 2.5 Gbps (GPON), up to 10 Gbps (XG-PON)',
            'Split Ratio': '1:32, 1:64, up to 1:128',
            'Distance': 'Up to 20 km',
        },
        links: [
            { title: 'ITU G.984 — GPON', url: 'https://www.itu.int/rec/T-REC-G.984' },
            { title: 'PON Wikipedia', url: 'https://en.wikipedia.org/wiki/Passive_optical_network' },
        ],
    },
    {
        id: 'rs232',
        name: 'RS-232 Serial Communication',
        abbreviation: 'RS-232',
        layer: 1,
        layerName: 'Physical',
        description:
            'Standard for serial communication transmission. Defines electrical characteristics, signal timing, and connector pinouts. Widely used in legacy systems, industrial equipment, and embedded devices.',
        details: {
            'Signal Levels': '+3V to +15V (logic 0), -3V to -15V (logic 1)',
            'Speeds': 'Up to 115.2 kbps (standard), up to 1 Mbps (custom)',
            'Connectors': 'DB-9, DB-25',
            'Distance': 'Up to 15 meters at 9600 baud',
        },
        links: [
            { title: 'RS-232 EIA/TIA-232-F', url: 'https://www.eia.org/standards' },
            { title: 'RS-232 Wikipedia', url: 'https://en.wikipedia.org/wiki/RS-232' },
        ],
    },
    {
        id: 'thunderbolt',
        name: 'Thunderbolt Interface',
        abbreviation: 'Thunderbolt',
        layer: 1,
        layerName: 'Physical',
        description:
            'High-speed hardware interface for connecting external peripherals. Combines PCI Express and DisplayPort into a single cable. Provides data transfer, video output, and power delivery.',
        details: {
            'Versions': 'Thunderbolt 1, 2, 3, 4, 5',
            'Speeds': 'Up to 40 Gbps (TB3/TB4), up to 80 Gbps (TB5)',
            'Connector': 'Mini DisplayPort (TB1/TB2), USB-C (TB3/TB4/TB5)',
            'Power': 'Up to 100W (TB4)',
        },
        links: [
            { title: 'Thunderbolt Technology', url: 'https://www.intel.com/content/www/us/en/architecture-and-technology/thunderbolt/overview.html' },
            { title: 'Thunderbolt Wikipedia', url: 'https://en.wikipedia.org/wiki/Thunderbolt_(interface)' },
        ],
    },
    {
        id: 'ethernet_phy',
        name: 'Ethernet Physical Layer',
        abbreviation: 'Ethernet PHY',
        layer: 1,
        layerName: 'Physical',
        description:
            'Physical layer implementation of Ethernet. Defines electrical specifications, cabling, and signaling for wired networks. Includes standards for twisted pair, fiber optic, and coaxial media.',
        details: {
            'Media': 'Twisted pair (UTP, STP), Fiber optic, Coaxial',
            'Connectors': 'RJ-45, SFP, SFP+, QSFP',
            'Signal': 'Baseband (digital)',
            'Encoding': 'Manchester (10Base-T), MLT-3 (100Base-TX), PAM-5 (1000Base-T)',
        },
        links: [
            { title: 'IEEE 802.3 Physical Layer', url: 'https://standards.ieee.org/ieee/802.3/' },
            { title: 'Ethernet PHY Wikipedia', url: 'https://en.wikipedia.org/wiki/Ethernet_physical_layer' },
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
