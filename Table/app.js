

let input = document.querySelectorAll("input");
let h1 = document.querySelectorAll("h1");


function Home() {

    let inpval = [input[0].value]
    for (let i = 1; i <= 10; i++) {

        h1[0].innerHTML += `<br />${inpval} x ${i} = ${inpval * i} `

    }
}