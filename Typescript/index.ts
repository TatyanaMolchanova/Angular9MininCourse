let str: any = 'Hello Typescript'
let num: number = 42
let isActive: boolean = false

let strArray: string[] = ['h', 'e', 'l']
let numArray: Array<number> = [1, 1, 2, 3]

//==========

// function logInfo(name: string, age: number): void {
    // console.log(`Info: ${name}, ${age}`)
// }

// logInfo('Tatynana', 25)

//==========

function calc(a: number, b: number | string): number {
    
    if (typeof b === 'string') b = +b
    
    return a + b
}

// console.log(calc(2, 5))

//==========

class Server {
    static VERSION = '1.0.3'

    // public name: string
    // protected ip: number
    
    private status: string = 'working'

    // constructor(name: string, ip: number) {
    constructor(public name: string, protected ip: number) {
        // this.name = name
        // this.ip = ip
    }

    public turnOn() {
        this.status = 'working'
    }

    protected turnOff() {
        this.status = 'offline'
    }

    public getStatus(): string {
        return this.status
    }
}

const server: Server = new Server('AWS', 1234)

//==========

interface UserInterface {
    name: string
    age: number
    logInfo: () => void // function than nothing returns - функция, которая ничего не возращает (void)
    id?: any // not required ? - may be or may not
}

const user: UserInterface = {
    name: 'Tanya',
    age: 38,
    logInfo() {
        console.log(this.name + ' ' + this.age)
    },
    // id: 3
}

//==========

// interface SayHello {
//     sayHello: () => void
// }

// class User implements SayHello {
//     constructor(private name: string, private age: number) {}

//     sayHello() {
//         console.log(this.name + 'Hello!')
//     }
// }

//==========

// const arr: number[] = [1, 2, 3, 4]
const arr: Array<number> = [1, 2, 3, 4]
// const arr2: Array<any> = [1, 2, 3, 4]
// const arr3: Array<string> = [1, 2, 3, 4]

//==========

interface User {
    id: number
    name: string
    age: number
}

const users: Array<User> = [
    {id: 1, name: 'V', age: 2},
    {id: 2, name: 'E', age: 23}
]

const users2: Array<User> = [
    {id: 1, name: 'V', age: 2},
    {id: 2, name: 'E', age: 23}
]