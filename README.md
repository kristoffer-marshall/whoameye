# packets4u
packets4u.com

## Using this as a template

Most of the personal info on the card (name, title, tagline, emails, and social links) is loaded at runtime from `personal.json`. To reuse this project for yourself:

1. Edit `personal.json` with your own details:
   ```json
   {
     "name": "Your Name",
     "title": "Your Job Title",
     "tagline": "Your Tagline",
     "businessemail": "you@work.com",
     "personalemail": "you@personal.com",
     "website": "https://your-domain.com",
     "linkedin": "https://www.linkedin.com/in/yourname",
     "signal": "https://signal.me/u/YourUsername",
     "github": "https://github.com/yourname"
   }
   ```
2. Replace `eye.gif`, `vcard-image.jpg`, and `qr-code.png` with your own images (keep the same filenames, or update the references in `index.html`).
3. Replace `contact.vcf` with your own vCard (any standard vCard generator will produce one).
4. Update `manifest.json` with your own app name/description if you want a custom PWA install experience.

Everything else — the music player, theming, and animations — works out of the box with no further changes.
