var cellOne = document.getElementById('c1');
var cellTwo = document.getElementById('c2');
var cellThree = document.getElementById('c3');
var cellFour = document.getElementById('c4');
var cellFive = document.getElementById('c5');
var cellSix = document.getElementById('c6');
var cellSeven = document.getElementById('c7');
var cellEight = document.getElementById('c8');
var cellNine = document.getElementById('c9');
var cellTen = document.getElementById('c10');
var cellEleven = document.getElementById('c11');
var cellTwelve = document.getElementById('c12');
var cellThirteen = document.getElementById('c13');
var cellFourteen = document.getElementById('c14');
var cellFifteen = document.getElementById('c15');
var cellSixteen = document.getElementById('c16');
var cellSeventeen = document.getElementById('c17');
var cellEighteen = document.getElementById('c18');
var cellNineteen = document.getElementById('c19');
var cellTwenty = document.getElementById('c20');
var cellTwentyOne = document.getElementById('c21');
var cellTwentyTwo = document.getElementById('c22');
var cellTwentyThree = document.getElementById('c23');
var cellTwentyFour = document.getElementById('c24');
var cellTwentyFive = document.getElementById('c25');
var cellTwentySix = document.getElementById('c26');
var cellTwentySeven = document.getElementById('c27');
var cellTwentyEight = document.getElementById('c28');
var cellTwentyNine = document.getElementById('c29');
var cellThirty = document.getElementById('c30');
var cellThirtyOne = document.getElementById('c31');
var cellThirtyTwo = document.getElementById('c32');
var cellThirtyThree = document.getElementById('c33');
var cellThirtyFour = document.getElementById('c34');
var cellThirtyFive = document.getElementById('c35');
var cellThirtySix = document.getElementById('c36');
var cellThirtySeven = document.getElementById('c37');
var cellThirtyEight = document.getElementById('c38');
var cellThirtyNine = document.getElementById('c39');
var cellForty = document.getElementById('c40');
var cellFortyOne = document.getElementById('c41');
var cellFortyTwo = document.getElementById('c42');
var cellFortyThree = document.getElementById('c43');
var cellFortyFour = document.getElementById('c44');
var cellFortyFive = document.getElementById('c45');
var cellFortySix = document.getElementById('c46');
var cellFortySeven = document.getElementById('c47');
var cellFortyEight = document.getElementById('c48');
var cellFortyNine = document.getElementById('c49');
var cellFifty = document.getElementById('c50');
var cellFiftyOne = document.getElementById('c51');
var cellFiftyTwo = document.getElementById('c52');
var cellFiftyThree = document.getElementById('c53');
var cellFiftyFour = document.getElementById('c54');
var cellFiftyFive = document.getElementById('c55');
var cellFiftySix = document.getElementById('c56');
var cellFiftySeven = document.getElementById('c57');
var cellFiftyEight = document.getElementById('c58');
var cellFiftyNine = document.getElementById('c59');
var cellSixty = document.getElementById('c60');
var cellSixtyOne = document.getElementById('c61');
var cellSixtyTwo = document.getElementById('c62');
var cellSixtyThree = document.getElementById('c63');
var cellSixtyFour = document.getElementById('c64');
var cellSixtyFive = document.getElementById('c65');
var cellSixtySix = document.getElementById('c66');
var cellSixtySeven = document.getElementById('c67');
var cellSixtyEight = document.getElementById('c68');
var cellSixtyNine = document.getElementById('c69');
var cellSeventy = document.getElementById('c70');
var cellSeventyOne = document.getElementById('c71');
var cellSeventyTwo = document.getElementById('c72');
var cellSeventyThree = document.getElementById('c73');
var cellSeventyFour = document.getElementById('c74');
var cellSeventyFive = document.getElementById('c75');
var cellSeventySix = document.getElementById('c76');
var cellSeventySeven = document.getElementById('c77');
var cellSeventyEight = document.getElementById('c78');
var cellSeventyNine = document.getElementById('c79');
var cellEighty = document.getElementById('c80');
var cellEightyOne = document.getElementById('c81');
var cellEightyTwo = document.getElementById('c82');
var cellEightyThree = document.getElementById('c83');
var cellEightyFour = document.getElementById('c84');
var cellEightyFive = document.getElementById('c85');
var cellEightySix = document.getElementById('c86');
var cellEightySeven = document.getElementById('c87');
var cellEightyEight = document.getElementById('c88');
var cellEightyNine = document.getElementById('c89');
var cellNinety = document.getElementById('c90');
var cellNinetyOne = document.getElementById('c91');
var cellNinetyTwo = document.getElementById('c92');
var cellNinetyThree = document.getElementById('c93');
var cellNinetyFour = document.getElementById('c94');
var cellNinetyFive = document.getElementById('c95');
var cellNinetySix = document.getElementById('c96');
var cellNinetySeven = document.getElementById('c97');
var cellNinetyEight = document.getElementById('c98');
var cellNinetyNine = document.getElementById('c99');
var cellOneHundred = document.getElementById('c100');

const Snake = {
    length:1,
    headLocation:'c55',
    bodyLocations: ['c55'],
    tailLocation: 'c55',
    calculateHead:'a function that returns the head',
    calculateTail:'c function that returns the tail',
}

const Food = {
    location: ''
}


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
var pressedButton = ""  
function startApp(){
    //setInterval(addHead, 500);
    setInterval(appContainer, 500);
}


function appContainer(){
    var nextHead = locateNextHead()
    if(isCollision(nextHead)){
        console.log("COLLISION")
    }
    updateHeadAndBody(nextHead)
    updateTail()
    updateSnakeBody()
    //console.log('head'+Snake.headLocation)
    //console.log('tail'+Snake.tailLocation)
    //console.log(Snake.bodyLocations)
    plotSnake()
    removeTail()
}

function locateNextHead(){
    var newHeadLocation = nextHeadLocation(pressedButton, parseInt(Snake.headLocation.slice(1)))
    //console.log(newHeadLocation)
    return newHeadLocation
}

function isCollision(nextHead){
    if(Snake.bodyLocations.includes(nextHead)){
        return true
    }else{
        return false
    }
}


function updateHeadAndBody(nextHead){
    if(nextHead == undefined){
        return
    }
    var currentHead = Snake.headLocation
    Snake.bodyLocations.unshift(currentHead)
    Snake.headLocation = nextHead
}


function updateTail(){
    var body = Snake.bodyLocations
    var snakeTail = body[body.length -1]
    Snake.tailLocation = snakeTail

}


function updateSnakeBody(){
    while(Snake.bodyLocations.length>=Snake.length){
        Snake.bodyLocations.pop()
    }
}

function plotSnake(){
    if(Snake.tailLocation == undefined){
        return
    }

    if(Snake.length == 1){
        var singleCellSnake = document.getElementById(Snake.headLocation)
        singleCellSnake.style.backgroundColor = 'red'
    }
    
    //for(let i=0; i<=Snake.bodyLocations.length;i++){
    //    var body = document.getElementById(Snake.bodyLocations[i])
    //    body.style.backgroundColor = 'red'
        //console.log('SNAKE to plot')
    //    console.log(Snake.bodyLocations)
    //}
}

function removeTail(){
    var tail = document.getElementById(Snake.tailLocation)
    if(tail == null){
        return
    }
    tail.style.backgroundColor = 'aquamarine'
}


//Determines next head location based off the current locations cell number
//returns a string that matches the corespondign Div ID
function nextHeadLocation(direction, currentHeadNumber){
    var currentHead = currentHeadNumber
    var outputNextHead = 0
    if(direction=='LEFT'){
        currentHead -=10
        outputNextHead = currentHead
        return 'c' + outputNextHead.toString()
    }
    if(direction=='UP'){
        currentHead -=1
        outputNextHead = currentHead
        return 'c' + outputNextHead.toString()
    }
    if(direction=='RIGHT'){
        currentHead +=10
        outputNextHead = currentHead
        return 'c' + outputNextHead.toString()
    }
    if(direction=='DOWN'){
        currentHead +=1
        outputNextHead = currentHead
        return 'c' + outputNextHead.toString()
    }
}





document.addEventListener('keydown', handleKeyDown);
 
// Event listener for keydown
function handleKeyDown(event) {
    const key = event.key;
    if(key == 'ArrowLeft'){
        pressedButton="LEFT"
        //console.log(pressedButton)
    }
    if(key == 'ArrowUp'){
        pressedButton="UP"
        //console.log(pressedButton)
    }
    if(key == 'ArrowRight'){
        pressedButton="RIGHT"
        //console.log(pressedButton)
    }
    if(key == 'ArrowDown'){
        pressedButton="DOWN"
        //console.log(pressedButton)
    }

}

// Event listener for keyup
document.addEventListener('keyup', handleKeyUp);
function handleKeyUp(event) {
    const key = event.key;
    pressedButton = "";
}

