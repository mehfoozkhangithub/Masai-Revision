# How JavaScript  Work 

## What is JavaScript ?
`Answer👇`  
 ## JavaScript (js) is a light-weight object-oriented programming language which is used by several websites for scripting the webpages. It is an interpreted, full-fledged programming language that enables dynamic interactivity on websites when applied to an HTML document. It was introduced in the year 1995 for adding programs to the webpages in the Netscape Navigator browser. Since then, it has been adopted by all other graphical web browsers. With JavaScript, users can build modern web applications to interact directly without reloading the page every time. The traditional website uses js to provide several forms of interactivity and simplicity. In addition to web browsers, databases such as CouchDB and MongoDB uses JavaScript as their scripting and query language.

<hr>

# what is the Features of JavaScript ?

  `Answer👇`
  ## 1.It is a case-sensitive language.JavaScript is supportable in several operating systems including, Windows, macOS, etc.

  ## 2.It provides good control to the users over the web browsers.

  ## 3.It provides good control to the users over the web browsers.

<hr>

# What is Application of JavaScript ?
 
 `Answer👇`

 ## JavaScript is used to create interactive websites. It is mainly used for:

## Client-side validation,
## Dynamic drop-down menus,
## Displaying date and time,
## Displaying pop-up windows and dialog boxes (like an alert dialog box, confirm dialog box and prompt dialog box).

<hr>

# Class Notes 

## What is data types ?
 - there are 5 primitive data type in js and 3 non primitive

 ### what is primitive ?
  - Being the first or earliest of the kind or in existence 
  - In CS primitive data types is a basic type provide by a programming language a basic building block.
  - They hold the actual value 
  - By Value 
  - Immutable(value cannot be changed in memory )

  <div align="center"  >
  <table border=2 >
  <tr>
  <td>Data Type</td>
  <td>Information</td>
  </tr>
  <tr>
  <td>String</td>
  <td>The string is for a sequence of characters.</td>
  </tr>
  <tr>
  <td>Boolean</td>
  <td>It has two value i.e True or False.</td>
  </tr>
  <tr>
  <td>Number</td>
  <td>Number represent numerical value.</td>
  </tr>
  <tr>
  <td>Undefined</td>
  <td>Undefined value</td>
  </tr>
  <tr>
  <td>Null</td>
  <td>Null value</td>
  </tr>
  <tr>
  <td>Symbols</td>
  <td>Symbols e.g(#,@,$,%,& ...)</td>
  </tr>
  </table>
  </div>


## What is non primitive data type ?
  - They hold the location value
  - By References
  - Mutable (value can be changed in memory)
  <div align="center">
  <table border=2>
  <tr>
  <td>Data Type</td>
  <td>Information</td>
  </tr>
  <tr>
  <td>Array</td>
  <td>Sorting multiple value as a long list </td>
  </tr>
  <tr>
  <td>Object</td>
  <td>Collection of key value pair</td>
  </tr>
  <tr>
  <td>Function</td>
  <td>Execute block of code </td>
  </tr>

  </table>
</div>

![](https://buggyprogrammer.com/wp-content/uploads/elementor/thumbs/Javascript-cheatsheet-ilovecoding-p7cccwz9fnx0gta2y3pxuc9vvrvsdjhtvbb5sd49ls.png)



## differences between `undefined` Vs `null`
```js
let name1 ;

let val=null;

console.log(name1)

console.log(val)
```

## By Value `primitive`

```js
var a=10;

var b=a;

b=20;

console.log(a);
```

##  By Reference `non-primitive`

```js
var admin ={name:"mehfooz"};


var user = admin ;

user.name ="mehfooz khan";

console.log(admin)
```

## `immutable`


```js
var a ="masai";

a[0]="a";

console.log(a)
```

## `Mutable`

```javascript
var admin =[1,2,3];

admin[0]="masai";

console.log(admin);
```

## JavaScript `Engines`


<div align="center">
<table border=2>
<tr>
<td>Browser</td>
<td>Engines</td>
</tr>
<tr>
<td>InternetExplorer</td>
<td>Chakra</td>
</tr>
<tr>
<td>FireFox</td>
<td>SpiderMonkey</td>
</tr>
<tr>
<td>Chrome</td>
<td>v8</td>
</tr>
</table>
</div>


# what is hoisting ?

  `Answer👇`

 -  Hoisting help keep the attendance sheet of javascript Program.
 - Hoisting means To Raise something 
 - It means js already know about what variable declared lik what memory, data type ,variable are present there the js understand. 

```js
let name="mehfooz"; // Global variable

const fun=()=>{
    let a=10; // local variables
    console.log(name)
}
fun()
console.log(a)
```


