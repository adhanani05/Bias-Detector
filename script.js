var positive = 1;
var negative = -1;
var biasScore = 0;
var score = document.getElementById("score");

var biasTerms = ["bossy", "man up", "girly", "housewife", "thug", "ghetto", "exotic", "model minority", "white savior", "radical", "extremist", 
"socialist", "fascist", "left wing media", "women can't", "men are better at", "stay at home mom", "libtard", "conservative nutjob", "leftist agenda", "right wing extremist", "default settings"]
var unbiasTerms = ["leader", "confident", "strong", "equal opportunity", "parent", "diversity", "equality", "multicultural", "inclusive", "human rights", "moderate", "centrist", 
"bipartisan", "fact based reporting", "independent", "competent", "fact checking", "non partisan", "evidence based", "bipartisan compromise", "political discourse"]

function passText() {
    var textInput = document.getElementById("text-input").value;
    const rectangleElement = document.querySelector('.rectangle');
    const h2Element = document.getElementById('score');
    
    for (var i = 0; i < biasTerms.length; i++) {
        if (textInput.indexOf(biasTerms[i]) !== -1) {
            biasScore += positive;
            var currentHeight = parseInt(rectangleElement.style.height) || 300; 
            var newHeight = currentHeight + 10;
            rectangleElement.style.height = newHeight + 'px';
            h2Element.innerHTML = "Score: " + biasScore;
            console.log(biasScore);
        }
    }
    for (var i = 0; i < unbiasTerms.length; i++) {
        if (textInput.indexOf(unbiasTerms[i]) !== -1) {
            biasScore += negative;
            var currentHeight = parseInt(rectangleElement.style.height) || 300; 
            var newHeight = currentHeight - 10;
            rectangleElement.style.height = newHeight + 'px';
            h2Element.innerHTML = "Score: " + biasScore;
            console.log(biasScore);
        }
    }
}

function reset() {
    var rectangleElement = document.querySelector('.rectangle');
    var h2Element = document.getElementById('score');

    biasScore = 0;

    rectangleElement.style.height = '300px';

    h2Element.innerHTML = "Bias: 0";
}