const hello = require('./hello');

test('Output Test', () => {
  function callback(data){
    expect(data).toBe("12 34 56");
  }
  hello(callback);
});
