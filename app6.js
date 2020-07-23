                                              //ASSIGNMENT NO:21 TO 25


document.write("<h1>ASSIGNMENT NO :6</h1>")





// //qno:1
// var firstname=prompt("Enter your first name")
// var lastname=prompt("Enter your last name")
// var fullname=firstname+" "+lastname
// alert("Hello "+fullname+" Welcome Dear...!!!")


// //qno:2
// var mobile=prompt("Enter your favorite mobile phone model ")
// document.write("Your favorite mobile phone model is :"+mobile+"<br>")
// document.write("The length of string is: "+mobile.length+"<br>")


// //qno:3
// var string="Pakistani"
// document.write("String is:"+string+"<br>")
// document.write("Index of 'n' : "+string.indexOf("n")+"<br>")


// //qno:4
// var string="Hello World"
// document.write("String is:"+string+"<br>")
// document.write("Last Index of 'l' : "+string.lastIndexOf("l")+"<br>")


// //qno:5
// var string="Pakistani"
// document.write("String is:"+string+"<br>")
// document.write("Character at index 3: "+string.charAt(3)+"<br>")


// //qno:6
// var firstname=prompt("Enter your first name")
// var lastname=prompt("Enter your last name")
// var fullname=firstname.concat(lastname)
// document.write(fullname+"<br>")


// //qno:7
// var string="Hyderabad"
// document.write("City is : "+string+"<br>")
// document.write("After replacement : "+string.replace("Hyder","Islam")+"<br>")


// //qno:8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message.replace(/and/g,"&")+"<br>")


// //qno:9
// var value="472"
// document.write("Value is: "+value+"<br>")
// document.write( "Type: "+typeof(value)+"<br>")
// value=Number("472")
// document.write("Value is: "+value+"<br>")
// document.write( "Type: "+typeof(value)+"<br>")


// //qno:10
// var string=prompt("Enter any Dryfruit name")
// var string1=string.toUpperCase()
// document.write("User input: "+string+"<br>")
// document.write("Upper case: "+string1+"<br>")


// //qno:11
// var string=prompt("Enter javascript")
// document.write("User input: "+string+"<br>")
// var first=string.slice(0,1)
// var others=string.slice(1)
// document.write("Title Case : "+first.toUpperCase()+others.toLowerCase()+"<br>")


// //qno:12
// var num=35.36
// var word=num.toString()
// document.write("Number is: "+num+"<br>")
// var split=word.split("")
//  split.splice(2,1)
//  split1=split.join("")
// document.write("Result is: "+split1+"<br>")





// //qno:13
// var username=prompt("Enter user name")
// var len=username.length
// for(i=0;i<username.length;i++){
//     if (username.slice(i,i+1)=="!" || username.slice(i,i+1)==","||username.slice(i,i+1)=="."||username.slice(i,i+1)=="@"){
//         alert("Invalid Username")
//     }

// }





//qno:14
// var A=["cake","apple pie","cookie","chips","patties"]
// var input=prompt("Welcome to ABC Bakery . what do you want to order sir/ma'am")
// var bak=input.toLowerCase()
// var bakery=A.indexOf(bak)
// if(A.indexOf(bak)!=-1){
//     alert(bak +" is available at "+bakery+" index in our bakery")
// }
//  else{
//     alert("we are sorry "+bak+" is not available in our bakery")
//  }




//qno:15
// var pass=prompt("Enter password:")
// var numbers = /[0-9]/g
// var alphabets = /[a-z]/g
// if(pass.length==6){
//     if(pass.slice(0,1)=="1"||pass.slice(0,1)=="2"||pass.slice(0,1)=="3"||pass.slice(0,1)=="4"||pass.slice(0,1)=="5"||pass.slice(0,1)=="6"||pass.slice(0,1)=="7"||pass.slice(0,1)=="8"||pass.slice(0,1)=="8"||pass.slice(0,1)=="9"||pass.slice(0,1)=="0"){
//         alert("Password can'nt begin with number \n Please enter valid password..!!")
//     }
//     else{
//         pass1=pass.slice(1)
//         if( pass1.match(numbers) == null || pass1.match(alphabets)==null){ 
//          alert( "invalid password ")}
//         else{
//             alert("your password: "+pass)
//         }
        
//     }

// }
// else{
//     alert("Password must atleast 6 character long..!!")
// }




// //qno:16
// var university="University of Karachi"
// var uni = university.split("")
// document.write(uni[0]+"<br>"+uni[1]+"<br>"+uni[2]+"<br>"+uni[3]+"<br>"+uni[4]+"<br>"+uni[5]+"<br>"+uni[6]+"<br>"+uni[7]+"<br>"+uni[8]+"<br>"+uni[9]+"<br>"+uni[10]+"<br>"+uni[11]+"<br>"+uni[12]+"<br>"+uni[13]+"<br>"+uni[14]+"<br>"+uni[15]+"<br>"+uni[16]+"<br>"+uni[17]+"<br>"+uni[18]+"<br>"+uni[19]+"<br>"+uni[20]+"<br>")


// //qno:17
// var input=prompt("Enter string")
// document.write("User Input: "+input+"<br>")
// var last=input.slice(-1)
// document.write("Last character of input: "+last+"<br>")




// //qno:18
// var text="the quick brown fox jumps over the lazy dog."
// for(i=0;i<=text.length;i++){
//     if(text.slice(i,i+3)==="the"){
//         document.write("There are 2 occurence(s) of word 'the'<br> ")
//         break;
// }
// else{
//     document.write("No 'the' found")
// }
// }





                                           //ASSIGNMENT NO:26 TO 30




//qno:1
// var value=prompt("Enter positive integer: ")
// document.write("Number is: "+value+"<br>")
// document.write("Round off value: "+Math.round(value)+"<br>")
// document.write("Floor value: "+Math.floor(value)+"<br>")
// document.write("Ceil value: "+Math.ceil(value)+"<br>")



// //qno:2
// var value=prompt("Enter negative integer: ")
// document.write("Number is: "+value+"<br>")
// document.write("Round off value: "+Math.round(value)+"<br>")
// document.write("Floor value: "+Math.floor(value)+"<br>")
// document.write("Ceil value: "+Math.ceil(value)+"<br>")




// //qno:3
// var value=-5
// document.write("The absolute value of "+value+" is "+Math.abs(value)+"<br>")




// //qno:4
// var first=Math.random(first)*7
// var second=Math.random(second)*7
// first1=Math.round(first)
// second1=Math.round(second)
// document.write("Random dice value: "+first1+"<br>")
// document.write("Random dice value: "+second1+"<br>")



// //qno:5
// var first=Math.random(first)*2
// var second=Math.random(second)*2
// first1=Math.round(first)
// second1=Math.round(second)
// document.write(first1+"<br> Random coin value: Heads <br>")
// document.write(second1+"<br> Random coin value: Tails <br>")



// //qno:6
// var first=Math.random(first)*100
// first1=Math.round(first)
// document.write("random number between 1 and 100: "+first1+"<br>")



// //qno:7
// var weight=prompt("Enter weight Possible user inputs can be: \n a. 50 \n b. 50kgs \n c. 50.2kgs \n d. 50.2kilograms")
// parseInt(weight)
// document.write("The weight of user input is "+weight+" kilograms <br>")


//qno:8
// var first=Math.random(first)*10;
// first1=Math.round(first)
// var desire=6;
// document.write(first1)
// if (desire==first1){
//     alert("Congratulations you win..!")
// }
// else{
//     alert("Try again")
// }





                                                       //ASSIGNMENT NO:31 TO 34

                                                       

// //qno:1
// var cuurentdate=new Date()
// document.write(cuurentdate+"<br>")


// //qno:2
// var month=["January","February","March","April","May","June","July","August","September","October","November","December"]
// var currentMonth=new Date()
// var result=month[currentMonth.getMonth()]
// document.write("Current month: "+result+"<br>")


//qno:3
// var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// var currentDay=new Date()
// var result=day[currentDay.getDay()]
// resul2=result.slice(0,3)
// document.write("Today is: "+resul2+"<br>")


//qno:4
// var day=prompt("Enter day")
// var d=day.toLowerCase();
//     if(d==="sunday" || d==="saturday"){
//        document.write("It's Fun Day"+"<br>")
//     }
//     else{
//         document.write("It's not Fun Day"+"<br>")
//     }

//qno:5
// var day=+prompt("enter today date ")
// if (day>=1 && day<=15){
//     document.write("first fifteen days of month")
// }
// else if (day>=16 && day<=30)
// {
//     document.write("Last days of month"+"<br>")
// }
// else{
//     document.write("Invalid Date!"+"<br>")
// }

// qno:6
// var today = new Date ();
// var todaymili=today.getTime();
// var t =todaymili/(1000*60*60)
// document.write("Current Date: " + today + "<br>" )
// document.write("Elapsed miliseconds since January 1, 1970: " + todaymili + "<br>" )
// document.write("Elapsed minutes since January 1, 1970: " + t)


// qno:7
// function GetTime(date) {
//     var currentTime = (new Date(date))
//     var hours = currentTime.getHours()
//     var suffix = '';
//     if (hours > 11) {
//         suffix += "PM";
//     } else {
//         suffix += "AM";
//     }
//      var minutes = currentTime.getMinutes()
//     if (minutes < 10) {
//         minutes = "0" + minutes
//     }
//     if (hours > 12) {
//         hours -= 12;
//     } else if (hours === 0) {
//         hours = 12;
//     }
//     var time =  "It's "+ suffix;
//     return time;
// }
// var a=GetTime(20);
// document.write(a)


//qno:8

//  var d=new Date(2020,4,31);
// document.write("Later Date: "+d);


 //qno:9


// var dateBefore = new Date("april 24,2020");
// var p=dateBefore.getTime();
// var dateAfter = new Date("june 20 , 2020");
// var today=dateAfter.getTime();
// var difference =   today-p;
// var daysBetween = (difference / (1000*60*60*24));
// document.write("Number of Days between dates: "+daysBetween+"<br>");


//qno:10
// var s_d = new Date("Jan 1,2015");
// var p=s_d.getTime();
// var e_d = new Date();
// var today=e_d.getTime();
// var difference =   today-p;
// var seconds = (difference / (1000*60));
// document.write("On reference date  "+ e_d + " "+ seconds + " seconds had passed since 2015");



// qno:11
// var Date=new Date();
// document.write("Current Date: "+Date)
// Date.setHours(Date.getHours()-1);
// document.write("<br> 1 Hour ago, it was: "+Date);


// qno:12
// var year= new Date();
// document.write("Current Date: "+year)
// year.setFullYear(year.getFullYear()-100)
// document.write("<br> 100 Years ago, it was: "+ year);

// qno:13

//  var age=+prompt("Enter Your age")
//  var t_d=new Date();
//  var year=t_d.getFullYear()-age;
//  document.write("Your age is " +age+ " "+ "<br> Your birth year is "+year+"<br>" )

// qno:14

// var c_name=prompt("Enter Customer Name")
// var month=["January","February","March", "April","May", "June", "July","August","September","October","November","December"]
// var current_m=new Date()
// var result=month[current_m.getMonth()]
// var units=410;
// var charges=16;
// var NetAmount=units*charges;
// var n=NetAmount.toFixed(2)
// var LateCharges=350;
// var GrossAmount=(NetAmount+LateCharges);
// var g=GrossAmount.toFixed(2);
// document.write(" <br> Customer Name: "+c_name )
// document.write(" <br> Current Month: "+result )
// document.write(" <br> Number of units: "+units)
// document.write(" <br> Charges per units: "+charges)
// document.write(" <br> Net Amount Payable (within Due Date): "+NetAmount)
// document.write(" <br> Late Payment Surcharge: "+LateCharges)
// document.write(" <br> Gross Amount Payable (after Due Date): "+g)



                                              //ASSIGNMENT NO:35 TO 38

//qno:1
// function date(){
//     return new Date();
// }
// var d=date();
// document.write("<h4> Date Will Be <\h4> " +d)




//qno:2
// function welcome(f_name,l_name){
//     return f_name + l_name;
// }
//  var w =welcome("Question_mark","    Personality");
// document.write(" <br> <br> <br> <br>  Respected Welcome to Mrs  " + w)


//qno:3
// var num1=prompt("Enter First Number")
// var num2=prompt("Enter Second Number")
// function add(a,b){
//     return a+b;
// }
// var s=add(+num1,+num2);
// document.write("sum of given numbers will be   " + s)


//qno:4

// var n1=+prompt("Enter First Number")
// var op=prompt("Enter the operation")
// var n2=+prompt("Enter Second Number")
// function calcu(nu1,opr,nu2){
//     if(op=="+"){
//         return n1+n2;

//     }
//     else if(op =="-"){
//         return n1-n2;

//     }
//     else if(op =="/"){
//         return n1/n2;

//     }
//     else if(op =="*"){
//         return n1*n2;

//     }
//     else {
//         alert("invalid numbers")
//     }
// }
// var c=calcu(n1,op,n2);
// document.write("Your result will be   " + c)


// qno:5

// var s=+prompt("Enter Number")
// function sq(){
//     return s*s;
// }
// q=sq(s);
// document.write("Square will be   " + q)


//qno:6

// var f=+prompt("Enter Number to finds its factorial")

//   function fact(fa){
//     var fac =1; 
//     for(var i =1; i<=fa; i++){

//         fac =fac*i;
//     }
//    return fac
//    }
//  t=fact(f);
//  document.write("Factorial will be   " + t)


//qno:7
// var s_num = prompt("enter starting number")
// var e_num = prompt("enter ending number")
// function count(){
//     for (var i=s_num ; i<=e_num ; i++){

//         document.write(i +"<br>") ;   
//     }  
// }
// count();

//qno:8

//  var base = +prompt("enter base")
//  var perp = +prompt("enter perpendicular")
//  var h;
//  function calculateHypotenuse(b,p){
//      function calculatesquare(h){
//         return document.write( "Hypotenuse of Right angle tringle will be "+ (b*b+ p*p));

//      } 
//      calculatesquare();
//  }
// calculateHypotenuse(base, perp);


//qno:9

// var width=+prompt("enter width of rectangle")
// function area(w,h){
//     return  w*h; ;
// }
// var a =area(width, 4)
// document.write("the area of recatngle will be  "+ a)

//qno:10

//  function par()
//  {
// var word=prompt("enter your word ");
// var check="";
// for (var i=word.length-1; i>=0; i--) 
//     {
//     check+=word[i]
//     }
// if (word===check){
//     document.write(word+" is palandrome word")
//     }
// else{
//     document.write(word+" is  not palandrome word")
// }

// }
//  par();


// qno:11
// var str=prompt("enter any string");
// function  c_str(s){

//     var a = str.split(' ');
//     var b = [];

//     for(var i = 0; i < a.length; i++){
//         b.push(a[i].charAt(0).toUpperCase()+a[i].slice(1));
//     }
//     return b.join(' ');
// }
// var a=c_str(str);
// document.write("Required string will be "+ a)


// qno:12


// function l_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(l_word('DAWOOD UNIVERSITY'));


//qno:13

// function count(str, l) 
// {
//  var l_Count = 0;
//  for (var i = 0; i < str.length; i++) 
//  {
//     if (str.charAt(i) == l) 
//       {
//       l_Count += 1;
//       }
//   }
//   return l_Count;
// }
// document.write("the number of occurrences of the specified letter within the string will be " + count('saira', 'a'));



//qno:14
// var radius=prompt("enter radius of circle")
// var r_c ,a_c=0;
// function calcCircumference(r){
//     r_c=2*3.142*r;
//     return r_c
// }
// function calcArea(a){
//     a_c=3.142*a*a;
//     return a_c
// }
// document.write("The circumference of circle will be "+ calcCircumference(radius) +"<br>");
// document.write("The Area of circle will be "+ calcArea(radius));