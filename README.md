
```

Или используйте Live Server в VS Code:

```
# Установите расши
```

### Деплой на GitHub Pages

1. Создайте репозиторий на GitHub
2. Загрузите все файлы (`index.html`, `styles.css`, `script.js`, `protocols.js`)
3. Перейдите в Settings → Pages
4. Выберите ветку `main` и папку `/ (root)`
5. Нажмите Save
6. Через пару минут ваше приложение будет доступно по адресу:
`https://<ваш-username>.github.io/<название-репозитория>/`

## 📂 Структура проекта

```
protocol-viewer/
├──
```

## 🧩 Добавление новых протоколов

Откройте `protocols.js` и добавьте объект в массив `PROTOCOLS`:

```
{
    id: 'myproto',                    // Уникальный идентификатор
    name: 'My Protocol Name',         // Полное название
    abbreviation:
```

## 🎨 Дизайн

Дизайн вдохновлён [DECA Free UI Kit](https://www.uistore.design/items/deca-free-ui-kit-for-sketch-and-figma/) — чистый, минималистичный, с акцентом на типографику и удобство чтения.

### Цветовая палитра

- **Primary**: `#4d6bfe` (синий)
- **Background**: `#f8f9fc` (светлый)
- **Text**: `#0d0d0d` (почти чёрный)
- **Secondary**: `#5a5a5a` (серый)

## 📄 Лицензия

MIT

---

Сделано с ❤️ для сетевых энтузиастов

```

</BDS:create
