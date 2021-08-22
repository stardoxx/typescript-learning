// TYPESCRIPT for DOM
var someElement = document.querySelector(".foo");
//typescript does not know anything about the markup
//it only knows value assigned to it. 
// console.log("someElement: ", someElement.value); this is error as it does not know anything about the value
//one approach is to
console.log("someElement: ", someElement.value); //but it's a wrong approach as we have disabled typescript
//better approach is to 
var newElement = document.querySelector(".foo");
console.log("newElement: ", newElement.value);
//during event listener,
newElement.addEventListener("blur", function (event) {
    var target = event.target;
    console.log("target: ", target.value);
});
//ENUMS
var Status;
(function (Status) {
    Status[Status["NotStarted"] = 0] = "NotStarted";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done";
})(Status || (Status = {}));
console.log(Status.InProgress);
