// in node modules.exports is same as just exports
exports.getDate = function() {
  const today = new Date();
  const options = {weekday: "long", day:"numeric", month:"long", year:"numeric"};
  return today.toLocaleDateString("en-US", options);
}

module.exports.getDay = function() {
  const today = new Date();
  const options = {weekday: "long"};
  return today.toLocaleDateString("en-US", options);
}

// day: numeric, 2-digit
// weekday: narrow, short, long
// year: numeric, 2 digit
// month: numeric, 2-digit, narrow, short, long
// hour: numeric, 2-digit
// minute: numeric, 2-digit
// second: numeric, 2-digit
// languages: en-US, hi-IN, ia-JP
