
// Based on adaptative-gradient
// https://github.com/brene/adaptive-gradient
// uses Tinycolor
// https://github.com/bgrins/TinyColor

gradient = function(hex) {
  var hsl = tinycolor(hex).toHsl();
  var h = (hsl.h - 25 + 360) % 360;
  var s = Math.min(Math.max(hsl.s - 20, 50), 100);
  var l = Math.min(Math.max(hsl.l + 10, 0), 100);

  var rgb = tinycolor(hex).toRgb();
  var brightness = Math.sqrt(Math.pow(rgb.r, 2) * .299 + Math.pow(rgb.g, 2) * .587 + Math.pow(rgb.b, 2) * .114);

  return {
    start: hex,
    end: tinycolor({ h: h, s: s, l: l }).toHex(),
    fontShouldBeLight: brightness < 128
  };
};
