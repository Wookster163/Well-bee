# VitaLog PWA — Deployment Guide
## Install on Android in ~10 minutes (free, no coding needed)

---

## What's in this package

```
vitalog-pwa/
├── index.html        ← The entire app
├── manifest.json     ← PWA metadata (name, colors, icons)
├── sw.js             ← Service worker (offline caching)
├── icons/
│   ├── icon-72.png
│   ├── icon-96.png
│   ├── icon-128.png
│   ├── icon-144.png
│   ├── icon-152.png
│   ├── icon-192.png  ← Main Android icon
│   ├── icon-384.png
│   └── icon-512.png  ← Play Store / splash screen
└── DEPLOY.md         ← This file
```

---

## Option A — GitHub Pages (Recommended, 100% free)

### Step 1: Create a GitHub account
Go to https://github.com and sign up (free).

### Step 2: Create a new repository
1. Click the **+** button → **New repository**
2. Name it: `vitalog` (or anything you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 3: Upload your files
1. Click **Add file** → **Upload files**
2. Drag and drop ALL files from this zip:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - The entire `icons/` folder
3. Scroll down, click **Commit changes**

### Step 4: Enable GitHub Pages
1. Go to your repository **Settings**
2. Scroll to **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Branch: **main** / Folder: **/ (root)**
5. Click **Save**
6. Wait 1–2 minutes. Your URL will be:
   `https://YOUR-USERNAME.github.io/vitalog/`

### Step 5: Install on Android
1. Open **Chrome** on your Android phone
2. Go to your GitHub Pages URL
3. Tap the **⋮ menu** (top right) → **Add to Home screen**
4. Tap **Install** in the popup
5. VitaLog now appears on your home screen as a full-screen app!

**Or:** Chrome will automatically show an "Install VitaLog" banner
at the bottom of the screen after a few seconds.

---

## Option B — Netlify (Also free, even easier drag-and-drop)

1. Go to https://app.netlify.com and sign up free
2. Extract the zip to a folder on your computer
3. Drag the **entire folder** onto the Netlify dashboard
4. Your app is live at a `*.netlify.app` URL instantly
5. Install on Android as above

---

## Option C — Local network (no internet required)

If you want to test on your phone without hosting:

1. Install **Node.js** from https://nodejs.org
2. Open Terminal / Command Prompt in the unzipped folder
3. Run: `npx serve .`
4. It shows a local URL like `http://192.168.1.x:3000`
5. Make sure your phone is on the same WiFi
6. Open that URL in Chrome on your phone
7. PWA install works even on local network via HTTPS if you use:
   `npx serve . --ssl-cert cert.pem --ssl-key key.pem`
   (or just use Netlify — it's easier)

---

## Troubleshooting

**"Add to Home screen" doesn't appear?**
- Must be using Chrome (not Firefox or Samsung Browser)
- Must be served over HTTPS (GitHub Pages and Netlify both do this)
- Try: Menu (⋮) → Add to Home screen manually

**App shows blank screen after install?**
- Open Chrome → Settings → Site Settings → find your URL → Clear data
- Then visit the URL again and reinstall

**Data not saving?**
- VitaLog stores all data in localStorage — it stays on your device
- If you clear browser data, you'll lose it — use Export JSON regularly as backup!

**Offline not working?**
- Visit the app once while online first — the service worker caches everything
- After first load, it works completely offline

---

## Keeping your data safe

VitaLog stores everything **locally on your device** (localStorage).
This means:
- ✅ Private — no data sent to any server
- ✅ Works offline
- ⚠️ If you clear browser storage, data is lost
- ⚠️ Data doesn't sync between devices automatically

**Backup tip:** Use Settings → Export JSON regularly.
Save the backup file to Google Drive or email it to yourself.

---

## Updating the app in the future

When you get a new version of `index.html`:
1. Upload the new file to GitHub (it will replace the old one)
2. GitHub Pages deploys automatically in ~1 minute
3. Open the app on your phone — Chrome will detect the update
4. Pull down to refresh, or close and reopen the app

---

## Want a Play Store listing? (Optional, future step)

Once you're happy with the PWA, you can convert it to a
Play Store APK using **Bubblewrap** (Google's official tool):

```bash
npm i -g @bubblewrap/cli
bubblewrap init --manifest https://YOUR-URL/manifest.json
bubblewrap build
```

This creates a signed `.aab` file you can submit to Google Play.
Play Store requires a one-time $25 developer fee.

---

Made with VitaLog v3.0
