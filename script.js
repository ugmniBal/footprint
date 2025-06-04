
document.getElementById("calculator").addEventListener("submit", function (e) {
    e.preventDefault();

    const car = parseFloat(document.getElementById("car_km").value) || 0;
    const elec = parseFloat(document.getElementById("electricity").value) || 0;
    const meat = parseFloat(document.getElementById("meat").value) || 0;

    const emissions = (car * emissionFactors.car_km) +
                      (elec * emissionFactors.electricity) +
                      (meat * emissionFactors.meat);

    const resultBox = document.getElementById("result");
    resultBox.textContent = `당신의 하루 탄소 배출량은 약 ${emissions.toFixed(2)} kg CO₂e 입니다.`;

    resultBox.className = "result-box";
    if (emissions < 5) {
        resultBox.classList.add("low");
    } else if (emissions < 10) {
        resultBox.classList.add("medium");
    } else if (emissions < 20) {
        resultBox.classList.add("high");
    } else {
        resultBox.classList.add("very-high");
    }
});
