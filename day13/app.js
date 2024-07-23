var numbers = [1,2,3,4]

//pop delete number of last
numbers.pop()
console.log(numbers)

//Push helps to add number in last
numbers.push(5)
console.log(numbers)

//shift remove number of first
numbers.shift()
console.log(numbers)

//unshift ad  number in first
numbers.unshift(0)
console.log(numbers)

//we can add variable or number with the help of index
numbers[2] ="Manisha bbg"
console.log(numbers)


const data = [1,2,3,4]
data.push({name :"Manisha bbg"})
console.log(data)


const object = {
    name : "Manisha",
    age : 22
}
delete object['age'] //to delete object 
object.address = "Itahari" //adding
console.log(object)


var dataa = [1,2,3,{
    name : "Manisha",
    age : 40
}]
delete dataa[3].name
console.log(dataa)


const taskData = [1,2,3,4]
taskData.name = " ManishaB"
console.log(taskData)


//if else condition
var num = 2
if(num == 2)
    console.log("Number is 2")
else{
    console.log("Number is not 2.")
}


var agee = 15
if (agee >= 18)
    console.log("You can vote.")
else{
    console.log("You cannot vote.")
}


var age = 40
if(age >= 40){
    console.log("You are age")
}
else if(age >= 20 ){
    console.log("You are mature")
}
else{
    console.log("You area child.")
}


var temp = 0
if(temp >= 30){
    console.log("It is very hot outside")
}
else if (temp >= 20){
    console.log("Temperture is warm")
}
else{
    console.log("It is cold")
}

//Loop
var numb = ['Manisha','Anish','Sandhya','Pranjal']
for (var i = 0; i < numb.length; i++) 
    {
    console.log(numb[i]);
}
