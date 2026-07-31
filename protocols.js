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

    // ===== ТРАНСПОРТНЫЙ УРОВЕНЬ (4) =====
    {
        id: 'tcp',
        name: 'Transmission Control Protocol',
        abbreviation: 'TCP',
        layer: 4,
        layerName: 'Транспортный',
        description:
            'Надёжный, ориентированный на соединение протокол транспортного уровня. Обеспечивает гарантированную доставку данных, контроль потока, управление перегрузками и восстановление потерянных пакетов. Основа большинства интернет-приложений.',
        details: {
            'Порт': 'Динамический (1–65535)',
            'Соединение': 'Трёхэтапное рукопожатие (SYN, SYN-ACK, ACK)',
            'Надёжность': 'ACK, таймауты, повторная передача',
            'Управление': 'Flow Control (Window), Congestion Control',
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
        layerName: 'Транспортный',
        description:
            'Простой, ненадёжный протокол без установления соединения. Не гарантирует доставку, порядок или целостность данных. Используется в приложениях, где скорость важнее надёжности (видео, аудио, DNS, игры).',
        details: {
            'Порт': 'Динамический (1–65535)',
            'Соединение': 'Нет (без соединения)',
            'Надёжность': 'Нет (best-effort)',
            'Применение': 'Стриминг, VoIP, DNS, QUIC',
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
        layerName: 'Транспортный',
        description:
            'Современный транспортный протокол, работающий поверх UDP. Обеспечивает мультиплексирование, шифрование (TLS 1.3), снижение задержек и устойчивость к потере пакетов. Используется в HTTP/3 и других приложениях Google.',
        details: {
            'Порт': '443 (обычно)',
            'Транспорт': 'UDP',
            'Шифрование': 'TLS 1.3 (встроенное)',
            'Особенности': 'Mультиплексирование, 0-RTT, migration',
        },
        links: [
            { title: 'RFC 9000 — QUIC', url: 'https://datatracker.ietf.org/doc/html/rfc9000' },
            { title: 'RFC 9001 — QUIC TLS', url: 'https://datatracker.ietf.org/doc/html/rfc9001' },
            { title: 'RFC 9002 — QUIC Recovery', url: 'https://datatracker.ietf.org/doc/html/rfc9002' },
        ],
    },

    // ===== СЕТЕВОЙ УРОВЕНЬ (3) =====
    {
        id: 'ip',
        name: 'Internet Protocol',
        abbreviation: 'IP',
        layer: 3,
        layerName: 'Сетевой',
        description:
            'Основной протокол сетевого уровня, отвечающий за адресацию и маршрутизацию пакетов в интернете. Существует в двух версиях: IPv4 (32-битные адреса) и IPv6 (128-битные адреса). Работает на принципе "best-effort" без гарантий доставки.',
        details: {
            'Версии': 'IPv4 (32 бит), IPv6 (128 бит)',
            'Адресация': 'IPv4: 192.168.0.1, IPv6: 2001:db8::1',
            'Фрагментация': 'Да (MTU discovery)',
            'Безопасность': 'Нет (IPsec опционально)',
        },
        links: [
            { title: 'RFC 791 — IPv4', url: 'https://datatracker.ietf.org/doc/html/rfc791' },
            { title: 'RFC 8200 — IPv6', url: 'https://datatracker.ietf.org/doc/html/rfc8200' },
            { title: 'RFC 4291 — IPv6 Addressing', url: 'https://datatracker.ietf.org/doc/html/rfc4291' },
        ],
    },
    {
        id: 'icmp',
        name: 'Internet Control Message Protocol',
        abbreviation: 'ICMP',
        layer: 3,
        layerName: 'Сетевой',
        description:
            'Протокол для передачи диагностических сообщений и управления сетью. Используется в утилитах ping (Echo Request/Reply) и traceroute. Сообщает об ошибках маршрутизации, недоступности узлов и перегрузках.',
        details: {
            'Типы сообщений': '0 (Echo Reply), 3 (Destination Unreachable), 8 (Echo Request), 11 (Time Exceeded)',
            'Коды': 'Дополнительная информация (например, 0 = Network Unreachable)',
            'Применение': 'ping, traceroute, path MTU discovery',
            'Безопасность': 'Часто блокируется в файрволах',
        },
        links: [
            { title: 'RFC 792 — ICMP', url: 'https://datatracker.ietf.org/doc/html/rfc792' },
            { title: 'RFC 4443 — ICMPv6', url: 'https://datatracker.ietf.org/doc/html/rfc4443' },
        ],
    },

    // ===== КАНАЛЬНЫЙ УРОВЕНЬ (2) =====
    {
        id: 'ethernet',
        name: 'Ethernet',
        abbreviation: 'Ethernet (IEEE 802.3)',
        layer: 2,
        layerName: 'Канальный',
        description:
            'Семейство стандартов для проводных локальных сетей. Определяет физический уровень (кабели, сигналы) и канальный уровень (кадры, MAC-адресация). Является наиболее распространённой технологией для LAN.',
        details: {
            'Скорости': '10 Mbps, 100 Mbps, 1 Gbps, 10 Gbps, 40 Gbps, 100 Gbps',
            'MAC-адреса': '48 бит (уникальные)',
            'Кадры': 'Ethernet II (DIX), IEEE 802.3',
            'Среда': 'Twisted pair (UTP), оптоволокно, коаксиал',
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
        layerName: 'Канальный',
        description:
            'Семейство стандартов для беспроводных локальных сетей. Определяет физический уровень (радиосигналы) и канальный уровень (кадры, MAC-адресация). Широко используется в домашних и корпоративных сетях.',
        details: {
            'Стандарты': '802.11a/b/g/n/ac/ax (Wi-Fi 6), be (Wi-Fi 7)',
            'Частоты': '2.4 GHz, 5 GHz, 6 GHz',
            'Безопасность': 'WEP, WPA, WPA2, WPA3',
            'Скорости': 'До 9.6 Gbps (Wi-Fi 6)',
        },
        links: [
            { title: 'IEEE 802.11 — Wi-Fi', url: 'https://standards.ieee.org/ieee/802.11/' },
            { title: 'Wi-Fi Alliance', url: 'https://www.wi-fi.org/' },
        ],
    },

    // ===== ДОПОЛНИТЕЛЬНЫЕ ПРОТОКОЛЫ =====
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
        id: 'tls',
        name: 'Transport Layer Security',
        abbreviation: 'TLS',
        layer: 6,
        layerName: 'Сеансовый / Прикладной',
        description:
            'Криптографический протокол для защиты связи в интернете. Обеспечивает конфиденциальность, целостность и аутентификацию. Используется в HTTPS, почте, мессенджерах и многих других приложениях. Преемник SSL.',
        details: {
            'Версии': 'TLS 1.0 (устаревший), 1.1 (устаревший), 1.2, 1.3',
            'Порт': '443 (HTTPS), 465 (SMTPS), 993 (IMAPS)',
            'Шифрование': 'AES-GCM, ChaCha20-Poly1305',
            'Рукопожатие': '1-RTT (TLS 1.3), 0-RTT (опционально)',
        },
        links: [
            { title: 'RFC 8446 — TLS 1.3', url: 'https://datatracker.ietf.org/doc/html/rfc8446' },
            { title: 'RFC 5246 — TLS 1.2', url: 'https://datatracker.ietf.org/doc/html/rfc5246' },
            { title: 'RFC 4346 — TLS 1.1', url: 'https://datatracker.ietf.org/doc/html/rfc4346' },
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
];

// ============================================================
//  Вспомогательная функция для быстрого поиска
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

    // Сортировка: сначала точные совпадения по аббревиатуре, затем по имени
    results.sort((a, b) => {
        const aAbbr = a.abbreviation.toLowerCase();
        const bAbbr = b.abbreviation.toLowerCase();
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();

        const aExactAbbr = aAbbr === q;
        const bExactAbbr = bAbbr === q;
        if (aExactAbbr && !bExactAbbr) return -1;
        if (!aExactAbbr && bExactAbbr) return 1;

        const aStartsAbbr = aAbbr.startsWith(q);
        const bStartsAbbr = bAbbr.startsWith(q);
        if (aStartsAbbr && !bStartsAbbr) return -1;
        if (!aStartsAbbr && bStartsAbbr) return 1;

        return aName.localeCompare(bName);
    });

    return results;
}

function getProtocolById(id) {
    return PROTOCOLS.find((p) => p.id === id) || null;
}

// Экспорт для браузера
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PROTOCOLS, findProtocols, getProtocolById };
}
