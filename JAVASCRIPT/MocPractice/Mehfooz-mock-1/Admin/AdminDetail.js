fetch('https://live-api.onrender.com/data')
.then(response => response.json())
.then(data => {
    append(data)
   console.log(data)
}
)
.catch(err => console.error(err));


function append(data) {
    console.log(data)
data.forEach(function(el,index){
  let tr=document.createElement("tr")

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
  td8.innerText=el.borrow
//   let img=document.createElement("img")
//   img.setAttribute("src",el.name)
//   img.append(td8)

  let td10=document.createElement("td")
  td10.innerText="Edit"
  td10.setAttribute("class","deleteText")
  td10.addEventListener("click",function(){
    editItem(el,index)
  })
  let td9=document.createElement("td")
  td9.innerText="Delete"
  td9.setAttribute("class","deleteText")
  td9.addEventListener("click",function(){
    deleteItem(el,index)
  })
//   td9.innerText=el.
tr.append(td8,td1,td2,td3,td4,td5,td6,td7,td10,td9)
document.querySelector("tbody").append(tr)

})

}

function deleteItem(el,index){
    data.splice(index,1)
    window.location.reload()
}

