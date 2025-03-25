let count = 0;
function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}
function displayCount() {
    document.getElementById("countDisplay").innerHTML = count;
}
function checkCountValue() {
    if(count === 10) {
        alert("Your account gained 10 followers! Congratulations.")
    } else if (count ===20) {
        alert("Your account gained 20 followers! Congratulations.")
    }
}
function reset() {
    count = 0
    document.getElementById("countDisplay").innerHTML = count;
    alert("The followers count has been reset");
}