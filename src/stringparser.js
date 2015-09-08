module.exports = function(string, data) {
  string = string || '';
  data = data || {};
  
  return string.replace(/{{ ?([a-h0-9]{8})\.([^ ]*) ?}}/ig, function(match, key, subKey) {
    if (typeof data[key] != 'undefined' && typeof data[key][subKey] != 'undefined') {
      return data[key][subKey];
    }
    return '<nothing>';
  });
};