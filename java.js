
//var ahmadIsTheName = "son";
//var number = 10; 
//alert(number);

//if number is  equal to 10 then print the number else print The number is less that 10
//if (number > 10 ) {
   //     alert(number);
   //  } else {
      //   alert("The number is less that 10");
   //  }





//if (ahmadIsTheName == "son" ){
     //    alert("he is my boy");
  //  } else {
   //      alert("he is not ");
   // }



  //  var jop = prompt("What is your jop?");
  //  var position = prompt("What is your position?");

   // checkjop(jop);
   // checkPositon(positon);

   // function checkjop(jop) {
   //     alert("welcome "+jop);
   // }
    
   // function checkPositon(position){
      //  if (position == "site") {
       //     alert("Logged in");
      //  } else {
      //      alert("you are not architect");
     //   }
  //  }
   


// take the distance of hight and width from the user 
//var width = prompt("Enter the width ");
//var hight = prompt("Enter the hight ");

//multi()

//function multi() {
   // var TotalArea = parseInt(width) * parseInt(hight);
   // alert(TotalArea);
//}




//console.log(userinput);

//function greeting() {
 // var stu = prompt('this is only for students, are you a student?(Yes/No)');
  // while(stu != 'yes'){
      // stu = prompt('Please answer with Yes or No');
  // }
//}

//greeting();

let getItem = function() {
   let userInput = prompt('please enter country name (france or germany)');
   let item = '';
 
   while(userInput !== 'germany' && userInput !== 'france') {
     userInput = prompt('Please enter something like germany or france only');
   }
 
   if(userInput === 'germany') {
     item = '<img src="download (1).jpg" />';
   } else if (userInput === 'france') {
     item = '<img src="download.jpg" />';
   }
 
   return item;
 }
 
 let howMany = function() {
   let count = prompt('please enter country name');
 
   while(count === '' || isNaN(count)) {
     count = prompt('Please enter a number!!');
   }
 
   return count;
 }
 
 // function showOrder
 // declare the other fuunction
 // call functioon from the html
 
 let showOrder = function() {
   let item = getItem();
   let total = howMany();
   let result = '';
 
   for(let i = 0; i < total; i++) {
     result = result + '<p>Model #' + i + ' ' + item + '</p>';
   }
   // document.write(item);
   return result;
 }