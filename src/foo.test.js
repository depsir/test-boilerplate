const foo = require ('./foo')

describe('foo', () => {
    it('should give the answer', () => {
        expect(foo()).toEqual(42)

    })
})
