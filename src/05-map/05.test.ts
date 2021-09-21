import React from "react";
import {createGreetingMessages} from "./05";

let people: Array<PeopleType>

type PeopleType = {
    name: string
    age: number
}


beforeEach(() => {
    people = [
        {name: 'Alex Drew', age: 56},
        {name: 'Oleg Los', age: 45},
        {name: 'Igor Dran', age: 33}
    ]
})


test('get only completed tasks', ()=> {

    const messages = createGreetingMessages(people)

    expect(messages.length).toBe(3);
    expect(messages[2]).toBe('Hi dear Igor');

})


export{}
