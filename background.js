// User agent string to send. Keep updated with the latest chrome user agent
const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36';

// The user agent only needs to be spoofed for the checkpoint page
const urls = ['https://www.facebook.com/checkpoint/*'];

const options = ['blocking', 'requestHeaders'];

// Listener that replaces the user agent
function setUserAgentOnLogin(e) {
  const userAgentHeader = e.requestHeaders.find((header) => header.name.toLowerCase() === 'user-agent');
  userAgentHeader.value = userAgent;
  console.debug('Updated user agent');
  return { requestHeaders: e.requestHeaders };
}

// Set up the listener
const onBeforeSendHeaders = browser.webRequest.onBeforeSendHeaders;
onBeforeSendHeaders.addListener(setUserAgentOnLogin, { urls }, options);
