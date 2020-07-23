                      
                      //ASSIGNMENT NO:1 TO 20
                      
                                        //ASSIGNMENT NO:1


                                                          
/*alert("Assalam-o-Alaikum, my name is Amna Zafar");
alert("Error! Please enter a valid passward");
alert("Welcome to js land... \n Happy Coding!");
alert("Welcome to JS Land...");
alert("Happy Coding! \n prevent this page from creating additional dialogs.");
var value="Hello... I can run JS through my web browser's console";
console.log(value);

                                                            //ASSIGNMENT NO:2
var username="Amna Zafar";
alert(username);
var myName="Amna Zafar";
alert(myName);
var message="Hello World";
alert(message);
var biodata="Jhone Dhoe";
alert(biodata);
var biodata="15 years old";
alert(biodata);
var biodata="Certified Web and Mobile Application Development";
alert(biodata);
alert("Pizza \n Pizz \n Piz \n Pi \n P");
var email="rashidam603na@gmail.com";
var email2="My Email Address is";
var emailAddress= email2+ " " +email;
alert(emailAddress);
var book="A smarter way to learn Javascript";
alert("I am trying to learn from the Book" + " " + book);
var a= "<h3>Yah! I can write HTML content through JavaScript</h3>"
document.write(a)
var string="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
alert(string)

                                                               //ASIGNMENT NO:3

//qno:1
var age="I am 21 years old";
alert(age);
//qno:2
var N=[3];
for(i=1;i<=N;i++){
  alert("You have visited this site "+" "+ i +" "+ "times");
}
//qno:3
var birthyear=1998;
document.write("My birth year is" +" "+ birthyear +"</br> " +" Data type of my declared variable is number</br></br>");
//qno:4
var Visitorsname="<b>John Doe</b>";
var producttitle="XYZ Clothing Store."
var Quantity="<b>5 T-Shirts</b>"
document.write(Visitorsname+" "+"ordered"+" "+Quantity+"(s)"+ " on " + producttitle+"</br></br>");

                                                          //ASSIGNMENT NO:4
//qno:1
var Name="Amna Rashid", Year="1998" , Rollno="WM2168";
document.write(Name+" "+Year+" "+Rollno +"</br></br>");
       
//qno:2                              //illegal Variables

// var &illegal1="John";
// var #illegal2="John";
// var %illegal3="John";
// var @illegal4="John";
// var !illegal5="John";

                                 //legal Variables

var legal="John";
var _legal2="John";
var $legal3="John";
var legal_4="John";
var $legal_5="John";
                      
//qno:3                        
document.write("<h2>“Rules for naming JS variables”</h2></br>");
document.write("Variable names can only contain numbers, $ and _. For example $my_1stVariable<br>");
document.write("Variables must begin with a letter, $ or_. For example $name, _name or name<br>");
document.write("Variable names are case sensitive<br>");
document.write("Variable names should not be JS keywords<br><br>");

                                                                //ASSIHNMENT NO:5

//qno:1
var value1=+prompt("enter first value for addition");
var value2=+prompt("enter second value for addition")
var value=value1+value2;
document.write("Sum of "+ value1 +" and "+ value2+" is "+value +"<br><br>")

//qno:2
var value1=+prompt("enter first value for subtraction");
var value2=+prompt("enter second value for subtraction")
var value=value1-value2;
document.write("Difference of "+ value1 +" and "+ value2+" is "+value +"<br><br>")

var value1=+prompt("enter first value for multiplication");
var value2=+prompt("enter second value for multiplication")
var value=value1*value2;
document.write("Result of multiplication of "+ value1 +" and "+ value2+" is "+value +"<br><br>")

var value1=+prompt("enter first value for division");
var value2=+prompt("enter second value for division")
var value=value1/value2;
document.write("Division of "+ value1 +" and "+ value2+" is "+value +"<br><br>")

var value1=+prompt("enter first value for modulus");
var value2=+prompt("enter second value for modulus")
var value=value1%value2;
document.write("Modulus of "+ value1 +" and "+ value2+" is "+value +"<br><br>")

//qno:3
var value;
value=5;
document.write("Initial value is:"+value+"<br>");
value++;
document.write("Value after increment  is:"+value+"<br>");
value=value+7;
document.write("Value after addition is:"+value+"<br>")
value--;
document.write(" Value after decrement is:"+value+"<br>");
value=value%3;
document.write("The remainder is: "+value+"<br><br>")

//qno:4
value=600;
document.write("Total cost to buy 5 tickets to a movie is "+value*5+"PKR <br><br>")

// qno:5
document.write("<h1>TABLE OF '4' </h1>")
for(var i=1;i<=10;i++)
{
  document.write("4"+"x"+i+"="+4*i+"<br>");
}

document.write("<br><br>")

//qno:6
var celcius=25;
var F=(celcius*9/5)+32;
document.write(celcius+"C"+"is"+F+"F"+"<br><br>");
var Farenhiet=70;
var C=(Farenhiet-32)*5/9;
document.write(Farenhiet+"F"+"is"+C+"C"+"<br><br>");


//qno:7
document.write("Price of item 1 is 650 <br>");
document.write("Quantity of item 1 is 3<br>");
document.write("Price of item 2 is 100 <br>");
document.write("Quantity of item 2 is 7 <br>");
document.write("Shipping charges is 100 <br> ");
var total=650*3+100*7+100;
document.write("Total cost of your order is "+total +"<br><br>");

//qno:8
var Tmarks=980;
document.write("Total marks is  "+Tmarks+"<br>")
var obtmarks=804;
document.write("Obtained marks is  "+obtmarks+"<br>")
var percentage=obtmarks/Tmarks*100;
document.write("Percentage is  "+percentage+"%"+"<br><br>")

//qno:9
document.write("<h1>CURRENCY IN PKR</h1>")
var currency=104.80*10+25*28;
document.write("Total currency in PKR: "+currency+"<br><br>")
document.write("---------------------------------------<br><br><br>")

//qno:10
var exp=(5+5*10)/2;
document.write("Result of expression is "+exp+"<br><br>");

//qno:11
document.write("<h1>AGE CALCULATOR</h1>");
var year=2020;
document.write("Current year: "+ year+"<br>");
var birthyear=2001;
document.write("Birth year: "+ birthyear+"<br>");
var age=2020-2001;
document.write("Your age is : "+ age +"<br><br>");

var year=2020;
document.write("Current year: "+ year+"<br>");
var birthyear=1973;
document.write("Birth year: "+ birthyear+"<br>");
var age=2020-1973;
document.write("Your age is : "+ age +"<br><br>");
document.write("---------------------------------------<br><br><br>")

//qno:12
document.write("<h1>THE GEOMETRIZER</h1>");
var radius=20;
var pi=3.14;
var circumference=2*pi*radius;
var area=pi*radius*radius;
document.write("Radius of  Circle: "+radius+"<br>")
document.write("Circumference is : "+circumference+"<br>")
document.write("Area is : "+area+"<br>")
document.write("---------------------------------------<br><br><br>")


//qno:13
document.write("<h1>THE LIFETIME SUPPLY CALCULATOR</h1>");
var snacks="chocklatechips";
document.write("Favorite snack is:"+snacks+"<br>") 
var cage=15;
document.write("Current age is:"+cage+"<br>") 
var mage=65;
document.write("Estimated maximum age is:"+mage+"<br>") 
var perday=3;
document.write("Amount of snacks per day is:"+perday+"<br>") 
document.write(" “You will need 150 "+snacks+ " to last you until the ripe old age of "+mage+"”"+"<br>")


document.write("------------------------------------------------------------------<br><br><br>")

                                                    //ASSIHNMENT NO:6-9
//qno:1
var a=10;
console.log("The value of a is :",a);
++a
console.log("The value of ++a is :",a)
console.log("Now the value of a is :",a);
console.log("The value of a++ is :",a)
a++
console.log("Now the value of a is :",a);
--a;
console.log("The value of --a is :",a)
console.log("Now the value of a is :",a);
console.log("The value of a-- is :",a)
a--
console.log("Now the value of a is :",a);

//qno:2
var a=2;
 var b=1;
 --a;
 console.log("The value of --a is:",a);
 --b;
 console.log("Now the value of --b is:",b)
 var res=a-b;
 console.log("Result of --a - --b is",res);
 ++b;
 console.log("Now the value of ++b is:",b)
 res=res+b;
 console.log("Result of --a - --b + ++b is:",res);
 b--;
 console.log("Now the value of b-- is:",b)
 res=res+b
 console.log("Final result of --a - --b + ++b +b-- is:",res);
 console.log("Now the value of a is:",a);
 console.log("Now the value of b is:",b);

//qno:3
var name=prompt("Enter your name")
 alert("God bless you!")
 
//qno:4
var t=+prompt("Enter any number");
 if(t!=5){
     for(var i=1;i<11;i++){
          var tab=t*i;
          console.log(t,"*",i,"=",tab);
     }
 }
 else{
     for(var i=1;i<11;i++){
         var tab=5*i;
         console.log(5,"*",i,"=",tab)
     }
 }

//qno:5
var sub1,sub2,sub3,m1,m2,m3,obt,tot;
 sub1=prompt("Enter sub1 name");
 sub2=prompt("Enter sub2 name");
 sub3=prompt("Enter sub3 name");
 m1=+prompt("Enter sub1 marks");
 m2=+prompt("Enter sub2 marks");
 m3=+prompt("Enter sub3 marks");
 tot=m1+m2+m3;
 console.log(tot);
 
                                                    //ASSIHNMENT NO:9-11
//qno:1
/*var  city= prompt("enter the city name");
if (city == "Karachi"){
    console.log("Welcome to city of lights")
}

//qno:2
 var gender = prompt("Enter your gender");
if(gender == "male"){
    console.log(" Good Morning Sir")
}
else if(gender == "female"){
    console.log(" Good Morning Ma'am")
}
else{
    console.log("undefined")
}

//qno:3
var color = prompt("Enter color");
if(color == "Red"){
     console.log("Must Stop ")
  }
  else if(color == "Yellow"){
      console.log("Ready to move ")
  }
  else if(color == "Green"){
    console.log("Move now")
  } 
  else{
    console.log("undefined")
  }

//qno:4
var fuel = prompt(" input remaining fuel in car (in litres)");
if( fuel < 0.25 ){
    console.log("Please refill the fuel in your car")
}
else{
    console.log("the tank has more than 0.25 liters on fuel in it")
}

//qno:5
var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true"); 
} 
 
var b = 82; 
if (b++ === 83){ 
    alert("given condition for variable b is true"); 
} 
var c = 12; 
if (c++ === 13){ 
    alert("condition 1 is true"); 
} 
if (c === 13){ 
    alert("condition 2 is true");
} 
if (++c < 14){ 
    alert("condition 3 is true"); 
} 
if(c === 14){ 
    alert("condition 4 is true"); 
} 
 
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals"); 
} 
 
if (true){ 
    alert("True"); 
} if (false){ 
    alert("False"); 
} 
 if("car" < "cat"){ 
     alert("car is smaller than cat"); 
    } 

//qno:6
var totalmarks = +prompt("enter total marks");
console.log("Total Marks:", totalmarks)
var marks1 = +prompt("enter marks of subject 1");
var marks2 = +prompt("enter marks of subject 2");
var marks3 = +prompt("enter marks of subject 3");
var obtnmarks = (marks1 + marks2 + marks3);
console.log("Obtain Marks: " , obtnmarks);
var perc = (obtnmarks/totalmarks)*100;
console.log("Percentage:", perc);
if(perc >= 80 && perc <= 100){
  console.log("Grade: A-one", "remarks: Excellent ")
}
else if(perc >=70 && perc<=80 ){
  console.log("Grade: A", "remarks: Good ")
}
else if(perc >=60 && perc<=70 ){
  console.log("Grade: B", "remarks: You need to improve ")
}
else if(perc <=60 ){
  console.log("Grade: fail", "remarks: sorry ")
}
else{
  console.log("error")
}

//qno:7
randomnum = Math.floor(Math.random() * 10 + 1); 
var guessnum = +prompt("Guess the number: ");
if ( randomnum == guessnum ){
  console.log("Bingo! Correct answer")
}
else if( randomnum = guessnum+1){
  console.log("“Close enough to the correct answer")
}
else{
  console.log("wrong answer")
}


//qno:8
var num = +prompt("enter number: ");
if(num % 3 == 0){
  console.log(num , "is divisible by 3")
}
else{
  console.log(num, "is not divisible by 3")
}

//qno:9
var num = +prompt("enter number: ");
if(num % 2 == 0 ){
  console.log(num , "is an even number")
}
else{
  console.log(num, "is an odd number")
}

//qno:10
var temp = +prompt("enter Temperature: ");
if(temp > 40 ){
  console.log("It is too hot outside")
}
else if(temp > 30 && temp <=40 ){
  console.log("The Weather today is Normal")
}
else if(temp > 20 && temp <=30 ){
  console.log("Today’s Weather is cool")
}
else if(temp > 10 && temp <=20 ){
  console.log("OMG! Today’s weather is so Cool")
}
else{
  console.log("wrong value")
}

//qno:11
var firstnum = +prompt("enter first number:");
var secnum = +prompt("enter second number:");
var operator = prompt("enter operator"); 
console.log(operator)
if(operator == "+" ){
  console.log(firstnum + secnum)
}
else if(operator == "-" ){
  console.log(firstnum - secnum)
}
else if(operator == "*" ){
  console.log(firstnum * secnum)
}
else if(operator == "/" ){
  console.log(firstnum / secnum)
}
else if(operator == "%" ){
  console.log(((firstnum + secnum)/200)*100)
}
else{
  console.log("wrong operator")
}

                                                      //ASSIHNMENT NO:12-13

//qno:1
var ch = prompt("Enter any character:");
if(ch>=65 && ch<=90){
  console.log("Character is a capital letter")
}                                                     //////////////////////////////////////////////////////
else if(ch>=97 && ch<=122){
  console.log("Character is a small letter")
}
else if(ch>=48 && ch<=57){
  console.log("Character is a digit")
}
else{
  console.log("wrong value")
}
	
//qno:2
var num1, num2;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");
                                                 
if(parseInt(num1, 10) > parseInt(num2, 10)) 
{ 
  console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
}   
else if(parseInt(num2, 10) > parseInt(num1, 10)) 
{
  console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
}                  
else{
    console.log("The values "+ num1+ " and "+num2+ " are equal.");
  }

//qno:3
var num = +prompt("enter number: ");
if(num > 0){
  console.log("Positive number")
}
else if(num == 0){
  console.log("Zero")
}
else{
  console.log("Negative number")
}

//qno:4
var ch = prompt("enter an alphabet");
if(ch=='a' || ch=='e' ||ch=='i' ||ch=='o'||ch=='u' ||ch=='A' ||ch=='E' ||ch=='I' ||ch=='O' ||ch=='U'){
  console.log("True")
}
else{
  console.log("False")
}

//qno:5
var pass ="random123";
 uspass=prompt("Enter your password");
 if(uspass==""){
 alert("Please enter your password");
 }
 else if(uspass==pass){
     alert("Correct!")
 }
 else{
     alert("Incorrect!")
 }

//qno:6
var greeting; 
var hour = 13; 
if (hour < 18) { 
  console.log(greeting = "Good day");
} 
else{
    console.log(greeting = "Good evening"); 
}

//qno:7
var time=prompt("Enter time in 24 hour clock format like 1900=7pm");
if (time>=0000&&time<1200){
  alert("GOOD MORNING.....!")
}
else if (time>=1200&&time<1700){
  alert("GOOD AFTERNOON.....!")
}
else if (time>=1700&&time<2100){
  alert("GOOD EVENING.....!")
}
else if (time>=2100&&time<2359){
  alert("GOOD NIGHT.....!")
}
else{
  alert("please enter appropriate time")
}

//////////////////////////////////////////





                                                            //ASSIHNMENT NO:14-16
//qno:1
var myArray = [];

//qno:2
const array = []

//qno:3
var fruits = ["apple" , "mango" , "banana" , "orange"];
for( var i=0; i<fruits.length; i++){
  fruits[i];
  console.log(fruits[i]);
}

//qno:4
var number = [1,3,6,9,12,18];
for( var i=0; i<number.length; i++){
  console.log(number[i]);
}

//qno:5
var array = [];
for (i=0; i<10; i++) {
    array[i] = i%2===0;
}
var strArray = [];
for (i=0; i<10; i++) {
    strArray[i] = array[i] ? "true" : "false";
    console.log(strArray[i].toUpperCase());
}

//qno:6
var array = ["amna" , 3, "apple" ,4, 6, 7];
for( var i=0; i<array.length; i++){
  console.log(array[i]);
}

//qno:7
var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
for( var i=0; i<qualification.length; i++){
  console.log(qualification[i]);
}


//qno:8
var stu=[],m=[];
for(i=0;i<3;i++){
    stu[i]=prompt("Enter name");
    m[i]=prompt("Enter "+ stu[i] + " marks :");
  var  per=(m[i]/500)*100
    console.log("Score of "+ stu[i] +" is "+ m[i] +". Percentage: "+per)
}                          ////////////////////////////////////////////


//qno:9
var colors=["orange","yellow","red"]
var beg=prompt("what do u want to add beginning of the color array?")
colors.unshift(beg)
alert(colors)
var beg=prompt("what do u want to add end of the color array?")
colors.push(beg)
alert(colors)
colors.unshift("grey","purple")
alert(colors)
colors.shift()
alert(colors)
colors.pop()
alert(colors)
var beg=prompt("what do u want to add in the color array?")
var num=+prompt("at which index u want to insert?")
colors.splice(num,num,beg)
alert(colors)
var num1=+prompt("at which index u want to delete colours?")
var num2=+prompt("how many colours u want to delete ?")
colors.splice(num1,num2+1)
alert(colors)





//qno:10
var studentscores = [320,230,480,120];
console.log(studentscores.sort());

//qno:11
var cities= ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedcities = cities.slice(2,4);
console.log(cities)
console.log(selectedcities)

//qno:12
var arr = ["This", "is","my", "cat"]; 
console.log(arr.join(' '));

//qno:13
var arr=[];
console.log("Devices :")
for(i=0;i<5;i++){
    arr[i]=prompt("Enter device name");
    console.log(arr[i]);
}




//qno:14
var arr=[];
console.log("Devices(Last in first out) :")
for(i=0;i<5;i++){
    arr[i]=prompt("Enter device name");
}
for(j=4;j>=0;j--){
    console.log(arr[j]);
}



//qno:15
var arr=["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>")
for(var i=0; i < arr.length ;i++){
  document.write("<option>"+ arr[i] +"</option>")
}
document.write("</select>")




                                            //ASSIGNMENT NO:17 TO 20


//qno:1
var empty_Multidimentional_Array=[
  []
]

//qno:2
let multidimentionalL = [
  [0, 1,2,3],
  [1,0,1,2],
  [2,1,0,1],
  
];
document.write(multidimentionalL[0]+"<br>"+multidimentionalL[1]+"<br>"+multidimentionalL[2]+"<br><br>")

//qno:3
for(i=1;i<=10;i++)
{
  document.write(i+"<br>")
}
document.write("<br><br>")

//qno:4
var table=prompt("Enter a number to show its multiplication table : ");
var i=prompt("Enter length multiplication table : ");
for(j=1;j<=i;j++)
{
  document.write(table+"x"+j+"="+table*j+"<br>");
}

//qno:5
var fruits = ['apple', 'banana', 'mango', 'orange','strawberry']
document.write(fruits[0]+"<br>"+fruits[1]+"<br>"+fruits[2]+"<br>"+fruits[3]+"<br>"+fruits[4]+"<br><br>")
for(i=0;i<fruits.length;i++)
{
   document.write("Element at index "+i+" is "+fruits[i]+"<br>")
}
document.write("<br><br>") 

//qno:6
document.write("<h3>COUNTING</h3>");
for(i=1;i<=15;i++){
  document.write(i+", ")
}
document.write("<h3>REVERSE COUNTING</h3>");
for(i=10;i>0;i--){
  document.write(i+", ")
}
document.write("<h3>Even</h3>");
for(i=0;i<=20;i+=2){
  document.write(i+", ")
}
document.write("<h3>Odd</h3>");
for(i=1;i<=19;i+=2){
  document.write(i+", ")
}
document.write("<h3>Series</h3>");
for(i=2;i<=20;i+=2){
  document.write(i+"K, ")
}
document.write("<br>")
document.write("------------------------------------------------------------------<br><br><br>")
document.write("<br><br>")

//qno:7
var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
var string=prompt("Welcome to ABC bakery, what do u want to order sir/ma'am? ")
string=string.toLowerCase();
for(i=0;i<=A.length;i++){
  if(A[i]==string)
  {
    alert("cookie is available at index "+i+" in our bakery")
  }
  else{
    alert("we are sorry "+ string+" is not available in our bakery")
  }
}

//qno:8
var array = [24, 53, 78, 91, 12];
var largest= 0;
for (i=0; i<=largest;i++){
    if (array[i]>largest) {
         largest=array[i];
    }
}
document.write("Array element: "+array[0]+" "+array[1]+" "+array[2]+" "+array[3]+" "+array[4]+" <br>")
document.write("Largest number is: "+largest);
document.write("<br><br>")

//qno:9
var array = [24, 53, 78, 91, 12];
var smallestNumber=100;

for (var i = 0; i < array.length; i++) {
  if (array[i] < smallestNumber) {
    smallestNumber = array[i];
  }
}
document.write("Array element: "+array[0]+" "+array[1]+" "+array[2]+" "+array[3]+" "+array[4]+" <br>")
document.write("Smallest number is: "+smallestNumber);
document.write("<br><br>")

//qno:10
for(i=5;i<=100;i+=5)
{
  document.write(i+" ")
}*/
