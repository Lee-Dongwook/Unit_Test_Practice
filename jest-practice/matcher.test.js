const fn = require('./_fn');

/**
 * toBe() function
 */
test('1은 1이다.', () => {
    expect(1).toBe(1);
});

test('2 더하기 3은 5이다.', () => {
    expect(fn.add(2, 3)).toBe(5);
})

test('3 더하기 4은 9가 아니다.', () => {
    expect(fn.add(3, 4)).not.toBe(9);
})


/**
 * toEqual() function
 */

test('2 더하기 3은 5이다.', () => {
    expect(fn.add(2,3)).toEqual(5);
})

test("Lee는 올해 26살이 되었다.", () => {
    expect(fn.makeUser("Lee", 26)).toEqual({
        name: "Lee",
        age: 26
    })
})

/**
 * toBeNull() function
 */

test("null은 null이다.", () => {
    expect(null).toBeNull();
})

/**
 * toBeUndefined() function
 */

test("undefined은 undefined이다.", () => {
    expect(undefined).toBeUndefined();
})

/**
 * toBeNaN() function
 */

test("NaN은 NaN이다.", () => {
    expect(NaN).toBeNaN();
})

/**
 * toBeTruthy() function
 */

test("1은 true이다.", () => {
    expect(fn.add(2,-1)).toBeTruthy();
})

test("비어있지 않은 문자열은 true 입니다.", () => {
    expect(fn.add("Lee","Study")).toBeTruthy();
})

/**
 * toBeFalsy() function
 */

test("0은 false이다.", () => {
    expect(fn.add(1,-1)).toBeFalsy();
})

/**
 * toBeGreaterThan() function
 * toBeGraterThanOrEqual() function
 */

test("2 더하기 3은 4보다 큽니다.", () => {
    expect(fn.add(2,3)).toBeGreaterThan(4);
})

test("비밀번호는 6자리 이상이어야 합니다.", () => {
    const password = "password";
    expect(password.length).toBeGreaterThanOrEqual(6);
})

/** 
 *  toBeCloseTo() function
 */  

test("0.1 더하기 0.2는 0.3 입니다.", () => {
    expect(fn.add(0.1,0.2)).toBeCloseTo(0.3);
})

/**
 * toMatch() function
 *  정규 표현식을 사용
 */

test("Hello World에 a라는 글자는 없습니다.", () => {
    expect("Hello World").not.toMatch(/a/);
})


/**
 * toContain() function
 */

test("유저 목록에 Lee가 있습니다.", () => {
    const user = "Lee";
    const userList = ["Kim", "Lee", "Park"];
    expect(userList).toContain(user);
})

/**
 * toThrow() function
 */

test("fn.throwError() 함수를 호출하면 오류가 발생합니다.", () => {
    expect(() => fn.throwError()).toThrow("오류가 발생하였습니다.");
})