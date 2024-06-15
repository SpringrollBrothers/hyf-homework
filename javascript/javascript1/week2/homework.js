//Formal fullname


function getFullname(firstname,surname,useFormalName = false){ 
    if (useFormalName){         
        return `Lord.${firstname} ${surname}`
    }else{
       return `${firstname} ${surname}`
    }
    } 
    
    let firstName1=getFullname('Benjamin','Button');
    let firstName2=getFullname('Benjamin','Button',true);
    
    console.log(firstName1);
    console.log(firstName2);




//Event application 

let today=new Date();
let todayIndexWeekday=today.getDay();
const weekdays=[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday']

let eventdaysleft=10;
let eventday = (todayIndexWeekday+ eventdaysleft) % 7
console.log(weekdays[eventday]);



//Weather wear

function chooseClothesToWear(temperature){
    if(temperature>0 && temperature<13){
        console.log(`What about some jackets and a hat`);
    }else if (temperature>13 && temperature< 20){
        console.log(`Wear hoodie and sweatpants`);
    }else{
console.log(`wear shorts`);
    }
}
chooseClothesToWear(16);




// addStudentToClass function

const class07Students = [];
function addStudentToClass(studentName)
 {
    if(studentName === ''){
console.log(`you can not add this empty name`);
    }
 else if(class07Students.includes(studentName)){
    console.log(`Student${studentName}is already in the class`);
}
else if(class07Students.length >6 && studentName !== 'Queen' ){
    console.log(`Cannot add more students to class 07"`);
}

else{
    class07Students.push(studentName);
}
}
addStudentToClass('Amalie');
addStudentToClass('Cecilie');
addStudentToClass('Josephine');
addStudentToClass('Queen')
addStudentToClass('Amalie')
addStudentToClass('Joakim')
addStudentToClass('Matilde')
addStudentToClass('Luna')
addStudentToClass('Sebastian')
addStudentToClass('Frederik')



function getNumberOfStudents() {
return class07Students.length;
}
console.log(`the number of students in class is ${getNumberOfStudents()}`);




//addCandy function

const candyPrices = {
    sweet: 0.5,
    Chocolate: 0.7,
    Toffee: 1.1,
    Chewing_gum: 0.03
}
    function addCandy(candyType,weight){
        
    const pricePerGram=candyPrices[candyType]
    let boughtCandyPrice = pricePerGram *weight;
    return boughtCandyPrice;
    }
 
 let boughtCandyPrice = addCandy('sweet',5)
 
console.log(boughtCandyPrice);
 


const amountToSpend=Math.random() * 100;
let boughtCandy=[];
function canBuyMoreCandy()
{
    if (boughtCandyPrice>amountToSpend){
        console.log(`Enough candy for you!`);}
    else {console.log(`You can buy more, so please do!`)}
}

canBuyMoreCandy();
