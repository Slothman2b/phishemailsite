var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 0;
  localStorage.setItem("page_view", 0);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  var password = prompt("Enter the password to reset the counter: ");
  if (password == "dancerobotdance") {
    visitCount = 0;
    localStorage.setItem("page_view", 0);
    counterContainer.innerHTML = visitCount;
  } else {
    alert("Wrong Password or Invalid Input");
  }
});
