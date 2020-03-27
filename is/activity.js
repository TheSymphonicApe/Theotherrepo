let stuff = document.getElementById("stuff");
let dropDown = document.querySelector("#dropdown-div");
let bigDiv = document.querySelector("#big-div");
let searchResults = document.querySelectorAll("#dropdown-div p");

stuff.addEventListener("click", function() {
    dropDown.classList.remove("hide");
});

bigDiv.addEventListener("click", function() {
    dropDown.classList.add("hide");
});

searchResults.forEach(function(result) {
    result.addEventListener("click", function() {
        alert(this.textContent + " songs are currently not available" + " :(");
    });
});

dropDown.addEventListener("scroll", function() {
    document.getElementById("showScroll").innerHTML = "You have scrolled " + dropDown.scrollTop + "pixels";
    // if (window.pageYOffset = 150) {
    //     alert("You have reached the end of the page!");
    // }
    let sum = dropDown.offsetHeight + dropDown.scrollTop
    let total = dropDown.scrollHeight
    
    if (sum >= total) {
        searchResults.repeat(5);
    }
});






// select "stuff"s content

// if "stuff"s content matches p""s, un"hide"

// if (stuff.textContent === searchResults) {
//     searchResults.forEach(function(result) {
//         result.classList.add("hide");
//     })
// }




// for(let i = 0; i = searchResults.i; i++) {
//     this.addEventListener("click", function() {
//         prompt("Hello!");
//     });
// }


