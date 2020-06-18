var str = 'Hello Typescript';
var num = 42;
var isActive = false;
var strArray = ['h', 'e', 'l'];
var numArray = [1, 1, 2, 3];
//==========
// function logInfo(name: string, age: number): void {
// console.log(`Info: ${name}, ${age}`)
// }
// logInfo('Tatynana', 25)
//==========
function calc(a, b) {
    if (typeof b === 'string')
        b = +b;
    return a + b;
}
// console.log(calc(2, 5))
//==========
var Server = /** @class */ (function () {
    // constructor(name: string, ip: number) {
    function Server(name, ip) {
        this.name = name;
        this.ip = ip;
        // public name: string
        // protected ip: number
        this.status = 'working';
        // this.name = name
        // this.ip = ip
    }
    Server.prototype.turnOn = function () {
        this.status = 'working';
    };
    Server.prototype.turnOff = function () {
        this.status = 'offline';
    };
    Server.prototype.getStatus = function () {
        return this.status;
    };
    Server.VERSION = '1.0.3';
    return Server;
}());
var server = new Server('AWS', 1234);
var user = {
    name: 'Tanya',
    age: 38,
    logInfo: function () {
        console.log(this.name + ' ' + this.age);
    }
};
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.sayHello = function () {
        console.log(this.name + 'Hello!');
    };
    return User;
}());
