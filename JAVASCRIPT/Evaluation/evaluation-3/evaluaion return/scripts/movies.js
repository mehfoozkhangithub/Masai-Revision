// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page



let  main=async()=>
{
    let query = document.getElementById("query").value;// user input give the program will catch the info 
    // console.log(query)
    let data= await getData(query);//callback getData function ;
    // console.log(data);
    append(data);  //this is the second function where the data value going  inside ;
}

let getData=async(query)=>
{
    const url=`https://www.omdbapi.com/?apikey=b0ac410c&s=${query}`;

    let res = await fetch(url); // this  is use for fetch the url data ;
    // console.log(res);
    let data= await res.json();// this  for readableStream to actuall data like if {object,array} form data provide API ;
    // console.log(data);
    return data.Search; //this is for return the data where we get line num 33 

}

let  append=(detail)=>  
{
    if(!detail)  // if the detail value where we get after fetch that null or flasy value it's will return it .
    {
        return ;
    }
    let container=document.getElementById("movies");
    container.innerHTML=null;

    detail.forEach((elem)=>{
        let img=document.createElement("img");
        img.src=elem.Poster;

        let p=document.createElement("p");
        p.innerText=elem.Title;

        let btn=document.createElement("button");
        btn.innerText="book"


        let div=document.createElement("div");
        div.setAttribute("class","movie")

        btn.addEventListener("click",function(){
            run(elem)
        })


        div.append(img,p,btn);

        container.append(div);



    })
}

let ls=JSON.parse(localStorage.getItem("movie"))||[];

let run=(el)=>{
 
    ls.push(el);


    localStorage.setItem("movie",JSON.stringify(ls))

    location.href="checkout.html"


}





let  id;

function debounce(func,delay){

    if(id){
        clearTimeout(id);
    }
    id=setTimeout(function()
    {
        func();
    },delay)

}