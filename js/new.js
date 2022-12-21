var a="sivaranjani";
var leng=a.length;


var slice=a.slice(8,4)//only positive and negative value
document.write(leng+"<br>");
document.write(slice+"<br>");


var subString=a.substring(8,4);//only positive value
document.write(subString+"<br>");


var substr=a.substr(9,5);//return length
document.write(substr+"<br>");


var substr=a.substr(-2,-9);
document.write(substr+"<br>");


var replace=a.replace("jk","sb")
document.write(replace+"<br>");


var text = "6";
var padded = text.padStart(6,"0");
document.write(padded+"<br>");
  
a = "Good Morning"
z = a.concat(" ","sivaranjani");
document.write(a.length+"<br>" ) //tempalte literal
document.write(typeof a+"<br>")  //tempalte literal
document.write({z}+"<br>")

b="   good morning"
name = b.trim();
document.write(name+"<br>");

var e="this content";
h=e.indexOf('e');
document.write(h+"<br>");

var d="this content";
t=d.indexOf(3);
document.write(t+"<br>");


var d="this content";
t=d.includes('a');
document.write(t+"<br>");

var text = "Mr. Blue has a blue house"
var position = text.search("e");
document.write(position+"<br>")

var text = "The rain in SPAIN stays mainly in the plain";
var result = text.match("Rain"+"<br>");
document.write(result+"<br>")


















