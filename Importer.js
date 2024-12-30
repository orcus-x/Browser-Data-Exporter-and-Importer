// Function to clear all existing browser data
function clearBrowserData() {
    // Clear localStorage
    localStorage.clear();

    // Clear sessionStorage
    sessionStorage.clear();

    // Clear cookies
    document.cookie.split(';').forEach(cookie => {
        const name = cookie.trim().split('=')[0];
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });

    console.log('Existing browser data cleared');
}

// Function to import browser data
function importBrowserData(jsonData) {
    try {
        const data = (typeof jsonData === 'string') ? JSON.parse(jsonData) : jsonData;

        // Clear existing data first
        clearBrowserData();

        // Import localStorage
        if (data.localStorage) {
            Object.entries(data.localStorage).forEach(([key, value]) => {
                try {
                    localStorage.setItem(key, value);
                } catch (e) {
                    console.warn(`Failed to set localStorage item: ${key}`, e);
                }
            });
        }

        // Import sessionStorage
        if (data.sessionStorage) {
            Object.entries(data.sessionStorage).forEach(([key, value]) => {
                try {
                    sessionStorage.setItem(key, value);
                } catch (e) {
                    console.warn(`Failed to set sessionStorage item: ${key}`, e);
                }
            });
        }

        // Import cookies
        if (data.cookies) {
            Object.entries(data.cookies).forEach(([key, value]) => {
                try {
                    document.cookie = `${key}=${value}; path=/`;
                } catch (e) {
                    console.warn(`Failed to set cookie: ${key}`, e);
                }
            });
        }

        console.log('Data imported successfully!');
        console.log('Imported data overview:', {
            localStorage: Object.keys(data.localStorage || {}).length + ' items',
            sessionStorage: Object.keys(data.sessionStorage || {}).length + ' items',
            cookies: Object.keys(data.cookies || {}).length + ' items'
        });

        return true;
    } catch (error) {
        console.error('Error importing data:', error);
        return false;
    }
}

// Function to handle file input
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) {
        console.error('No file selected');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const result = importBrowserData(e.target.result);
        if (result) {
            console.log('Import complete - you may need to refresh the page to see all changes');
        }
    };
    reader.readAsText(file);
}

// Create and add file input to page
function createImportUI() {
    // Remove any existing import UI
    const existingUI = document.getElementById('data-import-ui');
    if (existingUI) {
        existingUI.remove();
    }

    // Create new UI elements
    const container = document.createElement('div');
    container.id = 'data-import-ui';
    container.style.cssText = 'position:fixed;top:20px;right:20px;padding:20px;background:#fff;border:2px solid #333;border-radius:5px;z-index:9999;';

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.addEventListener('change', handleFileUpload);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.style.marginLeft = '10px';
    closeBtn.onclick = () => container.remove();

    container.appendChild(document.createTextNode('Import browser data: '));
    container.appendChild(input);
    container.appendChild(closeBtn);
    document.body.appendChild(container);
}

// Initialize the import UI
createImportUI();