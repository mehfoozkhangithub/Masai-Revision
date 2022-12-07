//store the products array in localstorage as "data"


let info=document.querySelector('form').addEventListener('submit',myfunction);



function data (a,b,c,d)
{
    this.brand=a;
    this.name=b;
    this.price=c;
    this.image=d;

}

function myfunction(event){  

    event.preventDefault();

    let dataArr=JSON.parse(localStorage.getItem('data'))||[];

    let brand=document.querySelector('#product_brand').value;

    let name=document.querySelector('#product_name').value;

    let price=document.querySelector('#product_price').value;

    let image=document.querySelector('#product_image').value;


    // console.log(brand, name, price, image);

    let x= new data (brand,name,price,image);

    dataArr.push(x)

    localStorage.setItem('data',JSON.stringify(dataArr));
    console.log(dataArr);

    // window.location.remove()
}

