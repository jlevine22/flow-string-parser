var should = require('should');
var stringparser = require('../src/stringparser');

describe('stringparser', function() {
  it('should be a function', function() {
    stringparser.should.be.a.Function;
  });
  it('should replace valid keys with or without leading/trailing spaces', function() {
    var data = {
      abcd1234: {
        key_name: 'hello world'
      }
    };
    var withSpaces = '{{ abcd1234.key_name }}';
    var withoutSpaces =  '{{abcd1234.key_name}}';
    var leadingSpace = '{{ abcd1234.key_name }}';
    var trailingSpace = '{{abcd1234.key_name }}';

    stringparser(withSpaces, data).should.equal('hello world');
    stringparser(withoutSpaces, data).should.equal('hello world');
    stringparser(leadingSpace, data).should.equal('hello world');
    stringparser(trailingSpace, data).should.equal('hello world');
  });
  it('should replace missing keys with <nothing>', function() {
    var string = '{{ abcd1234.does_not_exist }}';

    stringparser(string).should.equal('<nothing>');
  });
  it('should not replace invalid keys', function() {
    var invalidKey = '{{ abc123.invalid }}';

    stringparser(invalidKey).should.equal('{{ abc123.invalid }}');
  });
  it('should replace all occurrences of a string', function() {
    var multipleOccurrences = 'hello {{ abcd1234.world }} hello {{abcd1234.world}}';
    var data = { abcd1234: { world: 'world' }};
    
    stringparser(multipleOccurrences, data).should.equal('hello world hello world');
  });
});