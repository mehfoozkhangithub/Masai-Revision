// Store the wallet amount to your local storage with key "amount"

let wal_LS=JSON.parse(localStorage.getItem("amount"))||0;



let main=()=>{

   let amount=+document.getElementById("amount").value;
     wal_LS+=amount

    localStorage.setItem("amount",JSON.stringify(wal_LS));
    window.location.reload();
    
}

    let wallet=document.getElementById("wallet");
    wallet.innerText=wal_LS;





