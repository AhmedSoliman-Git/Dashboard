function isValidText(value, minLength = 1) {
  return (
    typeof value === "string" && 
    value.trim().length >= minLength
  );
}


function isValidImageUrl(value) {
  return value && value.startsWith('http');
}

function isValidEmail(value) {
  return value && value.includes('@');
}

exports.isValidText = isValidText;
exports.isValidImageUrl = isValidImageUrl;
exports.isValidEmail = isValidEmail;