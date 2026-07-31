// ============================================================
//  Главный скрипт приложения
// ============================================================

(function () {
    'use strict';

    // ---- DOM REFS ----
    const searchInput = document.getElementById('searchInput');
    const suggestionsList = document.getElementById('suggestions');
    const resultContainer = document.getElementById('resultContainer');
    const clearButton = document.getElementById('clearButton');

    let activeIndex = -1;
    let currentSuggestions = [];

    // ---- ОТОБРАЖЕНИЕ ПРОТОКОЛА ----
    function renderProtocol(protocol) {
        if (!protocol) {
            resultContainer.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">📡</div>
                    <h2>Протокол не найден</h2>
                    <p>Попробуйте изменить запрос или выбрать другой протокол</p>
                </div>
            `;
            return;
        }

        const layerNames = {
            7: 'Прикладной',
            6: 'Сеансовый / Представительский',
            5: 'Сеансовый',
            4: 'Транспортный',
            3: 'Сетевой',
            2: 'Канальный',
            1: 'Физический',
        };

        const layerDisplay = protocol.layerName || layerNames[protocol.layer] || `Уровень ${protocol.layer}`;

        let detailsHtml = '';
        if (protocol.details && Object.keys(protocol.details).length > 0) {
            for (const [label, value] of Object.entries(protocol.details)) {
                detailsHtml += `
                    <div class="detail-item">
                        <span class="detail-label">${label}</span>
                        <span class="detail-value">${value}</span>
                    </div>
                `;
            }
        }

        let linksHtml = '';
        if (protocol.links && protocol.links.length > 0) {
            linksHtml = `<div class="protocol-links-title">📎 Спецификации и документация</div>`;
            for (const link of protocol.links) {
                linksHtml += `
                    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="link-button">
                        <span class="link-icon">🔗</span> ${link.title}
                    </a>
                `;
            }
        } else {
            linksHtml = `
                <div class="protocol-links-title">📎 Ссылки</div>
                <span style="color: var(--color-text-muted); font-size: 14px;">Спецификации временно отсутствуют</span>
            `;
        }

        resultContainer.innerHTML = `
            <div class="protocol-card">
                <div class="protocol-header">
                    <div class="protocol-title-group">
                        <span class="protocol-name">${protocol.abbreviation}</span>
                        <span class="protocol-abbr">${protocol.name}</span>
                    </div>
                    <span class="protocol-layer-badge">OSI ${protocol.layer} — ${layerDisplay}</span>
                </div>

                <div class="protocol-description">
                    ${protocol.description}
                </
