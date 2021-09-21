type PeopleType = {
    name: string
    age: number
}

// export const people: Array<PeopleType> = [
//     {name: 'Alex Drew', age: 56},
//     {name: 'Oleg Los', age: 45},
//     {name: 'Igor Dran', age: 33}
// ]


// const messages = people.map((p) => {
//     return `Hi dear ${p.name}`
// })

export const createGreetingMessages = (people: Array<PeopleType>) => {
    return people.map((p) => {
        return `Hi dear ${p.name.split(' ')[0]}`
    })
}
