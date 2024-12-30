// Function to get all browser storage data
function getBrowserData() {
    // Get cookies
    const cookies = document.cookie.split(';').reduce((acc, cookie) => {
        const [key, value] = cookie.trim().split('=');
        if (key) acc[key] = value;
        return acc;
    }, {});

    // Get localStorage
    const localStorage = {};
    for (let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i);
        localStorage[key] = window.localStorage.getItem(key);
    }

    // Get sessionStorage
    const sessionStorage = {};
    for (let i = 0; i < window.sessionStorage.length; i++) {
        const key = window.sessionStorage.key(i);
        sessionStorage[key] = window.sessionStorage.getItem(key);
    }

    // Compile all data
    const browserData = {
        url: window.location.href,
        timestamp: new Date().toISOString(),
        cookies,
        localStorage,
        sessionStorage,
        pageTitle: document.title,
        userAgent: navigator.userAgent,
        viewport: {
            width: window.innerWidth,
            height: window.innerHeight
        }
    };

    return browserData;
}

// Function to download data as JSON file
function downloadBrowserData(data) {
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `browser-data-${new Date().getTime()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Execute immediately
const data = getBrowserData();
console.log('Browser Data:', data);
downloadBrowserData(data);
console.log('Data has been exported successfully!');