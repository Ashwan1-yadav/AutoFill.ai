<h1 align="center">AutoFill.ai <span  style="color:red; font-size:15px;">v1.0</span></h1>

<p align="center">
  <img src="" alt="AutoFill.ai" />
</p>

<p align="center">
  <a href="https://chrome.google.com/webstore/detail/autofill-ai/pmfhakkdgmnbbjdlfjmgfneaahmkjcal">
    <img src="https://img.shields.io/chrome-web-store/v/pmfhakkdgmnbbjdlfjmgfneaahmkjcal?style=for-the-badge&logo=google-chrome&color=4285F4" alt="Chrome Web Store" />
  </a>
  <a href="https://addons.mozilla.org/en-US/firefox/addon/autofill-ai/">
    <img src="https://img.shields.io/amo/v/autofill-ai?style=for-the-badge&logo=firefox-browser&color=FF7139" alt="Mozilla Add-on" />
  </a>
  <a href="https://github.com/scm0/autofill-ai/stargazers">
    <img src="https://img.shields.io/github/stars/scm0/autofill-ai?style=for-the-badge&color=yellow" alt="GitHub Stars" />
  </a>
  <a href="https://github.com/scm0/autofill-ai/issues">
    <img src="https://img.shields.io/github/issues/scm0/autofill-ai?style=for-the-badge&color=red" alt="GitHub Issues" />
  </a>
</p>

<p align="center">AutoFill.ai is a browser extension that intelligently fills form fields on web pages using smart matching algorithms.

## Summary

AutoFill.ai is a browser extension that intelligently fills form fields on web pages using smart matching algorithms. Instead of manually entering your information repeatedly, simply enter your details once in the extension popup and let it automatically detect and fill the appropriate fields on any webpage.

The extension uses intelligent field detection by analyzing:
- Field labels (associated via `for` attribute)
- Placeholder text
- Input names and IDs
- ARIA labels

It supports automatic filling for:
- **Name** - Full name, applicant name, candidate name
- **Email** - Email addresses
- **Phone** - Mobile numbers, contact numbers
- **Date of Birth** - Birth dates

## Setup Guide

### Installation

1. **Download or Clone the Extension**
   - Ensure you have all the extension files in a single directory:
     - `manifest.json`
     - `content.js`
     - `popup.html`
     - `popup.js`
     - `popup.css`

2. **Load the Extension in Chrome/Edge**
   - Open your browser and navigate to the extensions page:
     - **Chrome**: `chrome://extensions/`
     - **Edge**: `edge://extensions/`
   - Enable **Developer mode** (toggle in the top-right corner)
   - Click **Load unpacked**
   - Select the directory containing the extension files
   - The extension should now appear in your extensions list

3. **Pin the Extension (Optional)**
   - Click the extensions icon (puzzle piece) in your browser toolbar
   - Find "AutoFill.ai" and click the pin icon to keep it visible in your toolbar

### Usage

1. **Open the Extension Popup**
   - Click the AutoFill.ai icon in your browser toolbar
   - The popup will display input fields for Name, Email, Phone, and Date of Birth

2. **Enter Your Information**
   - Fill in the fields you want to use for autofilling
   - You don't need to fill all fields - only enter the ones you need

3. **Navigate to a Web Page**
   - Go to any webpage with a form you want to fill
   - Make sure the form is visible on the page

4. **Auto Fill the Form**
   - Click the extension icon again to open the popup
   - Click the **"Auto Fill Page"** button
   - The extension will automatically detect and fill matching form fields on the current page

### Features

- **Smart Field Detection**: Automatically matches form fields using multiple attributes (labels, placeholders, IDs, names, ARIA labels)
- **Keyword Matching**: Uses intelligent keyword matching to identify field types
- **Non-Intrusive**: Only fills visible, non-password fields
- **Event Triggering**: Properly triggers input and change events to ensure form validation works correctly
- **Works on All Websites**: Compatible with any website that uses standard HTML form elements

### Permissions

The extension requires the following permissions:
- **activeTab**: To access the current tab and fill form fields
- **scripting**: To inject the content script that performs the autofill
- **host_permissions**: Access to all URLs to work on any website

### Troubleshooting

- **Extension not working?**
  - Make sure Developer mode is enabled
  - Check that the extension is enabled in your extensions list
  - Refresh the webpage after loading the extension

- **Fields not filling?**
  - Ensure the form fields are visible on the page
  - Some dynamic forms may require the page to be fully loaded
  - Try refreshing the page and attempting again

- **Wrong fields being filled?**
  - The extension uses keyword matching - if field labels are ambiguous, it may match incorrectly
  - You can manually adjust the filled values if needed

### Version

Current version: **1.0**

---

**Note**: This extension is for personal use and convenience. Always review filled information before submitting forms to ensure accuracy.
