/**
 * Created by Ivan Talalaev on 1/20/2017.
 */
let binSearch = require('../binarySearch'),
  chai = require('chai'),
  assert = chai.assert,
  expect = chai.expect;

//-----------0  1  2  3  4  5  6   7   8   9   10  11  12  13  14  15  16  17
let array = [1, 2, 4, 6, 8, 9, 29, 29, 29, 29, 29, 29, 29, 29, 45, 60, 73, 90];


describe('recursive bin-search testing', () => {

  it('lower bound search', () => {
    assert.equal(binSearch.lowerBound.recursive(array, 1, -1, array.length), 0);
    assert.equal(binSearch.lowerBound.recursive(array, 90, -1, array.length), 17);
    assert.equal(binSearch.lowerBound.recursive(array, 9, -1, array.length), 5);
    assert.equal(binSearch.lowerBound.recursive(array, 4, -1, array.length), 2);
    assert.equal(binSearch.lowerBound.recursive(array, 29, -1, array.length), 6);
  });

  it('upper bound search', () => {
    assert.equal(binSearch.upperBound.recursive(array, 1, -1, array.length), 0);
    assert.equal(binSearch.upperBound.recursive(array, 90, -1, array.length), 17);
    assert.equal(binSearch.upperBound.recursive(array, 9, -1, array.length), 5);
    assert.equal(binSearch.upperBound.recursive(array, 4, -1, array.length), 2);
    assert.equal(binSearch.upperBound.recursive(array, 29, -1, array.length), 13);
  });
});

describe('iterative bin-search testing', () => {

  it('lower bound search', () => {
    assert.equal(binSearch.lowerBound.iterative(array, 1, -1, array.length), 0);
    assert.equal(binSearch.lowerBound.iterative(array, 90, -1, array.length), 17);
    assert.equal(binSearch.lowerBound.iterative(array, 9, -1, array.length), 5);
    assert.equal(binSearch.lowerBound.iterative(array, 4, -1, array.length), 2);
    assert.equal(binSearch.lowerBound.iterative(array, 29, -1, array.length), 6);
  });

  it('upper bound search', () => {
    assert.equal(binSearch.upperBound.iterative(array, 1, -1, array.length), 0);
    assert.equal(binSearch.upperBound.iterative(array, 90, -1, array.length), 17);
    assert.equal(binSearch.upperBound.iterative(array, 9, -1, array.length), 5);
    assert.equal(binSearch.upperBound.iterative(array, 4, -1, array.length), 2);
    assert.equal(binSearch.upperBound.iterative(array, 29, -1, array.length), 13);
  });
});