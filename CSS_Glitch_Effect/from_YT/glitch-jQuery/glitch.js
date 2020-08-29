$(function () {
  $(".glitch-img").mgGlitch({
    destroy: false,
    glitch: true,
    scale: true,
    blend: true,
    blendModeType: 'hue',
    glitch1TimeMin: 100,
    glitch1TimeMax: 200,
    glitch2TimeMin: 5,
    glitch2TimeMax: 90
  });
});