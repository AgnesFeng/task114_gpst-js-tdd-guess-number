const main = require('../main/main');
let expect = require('chai').expect;
describe('main()', () => {
    // it('real:1234,input:1234',function () {
    //    let real = '1234';
    //    let input = '1234';
    //    let result = main(real,input);
    //    expect(result).to.equal('4A0B');
    // });
    it('test  A',function () {
        let real = '1234';
        let input = '1111';
        let result = main(real,input);
        expect(result).to.equal('1A1B');
    });
    it('test  A and B',function () {
        let real = '1234';
        let input = '1234';
        let result = main(real,input);
        expect(result).to.equal('4A4B');
    });
    it('test  A and B',function () {
        let real = '1234';
        let input = '4321';
        let result = main(real,input);
        expect(result).to.equal('4A0B');
    });
});