function expression(char) {
    if (char == 'C') {
        document.getElementById("screen").value = "";

    }
    else {
        if (char == '<') {

            document.getElementById("screen").value += `(`;
        }
        else if (char == '>') {

            document.getElementById("screen").value += `)`;
        }
        else {

            document.getElementById("screen").value += char;
        }
    }
}
function solve() {
    try {

        document.getElementById("screen").value = eval(document.getElementById("screen").value);
    } catch (error) {
        // document.getElementById("screen").value = "";
        alert("Enter a proper Expression");
    }
}

document.getElementById('screen').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        solve();
    }
});
