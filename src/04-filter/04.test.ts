import React from "react";

let task: Array<taskType>

type taskType = {
    id: number
    title: string
    isDone: boolean
}


beforeEach(() => {
    task = [
        {id:1, title: 'bread', isDone: false},
        {id:2, title: 'salt', isDone: true},
        {id:3, title: 'milk', isDone: false},
        {id:4, title: 'sugar', isDone: true}
    ]
})


test('get only completed tasks', ()=> {

    const CompletedTasks = task.filter(t => t.isDone)

    expect(CompletedTasks.length).toBe(2);
    expect(CompletedTasks[0].id).toBe(2);
    expect(CompletedTasks[1].title).toBe('sugar');
})

test('get only uncompleted tasks', ()=> {

    const CompletedTasks = task.filter(t => !t.isDone)

    expect(CompletedTasks.length).toBe(2);
    expect(CompletedTasks[0].id).toBe(1);
    expect(CompletedTasks[1].title).toBe('milk');

    console.log(56)
})

export{}
