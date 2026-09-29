# Dinesh & Nandhini — Wedding Invitation (20 Nov 2026)

Static site, no server. Deploy: push this folder to GitHub → Settings → Pages → `main` / root.

## Files
- `index.html`, `style.css`, `script.js`
- `assets/invitation.png` — original patrika, unchanged
- `assets/couple1-3.webp`, `final-couple.webp`, `preview.jpg`
- `assets/music.mp3` — **your wedding music goes here** (already added: "Following Her", re-encoded to 128 kbps, 1.1 MB)
- `google-apps-script/Code.gs` — RSVP backend (paste into Google Apps Script)

## Music
Put your file at **`assets/music.mp3`** (replace it to change the song). It starts softly right after the guest
taps unlock, loops, and can be paused with the Music button (top right). If the file is missing the button shows "Add music".

## RSVP + guest count (Google Sheets, free)
1. Create a Google Sheet. Rename the tab to **RSVP**. Row 1: `Timestamp | Guest Name | Attendance | Number of Guests`.
2. In the sheet: **Extensions → Apps Script**. Delete the sample code, paste all of `google-apps-script/Code.gs`, Save.
3. **Deploy → New deployment → type: Web app** · Execute as: **Me** · Who has access: **Anyone** → Deploy → authorise.
4. Copy the **Web app URL** (ends with `/exec`).
5. **Paste it in `script.js`, in the `CONFIG` block at the top, here:**
   ```js
   rsvpUrl: "PASTE_YOUR_/exec_URL_HERE",
   ```
6. Re-deploy the site. Guests' answers appear as new rows; the site shows only totals (Marriage / Reception / Both / overall).
   The full list is never sent to the public page.
- After editing `Code.gs` later: **Deploy → Manage deployments → Edit → New version** (the URL stays the same).
- Until the URL is set, the form runs in preview mode (shows the thank-you but saves nothing).

## Importing an existing Excel guest list
Open the Sheet → **File → Import → Upload** your `.xlsx` → *Append to current sheet* (tab RSVP). Use the same four
columns; Attendance must be exactly `Marriage`, `Reception` or `Both`. Counts update automatically.
Download the sheet any time as Excel: **File → Download → .xlsx**.

## Details
Wedding wording lives in `CONFIG` in `script.js`, transcribed from the patrika only.
The patrika has no map link, so the map buttons search the printed venue names.
