const minVal = document.querySelector(".minValue");
const maxVal = document.querySelector(".maxValue");
const buttGen = document.querySelector('.buttGen');
let checkedNum = [];

function createCheckArray(min, max) {
    for (let i = min; i <= max; i++) {
        checkedNum[i] = false;
    }
}

minVal.addEventListener("click", function () {
    createCheckArray(Math.ceil(minVal.value), Math.floor(maxVal.value));
})

maxVal.addEventListener("click", function () {
    createCheckArray(Math.ceil(minVal.value), Math.floor(maxVal.value));
})


buttGen.addEventListener("click", function () {
    let isShowed = true;
    for (let i = Math.ceil(minVal.value); i <= Math.floor(maxVal.value); i++)
        if (!checkedNum[i]) {
            isShowed = false;
            break;
        }
    if (!isShowed)
        while (true) {
            const random = getRandomNum(Math.ceil(minVal.value), Math.floor(maxVal.value));
            if (!checkedNum[random]) {
                document.querySelector(".resArea").innerHTML = random;
                checkedNum[random] = true;
                break;
            }
        }
    else {
        buttGen.setAttribute("disabled", "disabled");
        document.querySelector(".resArea").innerHTML = 'Нажмите "Reset" что б начать заново!';
    }
})
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector('.buttRes').onclick = () => {
    document.querySelector(".resArea").innerHTML = 'Введите диапазон чисел!';
    buttGen.removeAttribute("disabled", "disabled");
    createCheckArray(Math.ceil(minVal.value), Math.floor(maxVal.value));

}



