// ============================================================
//  ProtoViewer — Main Application Logic
// ============================================================

(function() {
    'use strict';

    // ---- FORCE CACHE CLEAR ----
    (function() {
        const DATA_VERSION = '6.0.0';
        const STORAGE_KEY = 'protocol_viewer_version';
        
        const storedVersion = localStorage.getItem(STORAGE_KEY);
        if (storedVersion !== DATA_VERSION) {
            console.log(`🔄 New data version detected (${DATA_VERSION}), clearing cache...`);
            
            if ('caches' in window) {
                caches.keys().then(function(names) {
                    for (let name of names) {
                        caches.delete(name);
                    }
                });
            }
            
            const keysToKeep = [STORAGE_KEY];
            for (let key in localStorage) {
                if (!keysToKeep.includes(key)) {
                    localStorage.removeItem(key);
                }
            }
            
            localStorage.setItem(STORAGE_KEY, DATA_VERSION);
            console.log('✅ Cache cleared, data updated');
            window.location.reload(true);
        }
    })();

    // ---- DOM REFS ----
    const searchInput = document.getElementById('searchInput');
    const clearButton = document.getElementById('clearButton');
    const protocolListContainer = document.getElementById('protocolList');
    const clearCacheBtn = document.getElementById('clearCacheBtn');

    let expandedProtocolId = null;

    // ---- GROUP BY LAYER ----
    function groupProtocolsByLayer(protocols) {
        const groups = {};
        const layerOrder = [7, 6, 4, 3, 2];
        const layerNames = {
            7: 'Application',
            6: 'Presentation',
            4: 'Transport',
            3: 'Network',
            2: 'Data Link',
        };

        for (const proto of protocols) {
            const layer = proto.layer;
            if (!groups[layer]) {
                groups[layer] = [];
            }
            groups[layer].push(proto);
        }

        const sortedGroups = [];
        for (const layer of layerOrder) {
            if (groups[layer]) {
                sortedGroups.push({
                    layer: layer,
                    name: layerNames[layer] || `Layer ${layer}`,
                    protocols: groups[layer].sort((a, b) => a.abbreviation.localeCompare(b.abbreviation)),
                });
            }
        }

        return sortedGroups;
    }

    // ---- RENDER PROTOCOL LIST ----
    function renderProtocolList(protocols) {
        const groups = groupProtocolsByLayer(protocols);
        let html = '';

        if (groups.length === 0) {
            html = `
                <div class="empty-state">
                    <div class="empty-icon">🔍</div>
                    <h2>Nothing found</h2>
                    <p>Try changing your search query</p>
                </div>
            `;
            protocolListContainer.innerHTML = html;
            return;
        }

        for (const group of groups) {
            html += `<div class="layer-group">`;
            html += `<div class="layer-header">`;
            html += `<span class="layer-number">Layer ${group.layer}</span>`;
            html += `<span class="layer-name">${group.name}</span>`;
            html += `<span class="layer-count">${group.protocols.length}</span>`;
            html += `</div>`;
            html += `<div class="protocol-items">`;

            for (const proto of group.protocols) {
                const isExpanded = expandedProtocolId === proto.id;
                html += `<div class="protocol-item ${isExpanded ? 'expanded' : ''}" data-id="${proto.id}">`;
                html += `<div class="protocol-header-clickable">`;
                html += `<span class="protocol-abbr">${proto.abbreviation}</span>`;
                html += `<span class="protocol-full-name">${proto.name}</span>`;
                html += `<span class="protocol-expand-icon">${isExpanded ? '▾' : '▸'}</span>`;
                html += `</div>`;

                if (isExpanded) {
                    html += `<div class="protocol-details-expanded">`;
                    html += `<div class="protocol-description">${proto.description}</div>`;
                    
                    if (proto.details && Object.keys(proto.details).length > 0) {
                        html += `<div class="protocol-details-grid">`;
                        for (const [label, value] of Object.entries(proto.details)) {
                            html += `
                                <div class="detail-item">
                                    <span class="detail-label">${label}</span>
                                    <span class="detail-value">${value}</span>
                                </div>
                            `;
                        }
                        html += `</div>`;
                    }

                    if (proto.links && proto.links.length > 0) {
                        html += `<div class="protocol-links">`;
                        html += `<div class="protocol-links-title">📎 Specifications & Documentation</div>`;
                        for (const link of proto.links) {
                            html += `
                                <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="link-button">
                                    <span class="link-icon">🔗</span> ${link.title}
                                </a>
                            `;
                        }
                        html += `</div>`;
                    }
                    html += `</div>`;
                }

                html += `</div>`;
            }

            html += `</div>`;
            html += `</div>`;
        }

        protocolListContainer.innerHTML = html;

        // Click handlers
        document.querySelectorAll('.protocol-header-clickable').forEach((header) => {
            header.addEventListener('click', function() {
                const item = this.closest('.protocol-item');
                const id = item.dataset.id;
                
                if (expandedProtocolId === id) {
                    expandedProtocolId = null;
                } else {
                    expandedProtocolId = id;
                }
                
                const query = searchInput.value.trim();
                const filtered = query ? filterProtocols(query) : PROTOCOLS;
                renderProtocolList(filtered);
                
                if (expandedProtocolId) {
                    const expandedElement = document.querySelector(`.protocol-item[data-id="${expandedProtocolId}"]`);
                    if (expandedElement) {
                        setTimeout(() => {
                            expandedElement.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }, 100);
                    }
                }
            });
        });
    }

    // ---- FILTERING ----
    function filterProtocols(query) {
        if (!query || query.trim() === '') {
            return PROTOCOLS;
        }

        const q = query.toLowerCase().trim();
        return PROTOCOLS.filter((proto) => {
            const nameMatch = proto.name.toLowerCase().includes(q);
            const abbrMatch = proto.abbreviation.toLowerCase().includes(q);
            const idMatch = proto.id.toLowerCase().includes(q);
            return nameMatch || abbrMatch || idMatch;
        });
    }

    // ---- UPDATE SEARCH ----
    function updateSearch() {
        const query = searchInput.value;
        
        if (query.trim() === '') {
            clearButton.classList.remove('visible');
        } else {
            clearButton.classList.add('visible');
        }

        const filtered = filterProtocols(query);
        renderProtocolList(filtered);
    }

    // ---- CLEAR ----
    function clearSearch() {
        searchInput.value = '';
        searchInput.focus();
        clearButton.classList.remove('visible');
        expandedProtocolId = null;
        renderProtocolList(PROTOCOLS);
    }

    // ---- FORCE CACHE CLEAR (Manual) ----
    function forceClearCache() {
        const version = localStorage.getItem('protocol_viewer_version') || '0';
        const newVersion = '6.0.1';
        localStorage.setItem('protocol_viewer_version', newVersion);
        console.log(`🔄 Force cache clear: ${version} → ${newVersion}`);

        if ('caches' in window) {
            caches.keys().then(function(names) {
                for (let name of names) {
                    caches.delete(name);
                }
            });
        }

        const btn = document.getElementById('clearCacheBtn');
        const originalText = btn.textContent;
        btn.textContent = '✅ Updated!';
        btn.style.background = '#4d6bfe';
        btn.style.color = 'white';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.style.color = '';
        }, 2000);

        setTimeout(() => {
            window.location.reload(true);
        }, 1000);
    }

    // ---- EVENTS ----
    searchInput.addEventListener('input', updateSearch);
    clearButton.addEventListener('click', clearSearch);
    if (clearCacheBtn) {
        clearCacheBtn.addEventListener('click', forceClearCache);
    }

    // ---- INIT ----
    console.log('🌐 ProtoViewer v6.0 — English version');
    console.log(`📦 Loaded protocols: ${PROTOCOLS.length}`);
    renderProtocolList(PROTOCOLS);
    console.log('✅ ProtoViewer ready!');
})();
