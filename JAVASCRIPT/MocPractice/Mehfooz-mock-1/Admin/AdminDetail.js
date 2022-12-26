


const getData=()=>{

  fetch('https://live-api.onrender.com/data')
  .then(response => response.json())
  .then(data => {
      append(data)
  }
  )
  .catch(err => console.log(err));
}

getData()


function append(data) {

data.forEach(function(el,index){


  let tr=document.createElement("tr")

  let td11=document.createElement("td")
  td11.innerText=el.id

  let td1=document.createElement("td")
  td1.innerText=el.name
  let td2=document.createElement("td")
  td2.innerText=el.author
  let td3=document.createElement("td")
  td3.innerText=el.genere
  let td4=document.createElement("td")
  td4.innerText=el.edition
  let td5=document.createElement("td")
  td5.innerText=el.publish
  let td6=document.createElement("td")
  td6.innerText=el.cost
  let td7=document.createElement("td")
  td7.innerText=el.borrow
  let td8=document.createElement("td")
  td8.innerText=el.image

  let td10=document.createElement("td")
  td10.innerText="Edit"
  td10.setAttribute("class","deleteText")
  td10.addEventListener("click",function(){
    editItem(el.id)
  })


  let td9=document.createElement("td")
  td9.innerText="Delete"
  td9.setAttribute("class","deleteText")
  td9.addEventListener("click",function(){
    deleteItem(el.id)
  })
//   td9.innerText=el.
tr.append(td11,td8,td1,td2,td3,td4,td5,td6,td7,td10,td9)
document.querySelector("tbody").append(tr)


})

}



function editItem(id){
  window.localStorage.setItem("edit",JSON.stringify(id))
  window.location.href="./AdminEdit.html";


}




 async function deleteItem(id){
  let res=await fetch(`https://live-api.onrender.com/data/${id}`,{
    method:'DELETE',// in these we delete body
    headers:{
        'Content-Type':'application/json',
    }
})
window.location.reload();

}

