// console.log("hello")

const url="https://grocery-masai.herokuapp.com/items";

fetch(url)
.then (function(res){
    return res.json();

})
.then (function(res){

// console.log(res.data)
        value(res.data);
})
.catch(function(err){
    console.log(err)
})

function value(data)
{
    //!let info=JSON.parse(localStorage.getItem("cartItem"))||[];

    let element=document.querySelector("#container"); // this is use catching the element and giveing the data and the program is to work  on it here and the formula for the sume is here 
    
    data.forEach(function(elem){// this is for iteration the forloop and the value come in the HOD formate 

        let newDiv=document.createElement("div");
        
        let img=document.createElement("img");
        img.src=elem.image;
        img.setAttribute("class","img")

        let  name=document.createElement("p")
        name.innerText=elem.name;

        let  price=document.createElement("p");
        price.innerText=elem.price;

        let btn=document.createElement("button");
        btn.innerText="Add to Cart"
        btn.addEventListener("click",function(){
            addTocart(elem)
        })
    

        
        // newDiv=setAttribute("class","container")

       

        newDiv.append(img,name,price,btn);
        
        // console.log(newDiv)
        
        element.append(newDiv)



    })
  

}

let ls=JSON.parse(localStorage.getItem("info"))||[];//this is the function where the localStorage will hit and come here .

function addTocart(elem)
{
    
    let x=document.getElementById('wallet').innerText;

    // console.log(x);
    let y=elem.price;

    if(x>y){
        document.getElementById("wallet").innerText=x-y;
        ls.push(elem);
        localStorage.setItem("info",JSON.stringify(ls))
        alert("your iteam is add succesfull")
    }
    else{
        alert("insufficent balance");
    }
    // console.log(y);


}