let getData=async (pageNumber)=>{
//!here we have to give the number where user want to see 

    try {
        let res=await fetch(`http://localhost:3000/posts?_page=${pageNumber}&_limit=2`);

let data=await res.json()

console.log(data);

append(data)// this is goin line no. 23
// getButton(data.length,3);

    } catch (error) {
        console.log(error);
    }

}
// getData();

let container=document.getElementById("container");

const append=(data)=>{
container.innerHTML=null;
data.forEach(({title})=>{
    let p=document.createElement("p");

    p.innerText=title

    container.append(p)
})

}



const getButton=(result,per_page)=>{
    
    let Button_div=document.getElementById('buttons');

   // let result=11;// total fetch iteam's
   // let per_page=3;//this is for we have to show pagination (pagination is butoon's to go next page see in end of any web site)

    let button_cal=Math.ceil(result/per_page);

    for(let i=1;i<=button_cal;i++)
    {
        let button=document.createElement("button");
        button.innerText=i

        button.onclick=function(){ //?  this for clink function on web page 

            getData(i)//this is going line no.1
        }


        Button_div.append(button)
    }


}
getButton(4,3);//this is going line no . 37


// const pagination=(i)=>{ //? function invoke here on line no.51

//     console.log("page no",i)



// }