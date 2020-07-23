
                                            //Assignment no: 39 to 42



//Qno:1
function powernum(a,b){
    result=Math.pow(a,b);
    document.write("The result is "+result+"<br>");
}


powernum(2,3)



//Qno:2
function leapyear(){

  
      var leap= prompt("Enter year to find leap or not")

    if (leap%400==0 || leap%4==0){
        alert("The "+leap+" is leap year")
    }
    else{
        alert("The "+leap+" isn't leap year")
    }

 }

 leapyear()


// Qno:3
function S(){
    var a=2
    var b=6
    var c=3
    S=(a+b+c)/2
    return S
 
}


 function areanum(a,b,c){
    
    var result=S( S *((S-a)*(S-b)*(S-c)))
    document.write("The area of triangle is "+result+"<br>")
 }

areanum(2,6,3)



//Qno:4
function marks(s1,s2,s3){
    var avg=(s1+s2+s3)/3
     return avg
}

var num= marks(30,25,20)

function percentage(){
     per=75/90*100
     count=per.toFixed(2)
    return  count
}
percentage()

function main(){
    document.write("The average of student is: "+num+" and percentage is: "+count+"<br>")
}

main()


//Qno:5
function indexof(){
const paragraph = "Here is Amna Zafar, The most pretty girl...!! Amna Zafar doing bachelor's from Duet";

const searchTerm = "Amna";
const indexOfFirst = paragraph.indexOf(searchTerm);

document.write('The index of the first '+searchTerm +" from the beginning is " +indexOfFirst+"<br>");


document.write('The index of the 2nd '+searchTerm+ " is " +paragraph.indexOf(searchTerm, (indexOfFirst + 1))+"<br>");
}

indexof()


//Qno:6
function vowels(){

    var sentence="The way we are talking"
    document.write("String with vowels: "+ sentence+"<br>")
    if(sentence.length>25){
        alert("morethan 25 characters not allowed")
    }
    else if(sentence.length==0){
        alert("0 length string error")
    }
    else{
        var string=sentence.toLowerCase()
        strings= string.replace( /[aeiou]/g, '' );              

         document.write("String without vowels: "+strings+"<br>");
 }

}

vowels()




//Qno:7

function vowels2() {
    var str = "Pleases read this application and give me gratuity";
    var result = str.match(/[aeiou]{2}/g);
    document.write("Such occurrences are: "+result+"<br>")
}
  
vowels2();
  
 

//Qno:8
function distance(){
    dist1=prompt("Enter the distance between 2 cities in km: ")
    document.write("Distance in km: "+dist1+"<br>")
    return dist1
}
distance()

function meters(){
    dist2=dist1*1000
    document.write("Distance in meter: "+dist2+"<br>")
}
meters()

function feet(){
    dist3=dist1*3280.8
    document.write("Distance in feet: "+dist3+"<br>")
}
feet()

function inches(){
    dist4=dist1*39370.1
    document.write("Distance in inches: "+dist4+"<br>")

}
inches()

function centimeter(){
    dist5=dist1*100000
    document.write("Distance in centimeter: "+dist5+"<br>")

}
centimeter()


//Qno:9
function overtime(){
    var timeWorked=prompt("Enter time employee work in hour, worked above 40 hours.")
		if (timeWorked>40)
		{
			var overTime = timeWorked - 40;
            var overtimePay = (12 * overTime);
            document.write("Total Overtime Pay Of Employee Is: "+ overtimePay+"<br>");
        }
        
        else{
            alert("Incorrect input")
        }
	
}
overtime()


//Qno:10
function withdraw(){
    var amount=prompt("Please enter amount of withdraw: ");
	

    document.write("Required notes of Rs. 100  : "+(amount/100)+"<br>")
    document.write("Required notes of Rs. 50  : "+(amount%100)/50+"<br>")
    document.write("Required notes of Rs. 10  : "+((amount%100)%50)/10+"<br>")
    document.write("Amount still remaining  : "+(((amount%100)%50)%10)+"<br>")
	
}
withdraw()




                                         //Assignment no: 43 to 48



//Qno:1 and 2

function alerts(){
    alert("Thanks for purchasing phone from us")
}

//Qno:3

function myFunction1() {
    document.getElementById("myTable").deleteRow(1);
  }

  function myFunction2() {
    document.getElementById("myTable").deleteRow(2);
  }

  function myFunction3() {
    document.getElementById("myTable").deleteRow(3);
  }


function myFunction4() {
    document.getElementById("myTable").deleteRow(4);
  }

  function myFunction5() {
    document.getElementById("myTable").deleteRow(5);
  }

  function myFunction6() {
    document.getElementById("myTable").deleteRow(6);
  }

  function myFunction7() {
    document.getElementById("myTable").deleteRow(7);
  }

  function myFunction8() {
    document.getElementById("myTable").deleteRow(8);
  }

  function myFunction9() {
    document.getElementById("myTable").deleteRow(9);
  }

  function myFunction10() {
    document.getElementById("myTable").deleteRow(10);
  }




//Qno:4
function changeimg(id,src)
{
  var image=document.getElementById(id)
  image.src=src
}




//Qno:5

function add(){
  var input=document.getElementById("input")
  input.value=parseInt(input.value)+1
}


function sub(){
  var input=document.getElementById("input")
  input.value=parseInt(input.value)-1
}


