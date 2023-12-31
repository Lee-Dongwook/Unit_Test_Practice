const fn = {
    add : (num1, num2) => num1 + num2,
    makeUser: (name, age) => ({name, age}),
    throwError: () => {
        throw new Error("오류가 발생하였습니다.")
    },
    getName: (callback) => {
        const name = "Lee";
        setTimeout(() => {
            callback(name);
        }, 3000);
    },
    getAge: () => {
        const age = 26;
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(age);
            }, 3000);
        })
    }
};


module.exports = fn;