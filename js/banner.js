function animateCanvas(cj, canvas, options) {

  var speed = 72;
  var context = canvas.getContext("2d");




  function handleLoadGradient(evt) {


    timeOfDayGradient.regX = timeOfDayGradient.image.width / 2;

  }

  function handleLoadSunMoonStars() {
    sunMoonStars.regY = sunMoonStars.image.height / 2;
    sunMoonStars.regX = sunMoonStars.image.width / 2;
  }


  var stage = options.stage;



  var skyline = new createjs.Bitmap('/js/img/okc_skyline.png');
  skyline.x = (canvas.width * 0.5) - 450;
  skyline.y = 0;

  var scale = 2
  var gradientHeight = 1980 * scale;
  var start = -gradientHeight + 325,
    end = 0;

  var gradientImage = new Image();
  gradientImage.src = '/js/img/TimeOfDayGradient.jpg';
  gradientImage.onload = handleLoadGradient;
  var timeOfDayGradient = new createjs.Bitmap(gradientImage).set({
    x: canvas.width * 0.5,
    y: start
  });

  timeOfDayGradient.scaleX = timeOfDayGradient.scaleY = scale
  stage.addChild(timeOfDayGradient);

  cj.Tween.get(timeOfDayGradient, {
    loop: true
  }).to({
    y: end
  }, (speed * 0.5) * 1000).to({
    y: start

  }, (speed * 0.5) * 1000)


  var image = new Image();
  image.src = '/js/img/sun_moon_stars.png';
  image.onload = handleLoadSunMoonStars;
  var sunMoonStars = new createjs.Bitmap(image).set({
    x: canvas.width * 0.5,
    y: 325
  });

  sunMoonStars.scaleX = sunMoonStars.scaleY = 0.4

  stage.addChild(sunMoonStars);

  cj.Tween.get(sunMoonStars, {
    loop: true
  })
    .to({
      rotation: 360
    }, speed * 1000)


  stage.addChild(skyline);

  
  //var btn = new Button('suckit');
  
  
  //stage.addChild(btn);
  
  function tick() {
    stage.update();
  }


  cj.Ticker.addEventListener('tick', tick);
  createjs.Ticker.setFPS(15);
}



(function (cj) {


  var canvas = document.getElementById('banner-whizbang');

  var banner = document.getElementById('banner');
  var context = canvas.getContext('2d');



  var options = {};

  var stage = new cj.Stage(canvas);

  options.stage = stage;


  options.cloudGrid = (function () {
    var w = 30,
      h = 9,
      row = [];
    for (var i = 0; i < w; i++) {
      var col = [];
      for (var k = 0; k < h; k++) {
        col.push(~~(Math.random() * 2))
      }
      row.push(col);
    }
    return row;
  })();


  function resizeCanvas() {
    canvas.width = $(banner).width();
    canvas.height = $(banner).height();
    drawStuff();
  }

  function drawStuff() {
    animateCanvas(cj, canvas, options);
  }

  resizeCanvas();

  window.addEventListener('resize', resizeCanvas, false);

})(createjs);