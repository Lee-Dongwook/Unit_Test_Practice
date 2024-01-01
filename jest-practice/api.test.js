const fn = require("./_fn");

let user;

beforeEach(async () => {
    user = await fn.connectUserDb();
})

test("유저의 정보를 호출합니다.", () => {
    expect(user.name).toEqual("Lee");
    expect(user.age).toEqual(26);
    expect(user.gender).toEqual("male");
})

afterEach(() => {
    return fn.disconnectDb();
})