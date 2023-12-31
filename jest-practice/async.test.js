const fn = require("./_fn");

/**
 * callback
 */

test("3초 후에 Lee 이름이 호출됩니다.", (done) => {
    function callback(name) {
        try{
            expect(name).toBe("Lee");
            done();
        } catch (error) {
            done();
        }
    
    }
    fn.getName(callback);
})


/**
 * Promise
 */

test("3초 후에 Lee의 나이인 26이 호출됩니다.", () => {
    return fn.getAge().then(age => {
        expect(age).toBe(26);
    });
})

test("3초 후에 Lee의 나이인 26이 호출됩니다.", () => {
    return expect(fn.getAge()).resolves.toBe(26);
})

test("3초 후에 Lee의 나이인 26이 호출됩니다.", async() => {
    const age = await fn.getAge();
    expect(age).toBe(26);
})