// On clicking remove button the item should be removed from DOM as well as localstorage.
let ls=JSON.parse(localStorage.getItem("coffee"))||[];

let priceVal=0;
let x=document.getElementById("total_amount");

let y=document.getElementById("bucket")

ls.forEach(function(el,index){

    x.innerHTML=null

    let total=document.createElement('h2')

    priceVal+=el.price;

    total.innerText=priceVal;

    x.append(total)

    let newDiv=document.createElement('div');


        let img=document.createElement('img')
        img.src=el.image;

        let price=document.createElement('p')
        price.innerText=el.price;
      

        let btn=document.createElement('button')
        btn.setAttribute("id","remove_coffee")
        btn.innerText="Remove"
        btn.addEventListener('click',function(){
            remove(index)
        })
     
     
     
        newDiv.append(img,price,btn)  
        
        y.append(newDiv)




})


function remove(index){

ls.splice(index,1)

localStorage.setItem("coffee",JSON.stringify(ls))

window.location.reload();

}