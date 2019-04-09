function newCalc()
{    
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;      
    let imc =  peso / (altura * altura);

    var element = document.getElementById("new");
    element.classList.add("dark");

    if (imc <= 18.5) {
        document.getElementById("result").innerHTML = "Abaixo do peso ";
    }
    if (imc > 18.5 && imc <= 24.9) {
        document.getElementById("result").innerHTML = "Peso normal ";
    }
    if (imc > 24.9 && imc <= 29.9) {
        document.getElementById("result").innerHTML = "Sobre peso ";
    }
    if (imc > 29.9 && imc <= 34.9) {
        document.getElementById("result").innerHTML = "Obesidade grau 1 ";
    }
    if (imc > 34.9 && imc <= 39.9) {
        document.getElementById("result").innerHTML = "Obesidade grau 2 ";
    }
    if (imc > 39.9) {
        document.getElementById("result").innerHTML = "Obesidade grau 3 ";
    }
}
