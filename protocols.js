// ============================================================
//  База данных сетевых протоколов
//  Добавляйте новые протоколы, следуя структуре ниже.
// ============================================================

const PROTOCOLS = [
    // ===== ПРИКЛАДНОЙ УРОВЕНЬ (7) =====
    {
        id: 'http',
        name: 'HyperText Transfer Protocol',
        abbreviation: 'HTTP',
        layer: 7,
        layerName: 'Прикладной',
        description:
            'Протокол прикладного уровня для передачи гипертекстовых документов (веб-страниц). Работает поверх TCP. Используется для загрузки веб-страниц, API-запросов и передачи данных в интернете. Версия HTTP/3 работает поверх QUIC.',
        details: {
            'Порт по умолчанию': '80 (HTTP), 443 (HTTPS)',
            'Транспорт': 'TCP (HTTP/1.1, HTTP/2), UDP (HTTP/3)',
            'Кодировка': 'Текст (ASCII) / бинарный (HTTP/2)',
            'Статус': 'Активный, постоянно развивается',
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
        layerName: 'Прикладной',
        description:
            'Защищённая версия HTTP, использующая TLS/SSL для шифрования трафика. Обеспечивает конфиденциальность, целостность и аутентификацию. Является стандартом для современных веб-сайтов и API.',
        details: {
            'Порт по умолчанию': '443',
            'Транспорт': 'TCP (TLS), UDP (QUIC + TLS)',
            'Шифрование': 'TLS 1.2 / 1.3',
            'Сертификаты': 'X.509 (PKI)',
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
        layerName: 'Прикладной',
        description:
            'Протокол для передачи файлов между клиентом и сервером. Использует два канала: управляющий (команды) и данных (файлы). В настоящее время вытесняется более безопасными протоколами (SFTP, FTPS).',
        details: {
            'Порт по умолчанию': '21 (управление), 20 (данные)',
            'Транспорт': 'TCP',
            'Режимы': 'Активный / Пассивный',
            'Безопасность': 'Нет (передаётся в открытом виде)',
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
        layerName: 'Прикладной',
        description:
            'Защищённый протокол для передачи файлов поверх SSH. Обеспечивает шифрование, аутентификацию и целостность данных. Используется вместо FTP для безопасной передачи файлов.',
        details: {
            'Порт по умолчанию': '22 (SSH)',
            'Транспорт': 'TCP (SSH)',
            'Команды': 'open, close, read, write, remove, rename, mkdir, rmdir',
            'Безопасность': 'Шифрование SSH',
        },
        links: [
            { title: 'RFC 913 — SFTP (обновлённый)', url: 'https://datatracker.ietf.org/doc/html/rfc913' },
            { title: 'SFTP Specification', url: 'https://filezilla-project.org/sftp_spec.htm' },
        ],
    },
    {
        id: 'ftps',
        name: 'FTP over SSL/TLS',
        abbreviation: 'FTPS',
        layer: 7,
        layerName: 'Прикладной',
        description:
            'Защищённая версия FTP с использованием SSL/TLS для шифрования каналов управления и данных. Обеспечивает конфиденциальность и аутентификацию.',
        details: {
            'Порт по умолчанию': '990 (управление), 989 (данные)',
            'Транспорт': 'TCP (TLS)',
            'Режимы': 'Явный TLS, Неявный TLS',
            'Безопасность': 'TLS 1.2 / 1.3',
        },
        links: [{ title: 'RFC 4217 — FTP over TLS', url: 'https://datatracker.ietf.org/doc/html/rfc4217' }],
    },
    {
        id: 'smtp',
        name: 'Simple Mail Transfer Protocol',
        abbreviation: 'SMTP',
        layer: 7,
        layerName: 'Прикладной',
        description:
            'Протокол для отправки электронной почты между почтовыми серверами. Работает поверх TCP. Используется для передачи сообщений от клиента к серверу и между серверами. Для получения почты используются POP3 или IMAP.',
        details: {
            'Порт по умолчанию': '25, 587 (Submission), 465 (SMTPS)',
            'Транспорт': 'TCP',
            'Команды': 'HELO, MAIL FROM, RCPT TO, DATA, QUIT',
            'Расширения': 'ESMTP (RFC 5321)',
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
        layerName: 'Прикладной',
        description:
            'Протокол для получения электронной почты с почтового сервера. Загружает сообщения на клиент и обычно удаляет их с сервера. Проще, чем IMAP, но менее функциональный.',
        details: {
            'Порт по умолчанию': '110 (незащищённый), 995 (POP3S)',
            'Транспорт': 'TCP',
            'Команды': 'USER, PASS, STAT, LIST, RETR, DELE, QUIT',
            'Состояния': 'Авторизация, Транзакция, Обновление',
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
        layerName: 'Прикладной',
        description:
            'Протокол для доступа к электронной почте на сервере. Позволяет управлять папками, искать сообщения и синхронизировать состояние между устройствами. Более мощный, чем POP3.',
        details: {
            'Порт по умолчанию': '143 (незащищённый), 993 (IMAPS)',
            'Транспорт': 'TCP',
            'Команды': 'LOGIN, SELECT, FETCH, SEARCH, STORE, APPEND, CLOSE',
            'Состояния': 'Неавторизованный, Авторизованный, Выбранный',
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
        layerName: 'Прикладной',
        description:
            'Распределённая система для преобразования доменных имён (например, example.com) в IP-адреса. Работает поверх UDP (иногда TCP). Является критически важным компонентом интернета, обеспечивающим маршрутизацию запросов.',
        details: {
            'Порт по умолчанию': '53 (UDP/TCP)',
            'Транспорт': 'UDP (основной), TCP (зонные трансферы)',
            'Типы записей': 'A, AAAA, CNAME, MX, TXT, NS, PTR, SOA',
            'Корневые серверы': '13 корневых серверов (A-M)',
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
        layerName: 'Прикладной',
        description:
            'Протокол для автоматической настройки сетевых параметров устройств: IP-адрес, маска подсети, шлюз, DNS-серверы. Работает поверх UDP. Упрощает управление IP-адресами в локальных сетях.',
        details: {
            'Порт по умолчанию': '67 (сервер), 68 (клиент)',
            'Транспорт': 'UDP',
            'Типы сообщений': 'DHCPDISCOVER, DHCPOFFER, DHCPREQUEST, DHCPACK',
            'Опции': 'Option 1 (Subnet Mask), Option 3 (Router), Option 6 (DNS)',
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
        layerName: 'Прикладной',
        description:
            'Защищённый протокол для удалённого управления серверами и безопасной передачи данных. Использует шифрование для защиты сессии. Заменяет небезопасные протоколы Telnet и rlogin.',
        details: {
            'Порт по умолчанию': '22',
            'Транспорт': 'TCP',
            'Шифрование': 'AES, ChaCha20, 3DES (устаревший)',
            'Аутентификация': 'Пароль, открытый ключ, Kerberos',
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
        layerName: 'Прикладной',
        description:
            'Протокол для удалённого доступа к серверам через текстовый интерфейс. Работает поверх TCP. Передаёт данные в открытом виде, поэтому считается небезопасным и вытесняется SSH.',
        details: {
            'Порт по умолчанию': '23',
            'Транспорт': 'TCP',
            'Опции': 'Echo, Suppress Go Ahead, Binary Transmission',
            'Безопасность': 'Нет (передаётся в открытом виде)',
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
        layerName: 'Прикладной',
        description:
            'Протокол для полнодуплексной связи между клиентом и сервером поверх TCP. Используется в веб-приложениях для реального времени: чаты, игры, биржевые данные. Работает через HTTP-рукопожатие, затем переключается на бинарный протокол.',
        details: {
            'Порт по умолчанию': '80 (ws), 443 (wss)',
            'Транспорт': 'TCP (ws), TLS (wss)',
            'Фреймы': 'Текст (UTF-8) или бинарные данные',
            'Поддержка': 'Все современные браузеры',
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
        layerName: 'Прикладной',
        description:
            'Лёгкий протокол типа "публикация-подписка" для передачи сообщений между устройствами в сетях IoT. Работает поверх TCP. Имеет минимальный оверхед (2-байтовый заголовок), что делает его идеальным для ограниченных устройств.',
        details: {
            'Порт по умолчанию': '1883 (MQTT), 8883 (MQTTS)',
            'Транспорт': 'TCP (MQTT), TLS (MQTTS)',
            'Уровни QoS': '0 (at most once), 1 (at least once), 2 (exactly once)',
            'Топики': 'Иерархические (например, home/livingroom/temperature)',
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
        layerName: 'Прикладной',
        description:
            'Протокол для обмена сообщениями между приложениями. Используется в брокерах сообщений (RabbitMQ, ActiveMQ). Обеспечивает маршрутизацию, надёжность и транзакционность.',
        details: {
            'Порт по умолчанию': '5672 (AMQP), 5671 (AMQPS)',
            'Транспорт': 'TCP (TLS)',
            'Модель': 'Producer → Exchange → Queue → Consumer',
            'Фреймы': 'Метод, заголовок, тело',
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
        layerName: 'Прикладной',
        description:
            'Современный RPC-фреймворк от Google, использующий HTTP/2 в качестве транспорта и Protocol Buffers для сериализации. Обеспечивает высокую производительность, мультиплексирование, стриминг и поддержку множества языков.',
        details: {
            'Транспорт': 'HTTP/2 (TCP)',
            'Сериализация': 'Protocol Buffers (protobuf)',
            'Типы вызовов': 'Unary, Server Streaming, Client Streaming, Bidirectional Streaming',
            'Интерфейс': 'Описание в .proto файлах',
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
        layerName: 'Прикладной',
        description:
            'Архитектурный стиль для построения распределённых систем. Использует HTTP в качестве транспорта, стандартные методы (GET, POST, PUT, DELETE) и формат JSON/XML. Не является протоколом, но часто рассматривается как стандарт для API.',
        details: {
            'Транспорт': 'HTTP/HTTPS',
            'Форматы': 'JSON, XML, HTML, YAML',
            'Методы': 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS',
            'Принципы': 'Клиент-сервер, отсутствие состояния, кеширование',
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
        layerName: 'Прикладной',
        description:
            'Язык запросов и среда выполнения для API, разработанный Facebook. Позволяет клиентам запрашивать только необходимые данные, уменьшая количество запросов и объём передаваемых данных.',
        details: {
            'Транспорт': 'HTTP/HTTPS (обычно POST)',
            'Формат': 'JSON',
            'Типы': 'Query, Mutation, Subscription',
            'Интроспекция': 'Да (схема доступна через запросы)',
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
        layerName: 'Прикладной',
        description:
            'Протокол для передачи аудио и видео в реальном времени поверх UDP. Используется в IP-телефонии (VoIP), видеоконференциях и стриминге. Обычно работает вместе с RTCP для управления сессией.',
        details: {
            'Порт': 'Обычно 16384-32767 (динамический)',
            'Транспорт': 'UDP',
            'Заголовок': '12 байт (как минимум)',
            'Кодеки': 'Opus, VP8, H.264, AAC, PCM',
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
        layerName: 'Прикладной',
        description:
            'Протокол для управления потоками мультимедиа. Используется для установки и управления медиа-сессиями между клиентом и сервером. Поддерживает VCR-команды: play, pause, fast-forward, rewind.',
        details: {
            'Порт по умолчанию': '554',
            'Транспорт': 'TCP (управление), UDP/RTP (данные)',
            'Команды': 'DESCRIBE, SETUP, PLAY, PAUSE, TEARDOWN',
            'Методы': 'Аннонсирование, Запись, Воспроизведение',
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
        layerName: 'Прикладной',
        description:
            'Протокол для установки, управления и завершения сессий связи (голос, видео, сообщения). Широко используется в VoIP-системах. Работает поверх TCP или UDP, обычно вместе с RTP для передачи медиа.',
        details: {
            'Порт по умолчанию': '5060 (UDP/TCP), 5061 (TLS)',
            'Транспорт': 'UDP, TCP, TLS',
            'Методы': 'INVITE, ACK, BYE, CANCEL, REGISTER, OPTIONS',
            'Коды ответа': '1xx (Информационные), 2xx (Успех), 3xx (Перенаправление)',
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
        layerName: 'Прикладной',
        description:
            'Протокол для доступа к каталогам (директориям) по сети. Используется для хранения и поиска информации о пользователях, компьютерах и других объектах. Часто применяется в корпоративных сетях (Active Directory).',
        details: {
            'Порт по умолчанию': '389 (LDAP), 636 (LDAPS)',
            'Транспорт': 'TCP (TLS)',
            'Операции': 'Bind, Search, Compare, Add, Delete, Modify, Move',
            'Модель': 'Иерархическая (DIT — Directory Information Tree)',
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
        layerName: 'Прикладной',
        description:
            'Протокол для управления сетевыми устройствами (маршрутизаторы, коммутаторы, принтеры). Позволяет собирать информацию и настраивать параметры устройств. Использует MIB (Management Information Base) для описания данных.',
        details: {
            'Порт по умолчанию': '161 (агент), 162 (trap)',
            'Транспорт': 'UDP',
            'Версии': 'SNMPv1, v2c, v3 (с безопасностью)',
            'Операции': 'GET, GETNEXT, SET, GETBULK, TRAP',
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
        layerName: 'Прикладной',
        description:
            'Протокол для синхронизации времени в компьютерных сетях. Использует иерархию серверов времени (страты) для достижения точности до миллисекунд. Является критическим для многих распределённых систем.',
        details: {
            'Порт по умолчанию': '123 (UDP)',
            'Транспорт': 'UDP',
            'Точность': 'Миллисекунды (LAN), десятки миллисекунд (WAN)',
            'Страты': '0 (эталон), 1 (первичный), 2 (вторичный), ...',
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
        layerName: 'Прикладной',
        description:
            'Протокол для отправки и приёма логов в сети. Используется для централизованного сбора журналов событий от различных устройств и приложений. Поддерживает классификацию по важности и типу.',
        details: {
            'Порт по умолчанию': '514 (UDP), 6514 (TLS)',
            'Транспорт': 'UDP, TCP, TLS',
            'Уровни важности': 'Emergency, Alert, Critical, Error, Warning, Notice, Info, Debug',
            'Объекты': 'Kernel, User, Mail, System, Security, Network',
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
        layerName: 'Прикладной',
        description:
            'Протокол для обмена сообщениями в реальном времени, основанный на XML. Используется в мессенджерах (Jabber, WhatsApp, Google Talk) и IoT. Обеспечивает федеративную архитектуру (серверы обмениваются данными).',
        details: {
            'Порт по умолчанию': '5222 (клиент-сервер), 5269 (сервер-сервер)',
            'Транспорт': 'TCP (TLS)',
            'Формат': 'XML (Streams and Stanzas)',
            'Расширения': 'XEP (XMPP Extension Protocols)',
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
        layerName: 'Прикладной',
        description:
            'Стандарт для обмена календарной информацией и планирования событий. Использует формат iCalendar (.ics) для описания событий, задач и встреч. Часто применяется для публикации календарей и обмена приглашениями.',
        details: {
            'Формат': 'iCalendar (.ics)',
            'Транспорт': 'HTTP/HTTPS, E-mail (iMIP)',
            'Компоненты': 'VEVENT, VTODO, VJOURNAL, VFREEBUSY',
            'Свойства': 'SUMMARY, DTSTART, DTEND, LOCATION, ATTENDEE',
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
        layerName: 'Прикладной',
        description:
            'Протокол для обмена SMS-сообщениями между операторами мобильной связи и приложениями. Используется в SMS-шлюзах, маркетинговых платформах и системах двухфакторной аутентификации. Обеспечивает доставку, статусы и транзакционность.',
        details: {
            'Порт по умолчанию': '2775',
            'Транспорт': 'TCP',
            'Версии': 'SMPP v3.3, v3.4, v5.0 (самая распространенная v3.4)',
            'Команды': 'BIND_TRANSCEIVER, SUBMIT_SM, DELIVER_SM, ENQUIRE_LINK, UNBIND',
            'Статусы': 'DELIVRD (доставлено), EXPIRED, DELETED, UNDELIV, ACCEPTD',
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
        layerName: 'Прикладной',
        description:
            'Протокол для передачи коротких сообщений в сетях GSM. Используется для интерактивных услуг мобильных операторов (баланс, тарифы, услуги). Отличается от SMS тем, что устанавливает сессию и поддерживает диалог.',
        details: {
            'Транспорт': 'GSM MAP (Signaling)',
            'Коды': '*100# (баланс), *111# (услуги) и т.д.',
            'Сессии': 'Интерактивные (запрос-ответ)',
