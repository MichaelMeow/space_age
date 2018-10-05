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

  it('it should test whether expected age is returned in all planet years', function() {
    let michaelsAge = new Age(32);
    expect(michaelsAge.expected()).toEqual([40*.24,40*.62,75.2,40*11.86]);
  });

  it('it should test whether expected age is returned as years lived over life expectancy if age is over 72', function() {
    let testAge = Math.abs(-2);
    let michaelsAge = new Age(74);

    expect(michaelsAge.expected()).toEqual([testAge*.24,testAge*.62,testAge*1.88,testAge*11.86]);
  });

});
