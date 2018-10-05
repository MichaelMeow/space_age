import { Age } from './../src/js/age.js';

describe('Age', function() {

  it('should test whether age input is returned as an output', function() {
    let michaelsAge = new Age(32);
    expect(michaelsAge.output()).toEqual(32);
  });

  it('it should test whether age is returned in Mercury years', function() {
    let michaelsAge = new Age(32);
    expect(michaelsAge.mercury()).toEqual(32*.24);
  });

  it('it should test whether age is returned in Venus years', function() {
    let michaelsAge = new Age(32);
    expect(michaelsAge.venus()).toEqual(32*.62);
  });

  it('it should test whether age is returned in Mars years', function() {
    let michaelsAge = new Age(32);
    expect(michaelsAge.mars()).toEqual(32*1.88);
  });

  it('it should test whether age is returned in Jupiter years', function() {
    let michaelsAge = new Age(32);
    expect(michaelsAge.jupiter()).toEqual(32*11.86);
  });

});
