document.querySelector("#btnGenerateColumns").addEventListener("click", ()=>{
    var columns = document.querySelector("#row").innerHTML;

    document.querySelector("#div1").innerHTML =columns;
  });
  document.write("<br>")

  //build a table different methods
  document.write("<table border='1'>");
  for (rows=4; rows > 0; rows--){
  document.write("<tr>");
  
  for(cols=10; cols > 0; cols--){
  document.write("<td>" + rows + "-" + cols + "</td>");
  }
  document.write("</tr>");
  }
  document.write("</table>");
  document.write("<br>")

  //table using while loop
  document.write("Table using For loop method");
   rows=4;

  document.write("<table border='1'>");

  while(rows > 0) {
   console.log("Row: "+ rows--);
   document.write("<tr>");

   cols=8;
  while(cols > 0){
    console.log("Col: "+ cols--);
    document.write("<td>" + rows + "-" + cols + "</td>");
  }

   document.write("</tr>");
 }
  document.write("</table>");
  document.write("<br>")

  //Removed specified char
  console.log("Removed a spcified character");
  var a="I am from uthukotai";
  console.log("Before Replace :"+a);
  c=a.replace('uthukotai','Akkampeta');
  console.log("After Replace :" +c);
 
  console.log("count Vowel in string");
  var vowelCount = function(str){
    var count = 0;
    for(var i = 0; i < str.length; i++){
      if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' ||str[i] == 'o' ||str[i] == 'u'){
        count+=1;
      }
    }
    return count;
  }
  console.log(vowelCount('Rushendir'));

  //swap the first and last elements
  console.log("swap the elements");
  function swap(arr1) {
    [arr1[0], arr1[arr1.length - 1]] = [arr1[arr1.length - 1], arr1[0]];
    return arr1;
  }
  console.log(swap([1, 2, 3, 4]));  
  console.log(swap([0,1, 2, 3]));   

  //longest string array
  console.log("find the longest string array");
  function longest_string(str_ara) {
    var max = str_ara[0].length;
    str_ara.map(v => max = Math.max(max, v.length));
    result = str_ara.filter(v => v.length == max);
    return result;
  }
  
  console.log(longest_string(['ss', 'ddd', 'aa','a','hhhhhh']))

  //n+n/2+n/3
  function int_sum(num) {
    var s_sum = 0;
    while (num > 0) {
        s_sum += num;
        num = Math.floor(num / 2);
    }
    return s_sum;
  }
  console.log(int_sum(6))
  console.log(int_sum(8))
  console.log(int_sum(18))

  //palindrome eg.1
  var rem, temp, result= 0,number;
  number=123456;
  temp =number;
  while(number>0)
  {
      rem = number%10;
      number = parseInt(number/10);
      result = result*10+rem;
  }
  if(result==temp)
  {
      document.write(result+" is Palindrome");
  }
  else
  {
      document.write(result+" is not palindrome");
  }
  document.write("<br>")

  //palindrome eg.2
  var rem, temp, result= 0,number;
  number=12321;
  temp =number;
  while(number>0)
  {
      rem = number%10;
      number = parseInt(number/10);
      result = result*10+rem;
  }
  if(result==temp)
  {
      document.write(result+" is Palindrome");
  }
  else
  {
      document.write(result+" is not palindrome");
  }

  //palindrome eg.3
  function palindrome()  
  {  
  var a= document.getElementById("pa").value;  
  var b = "";  
  for (i = a.length-1; i >= 0; i--)  
  {  
  b = b + a[i]  
  }  
  if (a == b)  
  document.getElementById("pa2"). value = b + " is a Palindrome String ";  
  else  
  document.getElementById("pa2"). value = b + " is not a Palindrome String";  
  }  
  document.write("<br>")

  //pyramid pattern
  console.log("pyramid pattern");
   var n = 5;
   var string = "";
 for (let i = 1; i <= n; i++)  {
   for (let j = n; j > i; j--) {
    string += " ";
   }
   for (let k = 0; k < i * 2 - 1; k++) {
    string += "x";
    }
   string += "\n";
  }
 for (let i = 1; i <= n - 1; i++) {
  for (let j = 0; j < i; j++) {
  string += " ";
    }
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    string += "x";
  }
  string += "\n";
 }
console.log(string);     

//pattern 
console.log("pattern");
var n = 5;
var string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    string += n - j - i + 2;
  }
  string += "\n";
}
console.log(string);

//factorial
console.log("factorial integer");
var number = parseInt(prompt('Enter a positive integer: '));
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}

//prime number
console.log("prime number");
var number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
else if (number > 1) {

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}
else {
    console.log("The number is not a prime number.");
}

//progress bar
function update() {
    var element = document.getElementById("myprogressBar");   
    var width = 1;
    var identity = setInterval(scene, 10);
    function scene() {
      if (width >= 100) {
        clearInterval(identity);
      } else {
        width++; 
        element.style.width = width + '%'; 
      }
    }
  }
document.write("<br>");

//rotate a string

console.log("rotate a string");
var myVar = setInterval(myFunction, 7000);
    
var word = 'rushendir';
var newArray = word.split('');

function myFunction() {
var letter = newArray.pop();
var newWord = newArray.unshift(letter);
var theWord = newArray.join('');
console.log(theWord);
document.getElementById('rotate').innerHTML = theWord;
}