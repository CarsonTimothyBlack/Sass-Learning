//change background for Sass story
var cardBg = document.getElementById("card").style;
var themeBg = document.getElementById("theme").style;

document.getElementById("sassBtn").addEventListener("click", function() {
    themeBg.background = "rgb(204, 95, 149)";
    cardBg.backgroundImage = "url(images/sass.png)";
    cardBg.backgroundRepeat = "no-repeat";
    cardBg.backgroundSize = "cover";
});

//change background for Action story
document.getElementById("actionBtn").addEventListener("click", function() {
    themeBg.background = "lightyellow";
    cardBg.backgroundImage = "url(images/action.jpg)";
});

//change background for Love story
document.getElementById("loveBtn").addEventListener("click", function() {
    themeBg.background = "rgb(206, 67, 67)";
    cardBg.backgroundImage = "url(images/love.jpg)";
});

//change background for Crime story
document.getElementById("crimeBtn").addEventListener("click", function() {
    themeBg.background = "lightgray";
    cardBg.backgroundImage = "url(images/crime.jpg)";
});


function addStory() {
    var word1 = document.getElementById("input1").value;
    var word2 = document.getElementById("input2").value;
    var word3 = document.getElementById("input3").value;
    var word4 = document.getElementById("input4").value;
    var word5 = document.getElementById("input5").value;
    var word6 = document.getElementById("input6").value;
    var word7 = document.getElementById("input7").value;
    var word8 = document.getElementById("input8").value;
    if(themeBg.background == "rgb(204, 95, 149)") {
        document.getElementById("story").innerHTML = "There once was a " + word1 + " man who loved Sass. He would use his " + word2 + " to " + word3 + " all kinds of " + word4 + " about Sass. When he got " + word5 + ", he decided to " + word6 + " his love of Sass to every " + word7 + " in the world. Those who heard him " + word8 + " him for it.";
    } else if(themeBg.background == "lightyellow") {
        document.getElementById("story").innerHTML = "In a world with " + word1 + " people, a " + word2 + " is needed to " + word3 + " evil using any " + word4 + " necessary. A hero arose who was " + word5 + " than the bad guys. With his fist, he would " + word6 + " evil, and with his " + word7 + " he would crush it. And the bad guys all " + word8 + ".";
    } else if(themeBg.background == "rgb(206, 67, 67)") {
        document.getElementById("story").innerHTML = "There was a " + word1 + " man who used every " + word2 + " to find love. He would " + word3 + ", sing, and play on his " + word4 + " in order to find a " + word5 + " and kinder lady. One day, a woman passed by and wanted to " + word6 + " him, while he sang. She pulled out a rose and a " + word7 + " and " + word8 + " him right on the lips!";
    } else if(themeBg.background == "lightgray") {
        document.getElementById("story").innerHTML = "In London, a " + word1 + " policeman found a dead body. He grabbed his " + word2 + " and proceeded to " + word3 + " so as to alert others. A private " + word4 + " arrived, who was " + word5 + " than most policemen. He could " + word6 + " any mystery with his superior " + word7 + ". He quickly " + word8 + " the case and went home early.";
    }
}