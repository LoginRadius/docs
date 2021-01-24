const developerDocs = ["Advanced Editor", "Enable Web SSO", "Brute Force Lockout", "Google reCAPTCHA", "Password Policy", "Session Management"]
const premiumDocs = ["Manage Phone Login", "Manage Passwordless Login", "Setup Team Management", "Two Factor Authentication"]

function getVersionBasePath(version) {
  return `/v${version.replace(/\s+/g, '-')}`;
}

function getSpectrumUrl(handle) {
  return `https://spectrum.chat/${handle}`;
}

exports.getSpectrumUrl = getSpectrumUrl;
exports.getVersionBasePath = getVersionBasePath;
exports.HEADER_HEIGHT = 64;
exports.developerDocs = developerDocs
exports.premiumDocs = premiumDocs
