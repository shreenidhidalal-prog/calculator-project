async function calculate() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const operator = document.getElementById("operator").value;
    const result = document.getElementById("result");

    if (num1 === "" || num2 === "") {
        result.textContent = "Enter both numbers";
        return;
    }

    const response = await fetch("/calculate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            num1: num1,
            num2: num2,
            operator: operator
        })
    });

    const data = await response.json();

    if (!response.ok) {
        result.textContent = data.error;
    } else {
        result.textContent = "Result: " + data.result;
    }
}

function clearCalculator() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").textContent = "Result: --";
}