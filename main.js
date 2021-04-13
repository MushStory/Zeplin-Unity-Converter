function xCal() {
    var zeplinX = document.getElementById("zeplinX");
    var UnityX = document.getElementById("UnityX");

    var x = document.getElementById("x");
    x.innerText = Number.parseFloat(zeplinX.value) / Number.parseFloat(UnityX.value);
}

function yCal() {
    var zeplinY = document.getElementById("zeplinY");
    var UnityY = document.getElementById("UnityY");

    var y = document.getElementById("y");
    y.innerText = Number.parseFloat(zeplinY.value) / Number.parseFloat(UnityY.value);
}


function xCalResult() {
    var x = document.getElementById("x");
    var inputZeplinX = document.getElementById("inputZeplinX");
    var inputZeplinX2 = document.getElementById("inputZeplinX2");

    var x_result = document.getElementById("x_result");

    var result1 = Number.parseFloat(inputZeplinX.value) / Number.parseFloat(x.innerText);
    var result2 = Number.parseFloat(inputZeplinX2.value) / Number.parseFloat(x.innerText);
    console.log(Number.parseFloat(result1));
    console.log(Number.parseFloat(result2));
    x_result.innerText = Number.parseFloat(result1) - Number.parseFloat(result2);
}

function yCalResult() {
    var y = document.getElementById("y");
    var inputZeplinY = document.getElementById("inputZeplinY");
    var inputZeplinY2 = document.getElementById("inputZeplinY2");

    var y_result = document.getElementById("y_result");

    var result1 = Number.parseFloat(inputZeplinY.value) / Number.parseFloat(y.innerText);
    var result2 = Number.parseFloat(inputZeplinY2.value) / Number.parseFloat(y.innerText);
    console.log(Number.parseFloat(result1));
    console.log(Number.parseFloat(result2));
    y_result.innerText = Number.parseFloat(result1) - Number.parseFloat(result2);
}

// 486, 9.72 x
// 864, 17.28 y
