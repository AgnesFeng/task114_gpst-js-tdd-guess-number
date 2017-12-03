const main = require('../main/main');
let expect = require('chai').expect;
describe('main()', () => {
    it('real:1234,input:1234',function () {
       let real = '1234';
       let input = '1234';
       let result = main(real,input);
       expect(result).to.equal([1234]);
    });
});