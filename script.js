document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("calculator-form");
    const areaResult = document.getElementById("area-result");
    const perimeterResult = document.getElementById("perimeter-result");
    const resetButton = document.getElementById("reset-button");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const base = parseFloat(document.getElementById("base").value);
        const height = parseFloat(document.getElementById("height").value);

        const area = 0.5 * base * height;
        const perimeter = base + height + Math.sqrt(base ** 2 + height ** 2);

        areaResult.textContent = area.toFixed(2);
        perimeterResult.textContent = perimeter.toFixed(2);
    });

    resetButton.addEventListener("click", function () {
        areaResult.textContent = "-";
        perimeterResult.textContent = "-";
        form.reset();
    });
});