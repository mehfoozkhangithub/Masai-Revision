async function main(){

let id=document.getElementById('id').value
let title=document.getElementById('title').value
let author=document.getElementById('author').value

let send_this_daata={
    id:id,
    title:title,
    author:author
}


let res=await fetch(`http://localhost:3000/posts`,{
    method:'POST', // in thise we send body
    body:JSON.stringify(send_this_daata),
    headers:{
        'Content-Type':'application/json',
    }
});

let data=await res.json();
console.log(data);

}


async function delete_main(){

    let id=document.getElementById('delete_id').value;

    let res=await fetch(`http://localhost:3000/posts/${id}`,{
        method:'DELETE',// in these we delete body
        headers:{
            'Content-Type':'application/json',
        }
    })

    let data=await res.json();

    console.log(data);



}


const update_main= async ()=>{

let id=document.getElementById('update_id').value;

let new_title=document.getElementById('update_title').value;

let new_author=document.getElementById('update_author').value;



let send_data={

    title:new_title,
    author:new_author
    
    }


    let res=await fetch(`  http://localhost:3000/posts/${id}`,{
        method:'PATCH',//in these we overwrite the detail fill by user 
        body:JSON.stringify(send_data),
        headers:{

            "Content-Type":"application/json"
        }
    })

    let data=await res.json();

    console.log(data);


}


const replace_main=async ()=>{


let id=document.getElementById('replace_id').value;

let replace_title=document.getElementById('replace_title').value;

let replace_author=document.getElementById('replace_author').value;


let send_data={
    id:id,
    title:replace_title,
    author:replace_author
}

let res=await fetch(`http://localhost:3000/posts/${id}`,{

method:'PUT',//in these we change hole thing 
body:JSON.stringify(send_data),
headers:{
    'Content-Type':'application/json'
}

})

let data=await res.json();

console.log(data);


}




