# Digital Business Card

A minimal, animated digital business card with an integrated SomaFM radio player.

## Features

- Animated particle background
- Integrated SomaFM radio player with all 46 stations
  - Prev / next / random / favourite stations
  - Now playing track info (live from SomaFM API)
  - Media key support (keyboard / headset controls)
  - Volume & last-played station persistence
  - Stream error handling with auto-retry
- Dark / light / OS theme toggle
- Installable as a PWA (Add to Home Screen)
- Downloadable vCard contact

## Setup

1. **Clone the repo**
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Create your config file**
   ```sh
   cp config.example.js config.js
   ```
   Edit `config.js` with your own name, email addresses, social links, and site URL.
   This file is gitignored and will never be committed.

3. **Add your vCard** (optional)
   Place a `.vcf` file in the project root. The filename should match `vcardFile` in `config.js`.
   `.vcf` files are gitignored.

4. **Add your photo** (optional)
   Place a `vcard-image.jpg` in the project root for the PWA maskable icon and OG image.
   This file is gitignored.

5. **Serve locally**
   Any static file server works:
   ```sh
   npx serve .
   # or
   python3 -m http.server
   ```

## Gitignored files (private data)

| File | Purpose |
|---|---|
| `config.js` | Your personal contact info and URLs |
| `*.vcf` | Your vCard contact file |
| `vcard-image.jpg` | Your profile photo |
