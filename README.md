# WellBee 🐝 — Personal Health Tracker

A compact, offline-capable PWA for tracking supplements, menstrual cycle, and health markers.

## How to deploy to GitHub Pages

### 1. Create a GitHub repository
- Go to [github.com](https://github.com) → **New repository**
- Name it `wellbee` (or anything you like)
- Set it to **Public**
- Do **not** initialise with README (you already have files)
- Click **Create repository**

### 2. Upload the files
Upload **all** of these files/folders keeping the exact structure:
```
index.html
manifest.json
sw.js
icons/
  icon-72.png
  icon-96.png
  icon-128.png
  icon-144.png
  icon-152.png
  icon-192.png
  icon-192-maskable.png
  icon-384.png
  icon-512.png
  icon-512-maskable.png
```

### 3. Enable GitHub Pages
- In your repo → **Settings** → **Pages**
- Source: **Deploy from a branch**
- Branch: `main` → folder: `/ (root)`
- Click **Save**
- Wait ~1 minute, then your app is live at:
  `https://YOUR-USERNAME.github.io/wellbee/`

### 4. Install on your phone (Android — Chrome)
1. Open the URL above in **Chrome** on your phone
2. Wait a few seconds — an **Install** banner appears at the bottom
3. Tap **Install** → tap **Install** again in the popup
4. WellBee appears on your home screen like a native app
5. All your data is stored **locally on your device** (localStorage)

### 5. Install on iPhone (Safari)
1. Open the URL in **Safari**
2. Tap the **Share** button (box with arrow)
3. Scroll down → tap **Add to Home Screen**
4. Tap **Add**

## Features
- 📊 Overview grid — one full cycle per view
- 💊 10 pre-loaded supplements (Magnesium, Vitamin D, C, A, Iodine, Omega-3, Zinc, Iron, B12, Ibuprofen)
- 🌸 Cycle tracking with Bleeding, Cramps, Fatigue, Pain, Mood
- 🎨 Custom colour per substance
- 4 display types: Tick, List, Numerical bar, Emoji
- Auto-copy from previous day
- JSON + CSV export/import
- Works fully offline after first load
