var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("true", " "));
var user = {
    name: "ravi",
    age: 20,
    getMessage: function () {
        return "hello " + this.name;
    }
};
var user2 = {
    name: "jack",
    getMessage: function () {
        return "hello " + this.name;
    }
};
console.log(user.getMessage());
// union and type alias in typescript    
var userName = "alex";
var pagename = 1; //union
var errorMessage = null;
var userA = null; //if fetched then it will use UserInterface else null
var popularTag = ['camel', 'apple'];
// use of void in typescript  used in case of do return 
var doSomething = function () {
    console.log('hi its doing something');
};
// void can only be used in case of function but not in case of variable  assignment
var uname = null; //any disables typescripts type check not recommended to use in a project more than 5 times
// "unknown" data type check better alternative for "any" datatype
var vAny = 10; //
var vUnknown = 10;
var s1 = vAny; //type error gone un detacted
//let s2: string = vUnknown; //type error  detacted
//TYPE ASSERTIONS IN TYPESCRIPT --> for type conversion
var s2 = vUnknown;
var pageNumber = "1";
var numericPageNumber = pageNumber;
// classes in typescript
var UserClass = /** @class */ (function () {
    function UserClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unChangeAbleName = firstName; //now after this unChangeAbleName variable can't be changed
    }
    UserClass.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return UserClass;
}());
var userNew = new UserClass("ravi", "menon");
console.log(userNew.getFullName());
//with string as its return type
var Pet = /** @class */ (function () {
    function Pet(petName, breedName) {
        this.petName = petName;
        this.breedName = breedName;
    }
    Pet.prototype.getBreedName = function () {
        return this.breedName;
    };
    return Pet;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    dog.prototype.getAboutDog = function () {
        return this.puppyName + " " + this.getBreedName();
    };
    dog.prototype.setAboutDog = function (puppyName) {
        this.puppyName = puppyName;
    };
    return dog;
}(Pet));
