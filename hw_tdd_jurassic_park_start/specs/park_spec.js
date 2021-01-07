const assert = require('assert');
const Park = require('../models/park.js');
// const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  // let dinosaurs =[];

  beforeEach(function () {
    park = new Park('Jurrasic Park');
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurrasic Park') 
  });

  xit('should have a ticket price');

  xit('should have a collection of dinosaurs');

  xit('should be able to add a dinosaur to its collection');

  xit('should be able to remove a dinosaur from its collection');

  xit('should be able to find the dinosaur that attracts the most visitors');

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
