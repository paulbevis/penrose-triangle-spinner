(function($) {

  var timeLineMax = new TimelineMax({repeat: -1});
  var cubes = $('.cubes'), cubeA = $('.a'), cubeB = $('.b'), cubeC = $('.c'), cubeD = $('.d'),
    cubeE = $('.e'), cubeF = $('.f'), cubeG = $('.g'), cubeH = $('.h'), cubeI = $('.i');

  timeLineMax
    .set(spinner, {scale: 0.25, autoAlpha: 1})
    .staggerFrom([cubeA, cubeB, cubeC, cubeD, cubeE, cubeF, cubeG, cubeH, cubeI], .4, {fill: 'red', autoAlpha: 0}, 0.4)

})(jQuery);


