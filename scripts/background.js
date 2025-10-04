chrome.action.onClicked.addListener(() => {
    chrome.tabs.create({ url: "https://my.subzy.app" });
});

chrome.runtime.onInstalled.addListener(r => {
    if (r.reason === "install") {
        chrome.tabs.create({ url: "https://my.subzy.app/help" });
    }
});

chrome.runtime.onMessage.addListener((r, a, t) => {
    if (r.type === "OPEN_SUBZY_TAB") {
        return chrome.tabs.create({ url: "https://my.subzy.app/login", active: true })
            .then(e => {
                t({ success: true, tabId: e.id });
            })
            .catch(e => {
                console.error("Subzy: Error creating tab:", e);
                t({ success: false, error: e.message });
            }), true;
    }
    if (r.type === "GET_SUBZY_COOKIES") {
        return chrome.cookies.getAll({ domain: "my.subzy.app" })
            .then(e => {
                t({ success: true, cookies: e });
            })
            .catch(e => {
                console.error("Subzy: Error getting cookies:", e);
                t({ success: false, error: e.message });
            }), true;
    }
    if (r.type === "SET_SUBZY_COOKIE") {
        const { name: e, value: s, domain: c = "my.subzy.app/login", path: i = "/" } = r.cookieDetails;
        return chrome.cookies.set({ url: `https://${c}`, name: e, value: s, domain: c, path: i })
            .then(o => {
                t({ success: true, cookie: o });
            })
            .catch(o => {
                console.error("Subzy: Error setting cookie:", o);
                t({ success: false, error: o.message });
            }), true;
    }
    if (r.type === "REMOVE_SUBZY_COOKIE") {
        const { url: e, name: s } = r.cookieDetails;
        return chrome.cookies.remove({ url: e, name: s })
            .then(c => {
                t({ success: true, details: c });
            })
            .catch(c => {
                console.error("Subzy: Error removing cookie:", c);
                t({ success: false, error: c.message });
            }), true;
    }
    r.type;
});

chrome.tabs.onUpdated.addListener((r, a, t) => {
    var e;
    if (a.status === "complete" && ((e = t.url) != null && e.includes("my.subzy.app/login"))) {
        // No action defined here in original code
    }
});
