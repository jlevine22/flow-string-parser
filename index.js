var stringparser = require('./src/stringparser');

var data = {
  'ab49fd20': {
    key_1: 'some data'
  },
  '9822df87': {
    another_key: 'big data',
    yet_another_key: 'small data'
  }
};

var string = "This is a string with {{ ab49fd20.key_1 }}, including {{ 9822df87.another_key }} and also {{ ab49fd20.key_2 }}.";

var parsed = stringparser(string, data);
console.log(parsed);