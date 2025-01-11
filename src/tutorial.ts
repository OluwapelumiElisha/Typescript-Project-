// console.log("Hello My TypeScript");
// interface someValue {
//     name : String;
//     id: Number;
// }

// let someObj:someValue = {
//     name: 'Zion',
//     id : 666626
// }


// console.log(someObj);


// const books = ['1984', 'Brave New world', 'Fahrenheit 451']

// let foundbook;

// for (let book of books ){
//     if (book === '1984') {
//         foundbook =  book;
//         foundbook = foundbook.toUpperCase()
//         break;
//     }
// }

// console.log(foundbook?.length); 


// let tax : number | string = 10 

// let requestStatus : 'pending' | 8 | 'error' = 'pending'

// requestStatus = 8

// let gg  = ['fff', 'rrr ', 7]

// function sayHi(name:string) {
//     console.log(`Hello People ${name.toUpperCase()}`);
    
// }

// sayHi('name')



// function calculateDiscount(price:number) {
//     const discount = true

//     if (discount) {
//         return 'Discount Applied'
//     //     //  return price * 0.9
//     }
//     return price * 0.9 
   
// }


// const finalPrice = calculateDiscount(200)
// console.log(finalPrice);

// calculateDiscount(99)





// function addThree(number:any) {
//     let anotherNumber : number = 3
//     return number + anotherNumber   
// }

// const result = addThree(4)
// const someValue = result

// console.log(result);




// const array:[]string = []

// const nameOfStudent:string[] = ['Favour','Peter','Matthew','David']


// function checkIfNameIsIndulce(name:string) {
//     const check = nameOfStudent.includes(name)
//     if (check) {
//         console.log(`${name} is in the array of names`);
        
//     } else{
//         console.log(`${name} is not in array of names`);
        
//     }
// }

// checkIfNameIsIndulce('Petr')

// function calculateScore(price:number, Discount?:number):number {
//     return price - (Discount || 0)
// }

// let priceAfterDiscount = calculateScore(300)

// console.log(priceAfterDiscount);



// function sum(message: string,  ...numbers:number[]):string {
//     const doubled = numbers.map((num)=> num )
//     console.log(doubled);
//     let total = numbers.reduce((a,b)=>{
//         console.log(a, 'jj');
//         // console.log(b);
        
//       return a + b;  
//     }, 0)
//     return `${message} ${total}`
// }

 
// let result1 = sum('The total is : ' ,  1, 2, 3, 4, 5,)
// console.log(result1);

// function processInput(message: string | number ) {
//     if (typeof message === 'number') {
//         console.log(message * 2);
        
//     }else if(typeof message === 'string'){
//         console.log((message || '').toUpperCase());
        
//     } else{
//         console.log('Please input Number or String');
        
//     }
// }
// processInput(575787)


// function createEmployee({id}:{ id: number}):{
//     id: number; 
//     isActive: boolean;
// } {
//     return {id, isActive: id % 2 === 0};
// }

// const first = createEmployee({id:1})
// const second = createEmployee({id:2})


// console.log(first);
// console.log(second);




// function createStundent(student: { id: number; name: string}):void {
//     console.log(`Welcome to the Course ${student.name.toUpperCase()}!!!`);
    
// }

// const firstStudent = {
//     id : 0,
//     name : 'elisha',
//     email: 'oluwapelumielisha38@gmail.com'
// }

// createStundent(firstStudent)


// function processData(input: string | number, config:{reserve: boolean} = {reserve : false}) {
//     if (typeof input === 'number') {
//         console.log(input ** 2);
        
//     }else {
//         console.log(config.reserve ? input.toUpperCase().split('').reverse().join(''): input.toUpperCase());
        
//     }
// }

// processData('Hello',{
//     reserve : false
// })

// type Theme = 'light' | 'dark'

// let theme : Theme;
// theme = 'dark'
// theme = 'light'

// function setTheme(t: Theme) {
//     theme = t;
// }


// setTheme('dark')


// type Employee = {
//     id:number,
//     name:string,
//     department:string
// }

// type Manager = {
//     id:number,
//     name:string,
//     employees:Employee[]
// }


// type Staff = Employee | Manager


// function printStaffDetails(message:Staff) {
//     if ('employees' in message) {
//         console.log(`${message.name} is an manager in the ${message.employees.length} employees.`); 
//     }
//     else{
//         console.log(`${message.name} is an employees in the ${message.department} department.`); 
//     }
// }
//     const favour : Employee = { id:1, name:'Favour', department: 'SLT' };
//     const jame: Employee = { id:2, name:'Jame', department: 'Computer Science' };
//     const bob :Manager = { id:3, name: 'bobo', employees:[favour, jame]} 


//     printStaffDetails(favour)
//     printStaffDetails(bob)


// type Book = {
//     id:number,
//     name:string,
//     price:number
// }

// type DiscountedBooks = Book & {discount:number}
// const book1: Book = {
//     id: 1,
//     name : 'How to Cook Lion',
//     price: 23
// }

// const book2 : Book = {
//     id: 3,
//     name : "Love of Fish",
//     price: 29
// }

// const book3 : DiscountedBooks ={
//     id: 1,
//     name : 'How to Cook Lion',
//     price: 23,
//     discount: 0.56
// }



// interface Book {
//     readonly isbn: number,
//     title: string,
//     author: string,
//     genre?: string
//     printAuthor():void,
//     printTitle(message:string): string,
//     printSomething: (someValue : number)=> number
// }

// const deepwork: Book ={
//     isbn: 123,
//     title: 'deep work',
//     author: 'Omotosho Sunday',
//     genre: 'Self-help',
//     printAuthor() {
//         console.log(this.author);
        
//     },
//     printTitle(message) {
//         return `${this.title} ${message} `
//     },
//     // first 
//     // printSomething: function(someValue) {
//     //    return someValue 
//     // },
//     // second 
//     printSomething: (someValue )=>{
//         console.log(deepwork.author);
//         return someValue
//     }
// }


// // deepwork.printAuthor()
// // const result1 = deepwork.printTitle('is an awesome book')

// // console.log(result1);

// // console.log(deepwork.printSomething(999));





// interface Computer {
//     readonly id: number,
//     brand: string,
//     ram: number,
//     storage?: number
//     upgradeRam(upgrade:number): number
// }


// const computerInfo: Computer = {
//     id: 3,
//     brand: 'Dell',
//     ram: 16,
//     // storage: 258,
//     upgradeRam(upgrade){

//         this.ram += upgrade
//         return this.ram
//         // return `${this.brand} with ${this.ram} has been upgrade to ${upgrade} `
//     }
// }

// computerInfo.storage = 256 
// console.log(computerInfo.upgradeRam(78));
// console.log(computerInfo);




// interface person {
//     name : string,
//     getDetails():string;
// }


// interface dogOwner {
//     dogName : string,
//     getDogDetails():string;
// }

// interface person {
//     age : number,
    
// }
// const Person: person = {
//     name:'John',
//     age : 30,
//     getDetails() {
//         return `Name: ${this.name}, Age: ${this.age}`
//     },
// }

// // console.log(Person.getDetails());
// interface Employee extends person  {
//     employeeId : number
// }

// const employee : Employee = {
//     name: 'James',
//     age: 90,
//     employeeId: 23,
//     getDetails() {
//         return `Name: ${this.name}, Age: ${this.age}, EmployeeId: ${this.employeeId}`
//     },
// }

// console.log(employee.getDetails());

// interface Manager extends person, dogOwner{
//     managePeople():void
// }

// const manager: Manager = {
//     name : 'Maxwell',
//     age: 15,
//     dogName : 'Jack',
//     getDetails(){
//         return `Name: ${this.name}, Age: ${this.age},`
//     },
//     getDogDetails() {
//         return `Name: ${this.dogName}`
//     },
//     managePeople() {
//         console.log('Managing People .....');
        
//     },
// }

// manager.managePeople()
// const getEmployee = (): Person | DogOwner | Manager =>{
//     const random = Math.random()
//     console.log(random);
//     if (random < 0.33) {
//         return {
//             name : 'Jerry'
//         }
//     }else if (random < 0.66) {
//         return {
//             name : 'femi',
//             dogName: 'Rex'
//         }
//     }else {
//         return {
//             managePeople() {
//                 console.log("Managing People ....");
//             },    
//             delegateTasks(){
//               console.log('DeleGating Tasks ....');
              
//             }, 
//             name : 'John'
//         }
//     }
// }


// interface Person {
//     name : string
// }

// interface DogOwner extends Person{
//     dogName : string
// }

// interface Manager extends Person {
//     managePeople():void,
//     delegateTasks():void
// }


// const employee : Person | DogOwner | Manager = getEmployee()

// console.log(employee.name);
// // getEmployee()


// function isManager(obj: Person | DogOwner | Manager): obj is Manager {
//     return 'managePeople' in obj 
// }

// // console.log(isManager(employee));

// if (isManager(employee)) {
//     employee.delegateTasks()
// }


// enum serverResponseStatus {
//     Success = 200, 
//     Error = 505
// }

// interface User{
//     role: [string]
// }

// // console.log(serverResponseStatus);

// Object.values(serverResponseStatus).forEach((value) => {
//     if (typeof value === 'number') {
//         console.log(value);
        
//     }
    
// })


// interface ServerResponse {
//     result : serverResponseStatus,
//     data: string[];
// }

// function getSeverResponse(): ServerResponse {
//     return{
//         result: 200,
//         data : ['First Data', 'Second Data']
//     }
// }

// const response:ServerResponse = getSeverResponse()
// console.log(response);


// enum UserRole {
//     Admin,
//     Manager,
//     Employee
// }


// type User = {
//     id : number,
//     name : string,
//     role : UserRole,
//     contact : [string, number]
// }

// function createUser(User:User) {
//     return User
// }

// let result:User = createUser({
//     id : 1,
//     name : 'Zion',
//     role: UserRole.Manager,
//     contact: ['elishaoluwapelumi38@gmail.com', 7044708007]
// })

// console.log(result);


// let someValue: any = 'This is a String';

// let strLength: number = (someValue as string).length

// type Bird = {
//     name : string;
// }

// let birdString = '{"name":"Eagle"}'
// let dogString = '{"breed":"poodle"}'

// let birdObject = JSON.parse(birdString)
// let dogObject = JSON.parse(dogString)


// let bird = birdObject as Bird 
// let dog = dogObject as Bird

// console.log(dog.name);



let unknownValue : unknown
unknownValue = 'This is me'
unknownValue = [1,2,3,4,5,6]
unknownValue = 34.555


if (typeof unknownValue === 'number') {
  let dd = unknownValue.toFixed(2)
  console.log(dd); 
}

function runSomeCode() {
    const random = Math.random()
    if (random < 0.5) {
            throw new Error ('there waas error...') 
    }
    else{
        throw 'some Error'
    }
}

try {
    runSomeCode()
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }else {
        console.log(error);
    }
}


type Theme = 'Light' | 'Dark'

function checkTheme(theme:Theme) {
    if (theme === 'Light') {
        console.log('Light theme');
        return
    }
    if (theme === 'Dark') {
        console.log('Dark theme');
        return;
    }
    theme
}


// enum Color {
//     Red, 
//     Blue,
//     Green
// }

// function getColorName(color:Color) {
//     switch (color) {
//         case Color.Red:
//             return 'Red';
//         case Color.Blue:
//             return 'Blue';
//         case Color.Green:
//             return 'Green';
//         default: 
//         let unexpectedColor: never = color;
        
//     }
// }

// console.log(getColorName(Color.Blue));
// console.log(getColorName(Color.Red));
// console.log(getColorName(Color.Green));


// import person, {sayHello, newStudent, type  Student} from "./actions"
 
// sayHello('Oluwabukola')
// console.log(newStudent);
// console.log(person);


// const newStudent2:Student = {
//     name: 'MaxWell',
//     age : 34
// }

// console.log(newStudent2);

// type valueType = string | number | boolean

// let value: valueType;
// const random = Math.random()

// value = random < 0.33 ? 'hello' : random < 0.66 ? 123.456 : true


// function checkValue(value: valueType):void {
//     if (typeof value === 'string') {
//         console.log(value.toLowerCase());
//         return;
//     }
//     if (typeof value === 'number') {
//         console.log(value.toFixed(2));
//         return
//     }
//     console.log(`boolean : ${value}`);
    
// }

// checkValue(value)

// type Dog = {type: 'Dog', name :string; bark: () => void }
// type Cat = {type: 'Cat', name :string; meow: ()=> void }
// type Animal = Dog | Cat 


// function makeSound(animal:Animal) {
//     if (animal.type === 'Dog') {
//         animal.bark();
//     }else{
//         animal.meow();
//     }
// }
// function makeSound(animal:Animal) {
//     if ('bark' in animal) {
//         animal.bark()
//     }else{
//         animal.meow();
//     }
// }



function printLength(str: string | null | undefined) {
    if (str) {
        console.log(str.length);
        
    }
    else{
        console.log('Is not a string');
        
    }
}


try {
    throw new Error ('This is a new error')
} catch (error) {
    if (error instanceof  Error) {
        console.log(`Caught an Error object : ${error.message}`);
    } else{
        console.log('unknown error....');
        
    }
}

function checkInput(input: Date | string): string {
    if (input instanceof Date) {
        return input.getFullYear().toString()
    }
    return input
}

const year = checkInput(new Date())
const random = checkInput('2020-05-05')


console.log(year);
console.log(random);

