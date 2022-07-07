let range = document.querySelector("input#range")

let li = document.querySelectorAll("li.liE")

let n = null

function interatividade() {
    n = range.value

    if (n == 1) {
        li[0].innerHTML = "<p><span>$</span>199.99</p>"

        li[1].innerHTML = "<p><span>$</span>249.99</p>"

        li[2].innerHTML = "<p><span>$</span>399.99</p>"

    } else if (n == 2) {
        li[0].innerHTML = "<p><span>$</span>19.99</p>"

        li[1].innerHTML = "<p><span>$</span>24.99</p>"

        li[2].innerHTML = "<p><span>$</span>39.99</p>"

    }

}

range.addEventListener("touchend", interatividade)

range.addEventListener("click", interatividade)