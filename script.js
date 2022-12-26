let img = document.createElement("img");
let qr = document.querySelector(".qr-code");
qr.appendChild(img);


function generateQR() {
    let input = document.getElementById("input");
    if (input.value) {
        input.style.borderColor = "#c7c7c7";
        img.src = `https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=180x180&data=${input.value}`;
    } else {
        input.style.borderColor = "red"; 
        return false;
    }
    input.value="";
}