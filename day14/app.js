// console.log(1+2)
// console.log(1+2)
// console.log(1+2)
// console.log(1+2)
// console.log(1+2)


function add(){
    console.log(1+2)
}
add()

function add2(a,b){
    console.log(a+b)
}

add2(13,5)
add2(23,45)


function sub(a,b){
    console.log(a-b)
}

sub(12,6)

function multi(a,b){
    console.log(a*b)
}
multi(2,6)

function divide(a,b){
    console.log(a/b)
}
divide(6,6)

const add3 = (a,b)=>{
    console.log(a+b)
}
add3(3,2)

const sub3 = (a,b) =>{
    console.log(a-b)
}
sub3(12,6)

const multiply2 = (a,b) =>{
    console.log(a*b)
}
multiply2(12,6)

const divide2 = (a,b) =>{
    console.log(a/b)
}
divide2(4,2)

var animal = ['Cat','Dog','Snake']
function pushAnimal(a){
    animal.push(a)
}

pushAnimal('Lion')
console.log(animal)

function popAnimal(b){
    animal.pop(b)
}
animal.pop()
console.log(animal)


const data = [1,2,3,4,5]
function print(c){
   console.log(data[4])
}
print()


const data2 = [{
    name : 'Manish',
    age :22
},
{
    name : 'Manisha',
    age: 22
}]
function printe(d){
    console.log(data2[1].name,)
    console.log(data2[1].age)
}
printe()


const age = 30
function pp(f)
{
    console.log(age)
    if (age < 18)
        console.log("You cannot  vote.")
    else{
        console.log("You can vote.")
    }
}
pp(age)