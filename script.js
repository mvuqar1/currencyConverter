let val1 = "AZN"
let val2 = "USD"

let converterValue;

function fetchCheck() {

    if(val1!==val2){
        try {
            const url = `https://api.exchangerate.host/convert?from=${val1}&to=${val2}`
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    converterValue = data.result;
                    // console.log(converterValue);
                    start()
        
        
                });
            console.log('fdsfsdf')

        } catch (error) {
            alert('error')
        }

    }
    else{
        converterValue=1
    }
}
fetchCheck()

const valutaLeft = document.querySelectorAll(".valuta-left p")
valutaLeft.forEach(box => {
    box.addEventListener('click', (event) => {
        valutaLeft.forEach((el) => {
            el.classList.remove("chech")
        })

        box.classList.add("chech")
        val1 = event.target.innerText;
        // console.log(val1);
        // console.log(typeof(val1));
        fetchCheck()
    });
})
const valutaRight = document.querySelectorAll(".valuta-right p")
valutaRight.forEach(box => {
    box.addEventListener('click', (event) => {
        valutaRight.forEach((el) => {
            el.classList.remove("chech")
        })

        box.classList.add("chech")
        val2 = event.target.innerText;
        console.log(val2);
        fetchCheck()
        start()
    });
})



const inputValue = document.querySelector(".in")
const output = document.querySelector(".output")

inputValue.addEventListener("input", start)

function start() {
    const mebleq = inputValue.value
    if (mebleq !== "") {

        output.textContent = (mebleq * converterValue).toFixed(2)

        console.log('input mebleg: ', mebleq);
        console.log('converterValue: ', converterValue);
    } else if (mebleq != isNaN) {
        output.textContent = "0";
    }
    else {
        // return 0
    }
    smallSpan1.textContent=val1
    smallSpan2.textContent=val2
    smallSpan3.textContent=converterValue.toFixed(2)
    smallSpan4.textContent=val2
    smallSpan5.textContent=(1/converterValue).toFixed(2)
    smallSpan6.textContent=val1

    
}


let smallSpan1=document.querySelector(".beraber-valuta1")
let smallSpan2=document.querySelector(".beraber-valuta2")
let smallSpan3=document.querySelector(".beraber-valuta3")
let smallSpan4=document.querySelector(".beraber-valuta4")
let smallSpan5=document.querySelector(".beraber-valuta5")
let smallSpan6=document.querySelector(".beraber-valuta6")


const navBars = document.querySelectorAll(".center p")
navBars.forEach(box => {
    box.addEventListener('click', (event) => {
        navBars.forEach((el) => {
            el.classList.remove("enter")
        })

        box.classList.add("enter")
        
    });
})

