let video;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(0.5);
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight);
}

function draw() {
  filter(INVERT)
  background(mouseY, mouseX, random(100));
  video.loadPixels();
  let stepSize = int(map(mouseX, 0, width, 3, 15))
  for (var y = 0; y < video.height; y+=stepSize) {
        for (var x = 0; x < video.width; x+=stepSize) {
          var index = (x + y * video.width)*4;
          video.pixels[index] = x;
          video.pixels[index+2] = random(y)
          fill(video.pixels[index], 
               video.pixels[index+1], 
               video.pixels[index+2], 
               video.pixels[index+1]);
         stroke(random(20),mouseX,mouseY)
          let newRect = rect(x,y,stepSize, stepSize, 5);
          
        }
  }
  video.updatePixels();
}
