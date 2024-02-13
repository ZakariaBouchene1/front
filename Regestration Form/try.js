function showDetails(params) {
    let string =''
    for(let e=0;e<arguments.length;e++) {
        string+=" <---  "+arguments[e].id + "  --  "+arguments[e].name+"   --->   \n"
    }

    return string ;
}
let cons={
    id:1,
    name:"Cons",
    toString:showDetails
};
let cons2={
    _id:4,
    name:"Con2s",
    toString:showDetails,
    set ID(value){this.this._id=value;
},get ID(){return this._id;}
};

this.id=1;
this.name="guest"
let log = console.log;
log(cons.toString());
log(showDetails(cons,cons2,this))
log("name" in cons)
log("id" in this)
delete cons.id;
log(cons.hasOwnProperty("_id"));
cons2._id=5
Object.defineProperty(cons2,"id",{value:2,enumerable:true,configurable:false,writable:false})
log(cons2.id=3)
let i=9
Object.keys(cons2).forEach(el => {log(cons2[el])
    
});

let checkbox=document.getElementById("checkbox")
let isDarkThem = document.getElementById('them');

checkbox.addEventListener('click',log("checked"))
var card={}
Object.defineProperties(card,{
    "id":{
        value:1,
        enumerable:true,
        configurable:false ,
        writable:false},
    "question":{
    value: questions[i],
    enumerable:true,
    configurable:false ,
    writable:false},
    "coice":{
        value:choices[i],
        enumerable:true,
        configurable:false ,
        writable:false},
    "answer":{
        value:answers[i],
        enumerable:true,
        configurable:false ,
        writable:false}
    }
);
// the card will be a class to make it much easier=========
// extensible cant add a property on an object
// sealed  can't add or delete a property but can change its attributes 
// frozen   can't add,delete or change a property  
//  iam in 
// https://www.udemy.com/course/advanced-and-object-oriented-javascript/learn/lecture/10029396#overview