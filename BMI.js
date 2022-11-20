// BMI js
const calculateBMI = (weight, height) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': config.MY_API_TOKEN,
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
