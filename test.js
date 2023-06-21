//import assert
const assert = require('assert');

//import rooster
const rooster = require('./rooster.js');

//describe for rooster
describe('Rooster', () => {
    //describe for .announceDawn method
    describe('.announceDawn', () => {
        it('returns a rooster call', () => {
            //SETUP expected value
            const expected = 'cock-a-doodle-doo';
            //EXERCISE call function
            const actual = Rooster.annouceDawn();
            //VERIFY using assert method
           assert.deepEqual(actual, expected);
        });
    });

    describe('.timeAtDawn', () => {
        it('returns its argument as a string', () => {
            //SETUP
            const expected = '7';
            //EXERCISE
            const actual = Rooster.timeAtDawn(7);
            //VERIFY
            assert.ok(actual === expected);
        });

        it('throws an error if passed a number less than 0', () => {
            //SETUP
            const expected = RangeError;
            //VERIFY
            assert.throws(() => {
                Rooster.timeAtDawn(-1);
            },
            //EXERCISE
            expected);
        });
    });
});