const input = document.querySelector("input");
const qrcode = document.querySelector("#qrcode");

// document.addEventListener("click", (e)=>{
//     if(input != ""){
//         genQRCode();
//     }
// })


function genQRCode(){
    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    console.log("Teste")
}