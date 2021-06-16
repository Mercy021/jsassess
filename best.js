//question2
setTimeout(function(){
    console.log("mixing the lemon cake ingredients")
},3000);
setTimeout(function(){
    console.log("putting the lemon cake mixture in the oven")
},1000);
setTimeout(function(){
    console.log("cake baked by")
})

// question3 
//We have two different functions ,the outer function and the inner function.
//the outer function in the global function
//the inner function is the local function 
//there is also an object created
//The code below will output the name bar which is the object name in the outer function as specified in the console.log on the this identifier
//on the (self)identifier the output will also be a bar.
//the inner function the output will be undefined because on the inner function there is no variable created for (this)
//The reason  is because the identifier (this) has been used where it is used to specify maybe a variable name.
//Also the function has been called ,the function that contains the variable lisalab.
//question4
var lisaLab = {
    name: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};

lisaLab.func();

//The identifier (this) has been used to identify the element in the outer function and also the inner function.
//It has been used inorder when calling the function you dont have to go and console it out the function,
//you can also console it inside the function.

