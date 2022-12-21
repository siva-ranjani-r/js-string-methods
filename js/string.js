//length return lenght
var fruits = [];
fruits.push("banana", "apple", "peach");
document.write(fruits.length+"<br>");

//concat
var letters = ["a", "b", "c"];
var alphaNumeric = letters.concat(1, [2, 3]);
document.write(alphaNumeric+"<br>");

//copyWithin(target, start, end)
var array1 = ['a', 'b', 'c', 'd', 'e','f','g'];
document.write(array1.copyWithin(0,1,2)+"<br>");

//every returns false
var ages = [32, 33, 16, 40];
function checkAge(age) 
{
  return age > 18;
}
var y=ages.every(checkAge)
document.write(y+"<br>");

//some
ages = [32, 33, 16, 40];
function sm(age) 
{
  return age > 18;
}
var z=ages.some(sm)
document.write(z+"<br>");

//find only return one values
ages = [12, 33, 16, 40];
function fd(age) 
{
  return age > 18;
}
var k=ages.find(fd)
document.write(k+"<br>");

//filter
ages = [32, 33, 16, 40];
function fil(age) 
{
  return age > 18;
}
v=ages.filter(fil)
document.write(v+"<br>");

//map
ages = [32, 33, 16, 40];
function ma(age) 
{
  //return age>18;
  return age*2;
}
v=ages.map(ma);
document.write(v+"<br>");


//flat
var arr1 = [0, 1, 2, [3, 4]];
document.write(arr1.flat()+"<br>");

//pop remove last value
a3=['a', 'b', 'c', 'd', 'e','f','g'];
p=a3.pop();
document.write(p+"<br>");

//push add in last return lenght
s=a3.push('d');
document.write(s+"<br>");


//shift delete in first 
t=a3.shift();
document.write("the shift value:"+a3+"<br>");

//unshift add in first & return in lenght
a3.unshift("e")
document.write(a3+"<br>")

//sort check only first value
var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months+"<br>");

//splice (start, deleteCount, item1) add, update, delete
var sp = ['Jan', 'March', 'April', 'June'];
sp.splice(1, 0, 'Feb');
document.write(sp+"<br>");


//reverse()
var reversed = array1.reverse();
document.write('reversed:', reversed+"<br>")

//indexOf
var  fruits = ["Banana", "Orange", "Apple", "Mango"];
var  index = fruits.indexOf("kiwi");
document.write(index+"<br>");

//reduce add two values
var salary = [9000,5234,14456,6576,9876];
var total = salary.reduce(function(previousVal,currentVal)
{
	return previousVal+currentVal;
	
})
document.write(total+"<br>")


//entries
var months = ['March', 'Jan', 'Feb', 'Dec'];
var d=months.entries();
	for(var i of d)
	{
		document.write(i+"<br>");
	}
	
//sort callback
var zzz = [23,45,78,13,29];
var aaa=zzz.sort((a,b)=>a-b);
document.write(aaa+"<br>");


//join return string
var months = ['March', 'Jan', 'Feb', 'Dec'];
a=months.join("greater than");
 document.write(a+"<br>")
 
//includes it return true if an array contain specified element 
//else return false
var t = ["aee","bee","cee","dee","eee"]; //value,start
var r = t.includes("cee")
var d = t.includes("bee",2)
document.write("includes : "+r+"<br>");
document.write("includes : "+d+"<br>");

//fill
var x = ['sa','re','ga','ma','pa'] //value,start,end
//var y = x.fill("dd")
var z = x.fill("dd",2,4)
//console.log("fill :" +y);
document.write("fill : " +z+"<br>");