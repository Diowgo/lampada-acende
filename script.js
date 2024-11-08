let num = 0b0;

function convertToBinary(number) {
    let digit = 0;
    
    if (number % 2 == 0) {
        digit = 0;
    } else {
        digit = 1;
    }

    if (number <= 1) {
        return digit.toString();
    }

    number = number - (number % 2)

    return convertToBinary(number/2) + digit.toString();
}

function convertBinaryToArray(binary) {
    const array = binary.match(/\d{1}/g);
    return array;
}

function toggleDecrement() {
    if (num == 0) {
        decrement.setAttribute("disabled", "");
    } else {
        decrement.removeAttribute("disabled");
    }
}

function activateDecrement() {
}


function renderChange() {
    toggleDecrement();
    BinaryContainer.innerHTML = ""

    const binary = convertToBinary(num);
    const array = convertBinaryToArray(binary);

    for (const digit of array) {
        const para = document.createElement("p");
        para.innerText = digit;
        BinaryContainer.appendChild(para);
    }

    descritivo.innerText = " é igual a " + num + " em decimal!"

}

const descritivo = document.querySelector(".descritivo");
const BinaryContainer = document.querySelector("div.binaryContainer");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");

increment.addEventListener("click", () => {
    num++;
    renderChange();
})

decrement.addEventListener("click", () => {
    num --;
    renderChange()
})

renderChange();