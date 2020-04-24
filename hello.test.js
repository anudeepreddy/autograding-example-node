const hello = require('./hello');

test('Output Test', () => {
  function callback(data){
    expect(data.toString()).toBe("12 34 56");
  }
  hello(callback);
});
