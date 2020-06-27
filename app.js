function getnum(num) {
    var inputdata = document.getElementById("inputdata");
    inputdata.value += num;
}


function getresult() {
    var result = document.getElementById("result");
    result.value = eval(inputdata.value)
}


function clearresult() {
    var result = document.getElementById("result");
    result.value = "";
    var result = document.getElementById("inputdata");
    inputdata.value = "";
}

function back() {
    var value = document.getElementById("inputdata").value;
    document.getElementById("inputdata").value = value.substr(0, value.length - 1);
}

// function getResult() {
//     var output = document.getElementById("result");
//     output.value = eval(output.value);
// }