describe('First Test Group', () => { //top nesting block
    it('should pass', () => {
        expect(1 + 1).toEqual(2);
    });
});

describe('Second Test Group', () => {
    it('should fail', () => {
        expect(1 - 1).toEqual(0)
    })
});