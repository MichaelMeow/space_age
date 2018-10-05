import { Age } from './../src/js/age.js';

describe('Age', function() {

  it('should test whether age input is returned as an output', function() {
    let michaelsAge = new Age(32);
    expect(michaelsAge.output()).toEqual(32);
  });
});
