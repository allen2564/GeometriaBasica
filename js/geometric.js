//Area y perimetro del cuadrado

const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;


function calcularPerimetroCuadrado(s) {
    let lado = document.getElementById('inputSide');
    let value = Number(lado.value);

    const result = `El perimetro de cuadrado es : ${perimetroCuadrado(value)} cm`;
    document.getElementById('resultado').innerText = result;
}

function calcularAreaCuadrado() {
    let lado = document.getElementById('inputSide');
    let value = Number(lado.value);

    const result = `El area de cuadrado es : ${areaCuadrado(value)} cm^2`;
    document.getElementById('resultado').innerText = result;


}
// AREA Y PERIMETRO DEL TRIANGULO

const perimetroTriangulo = (lado, lado2, lado3) => lado + lado2 + lado3;
const areaTriangulo = (b, h) => (b * h) / 2;


function calcularPerimetroTriangulo() {
    let lado = Number((document.getElementById('sideTriangle1')).value);
    let lado2 = Number((document.getElementById('sideTriangle2')).value);
    let lado3 = Number((document.getElementById('sideTriangle3')).value);

    const result = `El perimetro de Triangulo es : ${perimetroTriangulo(lado, lado2, lado3)} cm`;
    document.getElementById('resultado').innerText = result;

}

function calcularAreaTriangulo() {
    let b = Number((document.getElementById('sideTriangle4')).value);
    let h = Number((document.getElementById('sideTriangle5')).value);

    const result = `El area del triangulo es : ${areaTriangulo(b, h)} cm^2`;
    document.getElementById('resultado').innerText = result;
}


// AREA PERIMETRO Y DIAMETRO DEL CIRCULO

const perimetroCirculo = (r) => 2 * Math.PI * r;
const areaCirculo = (r) => Math.PI * (r ** 2);
const diametroCirculo = (r) => 2 * r;

function calcularAreaCirculo() {
    let r = Number((document.getElementById('inputSideCircle')).value);

    const result = `El area del Circulo es : ${parseInt(areaCirculo(r))} cm^2`;

    document.getElementById('resultado').innerText = result;

}
function calcularPerimetroCirculo() {
    let r = Number((document.getElementById('inputSideCircle')).value);

    const result = `El perimetro del circulo es : ${parseInt(perimetroCirculo(r))} cm`;
    document.getElementById('resultado').innerText = result;
}
function calcularDiametroCirculo() {
    let r = Number((document.getElementById('inputSideCircle')).value);

    const result = `El diametro del circulo es : ${parseInt(diametroCirculo(r))} cm`;
    document.getElementById('resultado').innerText = result;
}

function eliminar(id) {
    document.getElementById(id).value = '';
    
}