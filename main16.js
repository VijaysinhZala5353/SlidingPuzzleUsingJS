image_src = ["images/number1.png", "images/number2.png", "images/number3.png", "images/number4.png",
            "images/number5.png", "images/number6.png", "images/number7.png", "images/number8.png", 
              "images/number9.png", "images/number10.png", "images/number11.png", "images/number12.png",
            "images/number13.png", "images/number14.png", "images/number15.png", "images/empty.png"]
var flip1;
var flip2;
var randomImages = []
var matchFlip = false;
var image1;
var image2;
var startTime;
var gameStatus = false
var emptyImageSrc = "images/empty.png"

async function delay(time)
{
    return new Promise(resolve => setTimeout(resolve, time));
}

function updateTimer() {
    var currentTime = new Date();
    var timeDifference = currentTime - startTime;
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = minutes + 'm ' + seconds + 's';
}

function endGame() {
    endTime = new Date();
    var timeDifference = endTime - startTime;
    var timeTaken = Math.floor(timeDifference / 1000);
    thisMatchScore = timeTaken
    console.log(thisMatchScore)
    clearInterval(timer);
    startTime = new Date();
    updateTimer()
    gameStatus = false
    document.getElementById("image1").src = "images/bg.png";
    document.getElementById("image2").src = "images/bg.png";
    document.getElementById("image3").src = "images/bg.png";
    document.getElementById("image4").src = "images/bg.png";
    document.getElementById("image5").src = "images/bg.png";
    document.getElementById("image6").src = "images/bg.png";
    document.getElementById("image7").src = "images/bg.png";
    document.getElementById("image8").src = "images/bg.png";
    document.getElementById("image9").src = "images/bg.png";
    document.getElementById("image10").src = "images/bg.png";
    document.getElementById("image11").src = "images/bg.png";
    document.getElementById("image12").src = "images/bg.png";
    document.getElementById("image13").src = "images/bg.png";
    document.getElementById("image14").src = "images/bg.png";
    document.getElementById("image15").src = "images/bg.png";
    document.getElementById("image16").src = "images/bg.png";
}

function setRandomImages()
{
    gameStatus = true
    startTime = new Date();
    for(var i = 0; randomImages.length != 16; i++)
    {
        var randomNumber = Math.floor(Math.random() * image_src.length)
        if(!randomImages.includes(image_src[randomNumber]))
        {
            randomImages.push(image_src[randomNumber])
        }
        console.log(randomImages[i])
        setInterval(function() {
            updateTimer();
        }, 1000);
    }
    
    printImages()
}

function printImages()
{
    document.getElementById("image1").src = randomImages[0]
    document.getElementById("image2").src = randomImages[1]
    document.getElementById("image3").src = randomImages[2]
    document.getElementById("image4").src = randomImages[3]
    document.getElementById("image5").src = randomImages[4]
    document.getElementById("image6").src = randomImages[5]
    document.getElementById("image7").src = randomImages[6]
    document.getElementById("image8").src = randomImages[7]
    document.getElementById("image9").src = randomImages[8]
    document.getElementById("image10").src = randomImages[9]
    document.getElementById("image11").src = randomImages[10]
    document.getElementById("image12").src = randomImages[11]
    document.getElementById("image13").src = randomImages[12]
    document.getElementById("image14").src = randomImages[13]
    document.getElementById("image15").src = randomImages[14]
    document.getElementById("image16").src = randomImages[15]
}


function swapImage(imageId) {
    if(gameStatus)
    {
        indexOfClick = imageId.replace(/\D/g,'');
        // imageOfClick = document.getElementById(imageId);
        // imageOfClick.src = String(randomImages[indexOfClick-1]);
        // console.log(imageOfClick.src)
        var emptyIndex = randomImages.indexOf(emptyImageSrc)
        checkSwape(indexOfClick-1, emptyIndex)
        checkWinning()
    }
}

async function checkSwape(indexOfClick, emptyIndex)
{
    try
    {
        if(emptyIndex-4 == indexOfClick || emptyIndex+4 == indexOfClick || emptyIndex-1 == indexOfClick || emptyIndex+1 == indexOfClick)
        {
            randomImages[emptyIndex] = randomImages[indexOfClick]
            randomImages[indexOfClick] = emptyImageSrc
            printImages()
        }
    }
    catch
    {}
}

function checkWinning()
{
    if(image_src == randomImages)
    {
        document.getElementById("score").innerHTML = thisMatchScore   
        if(Number(document.getElementById("highScore5").innerHTML) > thisMatchScore)
        {
            document.getElementById("highScore5").innerHTML = thisMatchScore
        }
        else if(Number(document.getElementById("highScore4").innerHTML) > thisMatchScore)
        {
            document.getElementById("highScore4").innerHTML = thisMatchScore
        }
        else if(Number(document.getElementById("highScore3").innerHTML) > thisMatchScore)
        {
            document.getElementById("highScore3").innerHTML = thisMatchScore
        }
        else if(Number(document.getElementById("highScore2").innerHTML) > thisMatchScore)
        {
            document.getElementById("highScore2").innerHTML = thisMatchScore
        }
        else if(Number(document.getElementById("highScore1").innerHTML) > thisMatchScore)
        {
            document.getElementById("highScore1").innerHTML = thisMatchScore
        }
        else if(Number(document.getElementById("highScore1").innerHTML) == 0)
        {
            document.getElementById("highScore1").innerHTML = thisMatchScore
        }
        else if(Number(document.getElementById("highScore2").innerHTML) == 0)
        {
            document.getElementById("highScore2").innerHTML = thisMatchScore
        }
        else if(Number(document.getElementById("highScore3").innerHTML) == 0)
        {
            document.getElementById("highScore3").innerHTML = thisMatchScore
        }
        else if(Number(document.getElementById("highScore4").innerHTML) == 0)
        {
            document.getElementById("highScore4").innerHTML = thisMatchScore
        }
        else if(Number(document.getElementById("highScore5").innerHTML) == 0)
        {
            document.getElementById("highScore5").innerHTML = thisMatchScore
        }
    }
}