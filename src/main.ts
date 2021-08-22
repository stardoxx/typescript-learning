const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
};

console.log(getFullName("true", " "));
//compilerOptions for watchinh and keeping js and ts file separately
// using types every where variable and functions are involved

//!  INterfaces in typescript


interface User{
    name: string;
    age?: number; // question mark is used for not amking a particular field default compulsory
    getMessage(): string; // return type of the function     
}


const user: User = {
    name:"ravi",
    age: 20,
    getMessage(){
        return "hello " + this.name;
    }
}

const user2: User = {
    name: "jack",
    getMessage(){
        return "hello " + this.name;
    }  
}

console.log(user.getMessage()); 
// union and type alias in typescript    

let userName: string = "alex";
let pagename: string | number = 1;  //union
let errorMessage: string | null = null;

interface Userinterface {
    name: string;
    surname: string;
}

let userA: Userinterface | null = null;   //if fetched then it will use UserInterface else null

 //type alias in typescript 
 type ID = number;
 interface personinterface {
     id: ID;
     name : string;
     surname : string;
 }

type PopularTag = string;

const popularTag: PopularTag[] = ['camel', 'apple'];

// use of void in typescript  used in case of do return 
const doSomething = (): void => {
    console.log('hi its doing something');

}

// void can only be used in case of function but not in case of variable  assignment

let uname: any = null; //any disables typescripts type check not recommended to use in a project more than 5 times

// "unknown" data type check better alternative for "any" datatype

let vAny: any = 10; //
let vUnknown: unknown = 10;

let s1 :string  = vAny; //type error gone un detacted
//let s2: string = vUnknown; //type error  detacted


//TYPE ASSERTIONS IN TYPESCRIPT --> for type conversion
let s2 :string = vUnknown as string;

let pageNumber: string = "1";
let numericPageNumber: number = (pageNumber as unknown) as number; 

// classes in typescript

class UserClass{
    
    protected firstName: string;
    private lastName: string;
    readonly unChangeAbleName: string;

    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.unChangeAbleName = firstName;  //now after this unChangeAbleName variable can't be changed
    }

    getFullName():string{
        return this.firstName+ " "+this.lastName;
    }

}

const userNew = new UserClass("ravi","menon");
console.log(userNew.getFullName());


//interface for the class method
interface PetInterface{
    getBreedName(): string;
} //----> tells that whichever class implementing this function must implement above function
//with string as its return type

class Pet implements PetInterface{
    petName: string;
    breedName: string;
    static maxAge: number;  // static property of pet class  
    constructor(petName: string, breedName: string){
        this.petName = petName;
        this.breedName = breedName;
    }
    
    getBreedName(): string {
        return this.breedName;
    }


}


class dog extends Pet{
    private puppyName: string;

    getAboutDog(): string{
        return this.puppyName+" "+ this.getBreedName();
    }

    setAboutDog(puppyName: string): void{
        this.puppyName = puppyName;
    }

}

