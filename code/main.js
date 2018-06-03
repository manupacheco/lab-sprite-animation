$(document).ready(function () {

  //Getting the canvas
  var ctx = document.getElementById('canvas').getContext('2d');

  //Creating an Image object for our character 
  var character = new Image();
  //Setting the source to the image file 
  character.src = 'img/character.png';

  //the with and height of our spritesheet
  var spriteWidth = 294;
  var spriteHeight = 80;

  //Rows and cols in the current spritesheet
  var rows = 2;
  var cols = 6;

  //The 0th (first) row is for the left movement
  var trackLeft = 0;
  //1st (second) row for the right movement (counting the index from 0)
  var trackRight = 1;

  //To get the width of a single sprite we divided the width of sprite with the number of cols
  //because all the sprites are of equal width and height 
  var widthFrame = spriteWidth/cols;
  //Same for the height we divided the height with number of rows 
  var heightFrame = spriteHeight/rows;

  //Each row contains 8 frame and at start we will display the first frame (assuming the index from 0)
  var currentFrame = 0;
  //The total frame is 8 
  var frameCount = 6;

  //x and y coordinates to render the sprite 
  var x = 0;
  var y = 0;

  //x and y coordinates of the canvas to get the single frame 
  var srcX = 0;
  var srcY = 0;

  //tracking the movement left and right 
  var left = true;
  var right = false;
  
  function updateFrame(){
    //Clear ctx
    ctx.clearRect(x, y, 120, 100);
    
    //Updating the frame index 
    currentFrame = ++currentFrame % frameCount;

    //Calculating the x coordinate for spritesheet 
    srcX = currentFrame * widthFrame;


    if (left) {
      srcY = trackLeft * heightFrame;
    }
    if (right) {
      srcY = trackRight * heightFrame;
    }

  }

  function draw() {
    //Updating the frame 
    updateFrame();
    //Drawing the image 
    ctx.drawImage(character, srcX, srcY, widthFrame, heightFrame, x, y, 120, 100);
  }

  function moveLeft() {
    left = true;
    right = false;
  }

  function moveRight() {
    left = false;
    right = true;
  }

  $('#btn-left').on('click', function () {
    moveLeft();
  });

  $('#btn-right').on('click', function () {
    moveRight();
  });

  setInterval(draw, 100);
  
});
