const fn = {
    add : (num1, num2) => num1 + num2,
    makeUser: (name, age) => ({name, age}),
    throwError: () => {
        throw new Error("오류가 발생하였습니다.")
    }
};


module.exports = fn;