function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    event.target.textContent = document.getElementById(data).textContent;
}

function checkAnswer() {
    var height = parseInt(document.getElementById('height').textContent);
    var length = parseInt(document.getElementById('length').textContent);
    var width = parseInt(document.getElementById('width').textContent);
    var targetArea = parseInt(document.getElementById('targetArea').textContent);
    var calculatedArea = 2 * height * (length + width);

    if (calculatedArea === targetArea) {
        document.getElementById('result').textContent = "Correct! Well done.";
    } else {
        document.getElementById('result').textContent = "Incorrect, try again. Calculated area is " + calculatedArea + " cm².";
    }
}