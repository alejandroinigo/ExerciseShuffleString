/* eslint-disable no-undef */
'use strict';

const {Solution} = require('../solution');
const chai = require('chai');
const solution = new Solution();

describe('Unit testing: Test suite for solution:', function() {
    it('Unit test::solution::restoreString::restore string 1', async () => {
        const inputString = 'codeleet';
        const expectedString = 'leetcode';
        const indices = [4, 5, 6, 7, 0, 2, 1, 3];
        chai.expect(solution.restoreString(inputString, indices)).to.be.equal(expectedString);
    });

    it('Unit test::solution::restoreString::restore string 2', async () => {
        const inputString = 'ipsum sit amet lorem dolor';
        const expectedString = 'lorem ipsum dolor sit amet';
        const indices = [6, 7, 8, 9, 10, 11, 18, 19, 20, 21, 22, 23, 24, 25, 17, 0, 1, 2, 3, 4, 5, 12, 13, 14, 15, 16];
        chai.expect(solution.restoreString(inputString, indices)).to.be.equal(expectedString);
    });
});
