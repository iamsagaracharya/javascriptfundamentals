let length;
let width;
function calculateArea() {
    let length = parseFloat(document.getElementById("length").value);
    let width = parseFloat(document.getElementById("width").value);
    if (length && width) {
        const area = length * width;
        document.getElementById("result").innerText = `The area of the rectangle is: ${area}`;
        document.getElementById("clearBtn").style.display = "inline-block";
    } else {
        document.getElementById("result").textContent = "Please enter both values";
    }
}
function clearFields() {
    document.getElementById("length").value = "";
    document.getElementById("width").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("clearBtn").style.display = "none";
}
