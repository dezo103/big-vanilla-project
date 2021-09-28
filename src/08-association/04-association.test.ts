import {userObj, users} from "./04-association";


beforeEach( () => {

} )


test("should select from obj", () => {
    expect(userObj['0']).toBe("Sun")
    expect(userObj['1']).toBe("Don")
    expect(userObj['2']).toBe("Jane")
    expect(userObj['3']).toBe("Gis")
})

