
function addStory() {
    var word1 = document.getElementById("input1").value;
    var word2 = document.getElementById("input2").value;
    var word3 = document.getElementById("input3").value;
    var word4 = document.getElementById("input4").value;
    var word5 = document.getElementById("input5").value;
    var word6 = document.getElementById("input6").value;
    var word7 = document.getElementById("input7").value;
    var word8 = document.getElementById("input8").value;
    document.getElementById("story").innerHTML = "There once was a " + word1 + " man who loved Sass. He would use his " + word2 + " to " + word3 + " all kinds of " + word4 + " about Sass. When he got " + word5 + ", he decided to " + word6 + " his love of Sass to every " + word7 + " in the world. Those who heard him " + word8 + " him for it.";
}