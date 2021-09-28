// export const usersArray = ["Sun", "Don", "Jane", "Gis"]

export const userObj = {
    "0": "Sun",
    "1": "Don",
    "2": "Jane",
    "3": "Gis"
}

type UsersType = {
    [key: string]: {
        id: number
        name: string
    }
}

export const users: UsersType = {
    "101": {id: 101, name: "Sun"},
    "1043561": {id: 1043561, name: "Don"},
    "10455551": {id: 10455551, name: "Jane"},
    "1401": {id: 1401, name: "Gis"},
}

let user = {
    id: 100500, name: "Igor"
}

//users[101] Моментально быстрое доставание объекта из массива O(n)

users[user.id] = user //Добавляем user в массив users, ключом к этому объекту будет id его же
// //удалить юзера по его id
//users[user.id].name = "Loh"   - UPDATE))


export const usersArray = [
    {id: 101, name: "Sun"},
    {id: 1043561, name: "Don"},
    {id: 10455551, name: "Jane"},
    {id: 1401, name: "Gis"},
]


