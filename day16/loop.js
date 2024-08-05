
//The function which goes in argument to next function is CALLBACK FUNCTION 
//The function that accepts th callback function is high order function


const object = {
    name : "Manishabbg"
}


//forEach
const data1 =[1,2,3,4,5]
//ans
data1.forEach(function(data){
    console.log(data)
})



const names = ['Manisha','Anish',22,true]
//ans
names.forEach(function(name){
    console.log(name)
})


const result = [{
    name : 'Manish',
    age : 22
},{
    name :'Anish',
    age : 23
}
]
//ans
result.forEach(function(res){
    console.log(res.name,res.age)
    // console.log(res.age)
})

const tapshareData = [
    {
        text : "test",
        userID : "f889186",
        title : "test"
    }
]
//ans
tapshareData.forEach(function(data){
    console.log(data.text,data.userID,data.title)
})

const nums = [1,2,3,4,5]
const square = []
//ans
nums.forEach(function(squares){
    square.push(squares)
    console.log(squares*squares)
    //console.log(square)
    
})
console.log(square)



//map
const person = [{
    firstName : 'Sandhya',
    lastName : ' Khatri',
     
},{
    firstName : 'Sandhya',
    lastName : ' Poudel'
}]
//ans
const results = person.map(function(data){
    return{
        firstName : data.firstName,
        lastName : data.lastName,
        fullName : data.firstName+data.lastName
    }
})
console.log(results)

const products = [{
    name : 'Apple',
    price : 100
},{
    name :'Mango',
    price : 200
}]
//ans
const resultss = products.map(function(dattaa){
    return{
        name : dattaa.name,
        price : dattaa.price,
        quantity : 10
    }
})
console.log(resultss)


//reduce
data1.reduce(function(){
    
})


//filter
data1.filter(function(){
    
})