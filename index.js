/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const valueInput = document.getElementById("value-input")
const convertBtn = document.getElementById("convert-btn")
const readoutDiv = document.getElementById("readout-div")
const uiContainerDiv = document.getElementById("uiContainer-div")

const data = [
    {
        title: "Length (Meters/Feet)",
        imperialUnit: "feet",
        metricUnit: "meters",
        imperialSingular: "foot",
        metricSingular: "meter",
        multiplier: 3.281
    },
    {
        title: "Volume (Liters/Gallons)",
        imperialUnit: "gallons",
        metricUnit: "liters",
        imperialSingular: "gallon",
        metricSingular: "liter",
        multiplier: 0.264
    },
    {
        title: "Mass (Kilograms/Pounds)",
        imperialUnit: "pounds",
        metricUnit: "kilograms",
        imperialSingular: "pound",
        metricSingular: "kilogram",
        multiplier: 2.204
    }
]

valueInput.value = 20

convert()

valueInput.addEventListener("focus", function() {
    valueInput.value = ""
})

convertBtn.addEventListener("click", function() {
    convert()
})

valueInput.addEventListener("blur", function() {
    if (valueInput.value === "") {
        valueInput.value = 20
    }
})

function convert() {
    const userInput = valueInput.value

    if (isNaN(userInput)) {
        return
    }

    let readoutDivDOM = ""

    for (let i = 0; i < data.length; i++) {

        const imperialValue = (userInput * data[i].multiplier).toFixed(3)
        const metericValue = (userInput / data[i].multiplier).toFixed(3)

        let metricString = data[i].metricUnit
        let imperialString = data[i].imperialUnit

        if (Number(userInput) === 1) {
            metricString = data[i].metricSingular
            imperialString = data[i].imperialSingular
        }

        readoutDivDOM += `
            <div class="unit-div">
                <h2>${data[i].title}</h2>
                <h3>${userInput} ${metricString} = ${imperialValue} ${data[i].imperialUnit} | ${userInput} ${imperialString} = ${metericValue} ${data[i].metricUnit}</h3>
            </div>
        `
    }
    readoutDiv.innerHTML = readoutDivDOM
}