/**
 * mock function
 */

const mockFn = jest.fn();

mockFn.mockResolvedValue({name: "Lee", age: 26, gender: "male"});

test("mock 함수를 통해 받아온 데이터를 검증하고자 합니다.", () => {
    return mockFn().then(data => {
        expect(data.name).toEqual("Lee");
        expect(data.age).toEqual(26);
        expect(data.gender).toEqual("male");
    })
})