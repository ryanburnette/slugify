var slugify = require('./index.js');

test('sanity',function () {
  expect(slugify).toBeInstanceOf(Function);
});

test('two words',function () {
  expect(slugify('two words')).toEqual('two-words');
});

test('UPPERCASE Uppercase',function () {
  expect(slugify('UPPERCASE Uppercase')).toEqual('uppercase-uppercase');
});

test('foo%',function () {
  expect(slugify('%foo')).toEqual('foo');
});
