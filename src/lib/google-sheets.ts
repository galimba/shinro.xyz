import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

/**
 * Get authenticated Google Sheets client using service account credentials.
 */
function getAuth() {
  const credentials = JSON.parse(
    process.env.GOOGLE_SERVICE_ACCOUNT_KEY || "{}"
  );

  return new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES,
  });
}

export interface LeadData {
  email: string;
  timestamp: string;
  source: string;
  ip: string;
}

/**
 * Append a new lead to the Google Sheet.
 */
export async function appendToSheet(data: LeadData): Promise<void> {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  if (!spreadsheetId) {
    throw new Error("GOOGLE_SHEET_ID environment variable is not set");
  }

  // Sheet name "Leads" with columns A-D
  const range = "Leads!A:D";

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[data.email, data.timestamp, data.source, data.ip]],
    },
  });
}

/**
 * Check if an email already exists in the sheet.
 * Returns true if duplicate found.
 */
export async function isDuplicateEmail(email: string): Promise<boolean> {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  if (!spreadsheetId) {
    throw new Error("GOOGLE_SHEET_ID environment variable is not set");
  }

  // Column A contains emails
  const range = "Leads!A:A";

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const emails = response.data.values?.flat() || [];
    return emails.some(
      (existingEmail) =>
        typeof existingEmail === "string" &&
        existingEmail.toLowerCase() === email.toLowerCase()
    );
  } catch (error) {
    // If sheet doesn't exist or is empty, not a duplicate
    console.error("Error checking for duplicate email:", error);
    return false;
  }
}
