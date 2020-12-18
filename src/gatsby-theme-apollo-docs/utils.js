const premiumDocs = ["Advanced Editor"]

function getVersionBasePath(version) {
  return `/v${version.replace(/\s+/g, '-')}`;
}

function getSpectrumUrl(handle) {
  return `https://spectrum.chat/${handle}`;
}

exports.getSpectrumUrl = getSpectrumUrl;
exports.getVersionBasePath = getVersionBasePath;
exports.HEADER_HEIGHT = 64;
exports.premiumDocs = premiumDocs
