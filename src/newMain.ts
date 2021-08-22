// TYPESCRIPT for DOM
const someElement = document.querySelector(".foo"); 
//typescript does not know anything about the markup
//it only knows value assigned to it. 

// console.log("someElement: ", someElement.value); this is error as it does not know anything about the value
//one approach is to
console.log("someElement: ", (someElement as any).value) //but it's a wrong approach as we have disabled typescript

//better approach is to 
const newElement = document.querySelector(".foo") as HTMLInputElement;
console.log("newElement: ", newElement.value);

//during event listener,
newElement.addEventListener("blur", (event) =>{
    const target = event.target as HTMLInputElement;
    console.log("target: ", target.value);
});

//ENUMS
enum Status{
    NotStarted,
    InProgress,
    Done,
}

console.log(Status.InProgress);

