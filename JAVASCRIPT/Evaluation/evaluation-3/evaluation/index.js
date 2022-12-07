// console.log('i am in ')

// const url=

// fetch (url)
// .then( function(res) {
//     return res.json();

// })
// .then(function (res) {

//     // value(res.data)
//     console.log(res)
// })
// .catch( function (err){
//     console.log(err)
// })

let main=async ()=>{

    let info=document.getElementById("query").value;
    let data=await value(info);
    append(data)

}
let value= async (query)=>{

    let url= `https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`

    let res=await fetch(url)
    let data=await res.json();
    // console.log(data.hotels)
    return  data.hotels
}

let append=(data)=>{

    let container=document.getElementById("container")

    let hotel_card=document.createElement("div");

    hotel_card.setAttribute("id","hotel");
    
    console.log(data)

    data.forEach((el)=>{

        let img=document.createElement("img");

        img.src=el.Images.one;

        let name=document.createElement("h3");
        name.innerText=el.Title;

        let price=document.createElement("p");
        price.innerText=el.Price;

        let Ac=document.createElement("p");
        Ac.innerText=el.Ac;

        let rating=document.createElement("p");
        rating.innerText=el.Rating;

        let btn=document.createElement("button");
        btn.innerText="Book Now"

        hotel_card.append(img,name,price,rating,btn);

        container.append(hotel_card);

    })


}
