let ls=JSON.parse(localStorage.getItem("info"))||[]; // this is the localstorage  where all the data is here and the vlaue where we put on the index page 

let priceCart=0;

let cart=document.getElementById("cart_total");

let container=document.getElementById("container");

ls.forEach(function(el,index){

    cart.innerHTML=null;

    let total=document.createElement('h2');

    priceCart+=el.price;

    total.innerText=priceCart;
    
    cart.append(total);

        let newDiv=document.createElement("div")
        
        let img=document.createElement("img");
        img.src=el.image;
        img.setAttribute("class","img")

        let  name=document.createElement("p");
        name.innerText=el.name;

        let  price=document.createElement("p");
        price.innerText=el.price;


        let btn=document.createElement("button");
        btn.innerText="Remove"
        btn.addEventListener("click",function(){
            remove(index)
        })


    newDiv.append(img,name,price,btn)

    container.append(newDiv)
})

function remove(index){ // this is the remove function where the data remove 

ls.splice(index,1)

localStorage.setItem("info",JSON.stringify(ls));
window.location.reload();


}