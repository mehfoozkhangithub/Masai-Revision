

function products() {

    let dataArr=JSON.parse(localStorage.getItem('data'))||[];

    let products = document.querySelector("#products_data");

    dataArr.forEach(function(elem,index){

        let div=document.createElement("div");

        let image=document.createElement("img");
        image.src=elem.image;

        let bname=document.createElement("h1");
        bname.innerText=elem.brand;

        let pname=document.createElement("p");
        pname.innerText=elem.name;
        
        let price=document.createElement("p");
        price.innerText=elem.price;

        let btn=document.querySelector("button")

        btn.innerText="Remove"

         btn.addEventListener("click",function(){
            remove(index);
        });

        div.append(image,bname,pname,price,btn);

        products.append(div);

    });


    function remove(index) {

         dataArr=JSON.parse(localStorage.getItem('data'))||[]. event.parentNode.remove();

      
}

}
products();