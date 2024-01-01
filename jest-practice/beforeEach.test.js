const fn = require("./_fn");

let num = 0;

beforeEach(() => {
    num = 0;
})

test("0 더하기 1은 1이다.", () => {
    expect(fn.add(0,1)).toEqual(1);
})

test("0 더하기 2는 2이다.", () => {
    expect(fn.add(0,2)).toEqual(2);
})

test("0 더하기 3은 3이다.", () => {
    expect(fn.add(0,3)).toEqual(3);
})