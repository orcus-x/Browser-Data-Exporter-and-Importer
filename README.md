# Browser Data Exporter and Importer

## Overview
This project contains two JavaScript scripts (`Exporter.js` and `Importer.js`) designed to run in the browser's console. These scripts allow users to:

- Export browser data (cookies, localStorage, sessionStorage, etc.) to a JSON file.
- Import browser data from a JSON file back into the browser.

These tools are useful for debugging, data migration, or testing purposes where replicating a specific browser state is required.

## Features

### `Exporter.js`
- **Extract Data**: Gathers cookies, `localStorage`, `sessionStorage`, and metadata such as URL, page title, and viewport dimensions.
- **Export as JSON**: Saves the collected data as a downloadable JSON file.

### `Importer.js`
- **Clear Data**: Removes all existing cookies, `localStorage`, and `sessionStorage` entries.
- **Import Data**: Reads a JSON file and restores browser data from it.
- **Import UI**: Creates a simple interface for uploading JSON files directly in the browser.

## Usage Instructions

### Step 1: Allow Pasting in the Console
If the browser does not allow direct pasting in the console, enter the following directive before using the scripts:

```javascript
// Enable pasting in the console
temp1 = document.createElement('textarea'); temp1.value = ''; document.body.appendChild(temp1); temp1.select(); document.execCommand('paste'); document.body.removeChild(temp1);
```

### Step 2: Running the Scripts

#### Exporting Data
1. Copy the contents of `Exporter.js`.
2. Open the browser's developer tools (usually accessible via `F12` or `Ctrl+Shift+I` / `Cmd+Option+I`).
3. Navigate to the **Console** tab.
4. Paste the code and press **Enter**.
5. A JSON file containing the browser data will be downloaded.

#### Importing Data
1. Copy the contents of `Importer.js`.
2. Open the browser's developer tools and go to the **Console** tab.
3. Paste the code and press **Enter**.
4. A small UI will appear in the top-right corner of the page.
5. Click the file input and upload a JSON file containing the data to import.
6. The imported data will be applied, and you may need to refresh the page to see the changes.

## Example JSON Format
The exported JSON file follows this structure:

```json
{
  "url": "https://example.com",
  "timestamp": "2024-12-30T12:34:56.789Z",
  "cookies": {
    "cookieName": "cookieValue"
  },
  "localStorage": {
    "key1": "value1",
    "key2": "value2"
  },
  "sessionStorage": {
    "keyA": "valueA",
    "keyB": "valueB"
  },
  "pageTitle": "Example Page",
  "userAgent": "Mozilla/5.0 ...",
  "viewport": {
    "width": 1920,
    "height": 1080
  }
}
```

## Notes
- Use these scripts responsibly and only on websites where you have permission to access and manipulate browser storage data.
- For security and privacy, avoid sharing sensitive information included in the exported JSON file.

Sure! Here's an appropriate note you can attach to the end of the document:

## Compatibility Note

✅ **Telegram Web Support**: This project is fully compatible with the **Telegram Web** version and can be used for exporting and importing browser data related to Telegram accounts. This makes it particularly useful for account session backup, migration, or recovery across devices and browsers. Please ensure you use this only for your own accounts and in compliance with Telegram’s terms of service.

## Contributions
Feel free to fork the repository and submit pull requests for improvements or additional features.
