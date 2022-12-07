// Add the coffee to local storage with key "coffee"


const url="https://masai-api.herokuapp.com/coffee/menu";

fetch(url)
.then(function(res){
    return res.json();
}).then(function(res){
    coffeData(res.menu.data);
})
.catch(function(err){
    console.log(err);
})

function coffeData(data){
    let element=document.getElementById("menu")

    data.forEach(function(el){


        let newDiv=document.createElement('div');


        let img=document.createElement('img')
        img.src=el.image;

        let price=document.createElement('p')
        price.innerText=el.price;
      

        let btn=document.createElement('button')
        btn.setAttribute("id","add_to_bucket")
        btn.innerText="Add to bucket"
        btn.addEventListener('click',function(){
            moveTobucket(el)
        })
        newDiv.append(img,price,btn)  
        element.append(newDiv)
    })
}


let ls=JSON.parse(localStorage.getItem("coffee"))||[];

let x=document.getElementById("coffee_count")

x.innerText=ls.length;

function  moveTobucket(el){
    console.log(x)

    ls.push(el)

    localStorage.setItem("coffee",JSON.stringify(ls))

    window.location.reload()

}