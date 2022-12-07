function main(e){

e.preventDefault();


setTimeout(function(){
    order1()
},0)
setTimeout(function(){
    order2()
},3000)
setTimeout(function(){
    order3()
},8000)
setTimeout(function(){
    order4()
},10000)
setTimeout(function(){
    order5()
},12000)

}

function order1(){
    alert("Your order is accepted ")
}
function order2(){
    alert("Your order is being Prepared")
}
function order3(){
    alert(" Your order is being packed  ")
}
function order4(){
    alert("Your order is out for delivery")
}
function order5(){
    alert(" Order delivered")
}