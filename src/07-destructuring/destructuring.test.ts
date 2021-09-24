import {ManType} from "./Destructuring";

let props: ManType

beforeEach(() => {
    props = {
        name: "DSun",
        age: 33,
        lessons: [{title: '1'}, {title: "2"}],
        address: {
            street: {
                title: "Nezalezhnasci"
            }
        }
    }

})

test('', () => {

    //const age = props.age
    //const lessons = props.lessons
    const {age, lessons} = props; // ищет в пропсах такие же ключи age и lessons
    const {title} = props.address.street

    const a = props.age
    const l = props.lessons

    expect(age).toBe(33)
    expect(lessons.length).toBe(2)

    expect(a).toBe(33)
    expect(l.length).toBe(2)

    expect(title).toBe("Nezalezhnasci")
})


test('', () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls1, ls2] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')

    expect(ls2).toStrictEqual({title: "2"})


})

export {}
