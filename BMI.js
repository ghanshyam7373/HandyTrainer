// BMI js
const calculateBMI = (weight, height) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '12fd4790e1mshdd9e9bed5f94427p130f9djsn259398c99e21',
            'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
        }
    };

    fetch(`https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=` + weight + `&height=` + height, options)
        .then(response => response.json())
        .then(response => {
            document.getElementById('BMIResult').innerHTML = `Your BMI: ` + response.bmi.toFixed(1);
        })
        .catch(err => console.error(err));
}
var btnBMIid = document.getElementById('btnBMIid');
if (btnBMIid) {
    btnBMIid.addEventListener('click', () => {
        let w = document.getElementById('weight').value;
        let h = document.getElementById('height').value;
        calculateBMI(w, h);
    })
}
