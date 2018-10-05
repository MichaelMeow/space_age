import { Age } from './../src/js/age.js';

describe('Age', function() {

  it('should test whether age input is returned as an output', function() {
    let michaelsAge = new Age(32);
    expect(michaelsAge.output()).toEqual(32);
  });

  it('it should test whether age is returned in Mercury years', function() {
    let michaelsAge = new Age(32);
    expect(michaelsAge.mercury()).toEqual(32*.24);
  })
});
