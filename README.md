# Zivarno Exports - Luxury Handicrafts Website

A modern, high-performance, and responsive clone of the [Zivarno Wix Website](https://zivarnoexports.wixsite.com/zivarno).

Built for **100/100 performance**, zero loading latency, mobile responsiveness, and **100% free hosting on Vercel**.

---

## ✨ Features & Enhancements

1. **Complete Brand Fidelity**:
   - Exact color palette (`#1a1715` Dark Charcoal, `#b0a171` Gold, `#faf8f5` Warm Cream).
   - High-resolution typography using Google Fonts (`EB Garamond` and `Plus Jakarta Sans`).
   - Official logos, hero backgrounds, mandalas, and artisan photo assets cached locally.

2. **Interactive Handcrafted Products Catalog**:
   - All 9 master creations with their full authentic descriptions, dimensions, weights, and heritage stories:
     1. *The Hand-Carved Wooden Ram Darbar Set*
     2. *The Musical Lord Ganesha Wood Carving*
     3. *Lord Krishna as Venugopala Wood Carving*
     4. *Aranmula Mirror (Aranmula Kannadi - UNESCO GI Heritage)*
     5. *The Hand-Painted Kerala Cheppu*
     6. *Masterpiece Wooden Sree Lakshmi*
     7. *Durga Kumbil: Majestic Hand-Carved Wooden Deity*
     8. *Majestic Kathakali Mukham: Pacha Vesham Sculpture*
     9. *Hand-Carved Wood Sculpture of Madonna and Child*
   - Interactive category filtering (Divine Sculptures, Sacred Mirrors, Traditional Crafts, Cultural Art).
   - Instant search bar by deity, material, or keyword.
   - Comprehensive detail modal with multi-angle image gallery switcher.

3. **Inquiries & Direct Concierge**:
   - Quick WhatsApp inquiry pre-populated with artwork name (`+91 7907265546`).
   - Email concierge button (`zivarnoexports@gmail.com`).
   - Working interactive contact form with instant client feedback toast.
   - Direct link to official Google Drive PDF catalog.

4. **100% Free Vercel Ready**:
   - Includes `vercel.json` with clean URL routing (`/products`, `/about`, `/contact`), security headers, and static caching.
   - Zero framework overhead — loads instantly with 0 server costs.

---

## 🚀 How to Host on Vercel for Free

### Option 1: Deploy with Vercel CLI (Fastest, ~1 minute)

1. Open a terminal (PowerShell, Command Prompt, or bash) and navigate to this folder:
   ```bash
   cd "C:\Users\ashil\.gemini\antigravity\scratch\zivarno-website"
   ```

2. Run the Vercel deploy command:
   ```bash
   npx vercel
   ```

3. Follow the simple prompts:
   - **Log in / Sign up**: Select your free Vercel account (via GitHub, Google, or Email).
   - **Set up and deploy?**: Type `y` and press Enter.
   - **Which scope?**: Choose your personal account.
   - **Link to existing project?**: Type `n`.
   - **What's your project's name?**: Press Enter (defaults to `zivarno-website` or choose a custom name like `zivarno-exports`).
   - **In which directory is your code located?**: Press Enter (`./`).
   - **Want to modify settings?**: Type `n`.

4. Deploy to Production:
   ```bash
   npx vercel --prod
   ```
   *Your live HTTPS Vercel URL will be generated immediately (e.g., `https://zivarno-exports.vercel.app`)!*

---

### Option 2: Deploy via GitHub + Vercel Dashboard (Recommended for Continuous Updates)

1. Create a free repository on [GitHub](https://github.com) named `zivarno-website`.
2. Push this project folder to your GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Zivarno website"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/zivarno-website.git
   git push -u origin main
   ```
3. Go to [vercel.com/new](https://vercel.com/new) (sign in with your GitHub account).
4. Click **Import** next to `zivarno-website`.
5. Keep the Framework Preset as **Other** and Root Directory as `./`.
6. Click **Deploy**.
7. In under 15 seconds, your site is live globally on Vercel's Edge Network for free!

---

## 💻 Local Preview

To preview the website locally on your computer:

```bash
cd "C:\Users\ashil\.gemini\antigravity\scratch\zivarno-website"
npx serve .
```
Then open `http://localhost:3000` in your browser. Or simply double-click `index.html` to open it directly in Chrome or Edge!

