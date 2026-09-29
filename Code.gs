/**
 * Wedding RSVP backend — Google Apps Script bound to a Google Sheet.
 * Sheet tab name: "RSVP"  |  Row 1 headers: Timestamp | Guest Name | Attendance | Number of Guests
 * Public GET returns ONLY totals. Names are never returned.
 */
const SHEET_NAME = 'RSVP';
const MAX_GUESTS = 20;

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) { sh = ss.insertSheet(SHEET_NAME); sh.appendRow(['Timestamp', 'Guest Name', 'Attendance', 'Number of Guests']); }
  return sh;
}
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

function doGet() {
  const rows = sheet_().getDataRange().getValues().slice(1);
  const t = { marriage: 0, reception: 0, both: 0, total: 0, responses: 0 };
  rows.forEach(r => {
    const a = String(r[2]).trim().toLowerCase(), n = Number(r[3]) || 0;
    if (!n) return;
    if (a === 'marriage') t.marriage += n; else if (a === 'reception') t.reception += n; else if (a === 'both') t.both += n; else return;
    t.total += n; t.responses++;
  });
  return json_(t);
}

function doPost(e) {
  const lock = LockService.getScriptLock(); lock.waitLock(10000);
  try {
    const d = JSON.parse(e.postData.contents);
    const name = String(d.name || '').replace(/[=+\-@]/, '').trim().slice(0, 80);   // blocks formula injection
    const att = ({ marriage: 'Marriage', reception: 'Reception', both: 'Both' })[String(d.attendance).toLowerCase()];
    const n = Math.round(Number(d.guests));
    if (!name || !att || !(n >= 1 && n <= MAX_GUESTS)) return json_({ ok: false, error: 'invalid' });
    sheet_().appendRow([new Date(), name, att, n]);
    return json_({ ok: true });
  } catch (err) { return json_({ ok: false, error: 'bad request' }); }
  finally { lock.releaseLock(); }
}
