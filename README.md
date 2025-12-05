# TRIP2-2026 — Mobile Itinerary WebApp (示範)

這是一個行動優先（mobile-first）的單頁行程展示範例，可作為離線/靜態 WebApp 的起點。

快速啟動（在專案根目錄）

1. 安裝相依套件

```bash
npm install
```

2. 啟動伺服器

```bash
npm start
# 或開發時使用自動重載
npm run dev
```

3. 開啟瀏覽器

```text
http://localhost:3000/
```

內容說明

- `mobile_itinerary.html`：整合後的 mobile-first 行程頁面（單一檔案）。
- `server.js`：簡單的 Express 靜態伺服器，會在根目錄回傳 `mobile_itinerary.html`。
- `public/`：可放置靜態資源（images / fonts / CSS 分檔）—目前為空。

後續建議

- 若要把行程資料拆成 JSON API，可將資料抽出至 `data/` 並新增 `/api/plans` 路由。
- 想要轉成 React/Vue 專案，我可以幫你 scaffold (Vite + React) 並把目前程式拆成元件。
# TRIP2-2026