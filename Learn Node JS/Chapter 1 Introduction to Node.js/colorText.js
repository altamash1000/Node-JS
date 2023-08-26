// In terminal run first: npm install colors




var colors = require('colors/safe');

console.log(colors.green('hello'));
console.log(colors.red.underline('i like cake and pies'))
console.log(colors.inverse('inverse the color'));
console.log(colors.rainbow('OMG Rainbows!'));
console.log(colors.trap('Run the trap'));
console.log(colors.bgBrightRed.brightYellow('Ironman'));
console.log(colors.brightYellow('Ironman'));


// For more:

// colors and styles!

// text colors:

// black
// red
// green
// yellow
// blue
// magenta
// cyan
// white
// gray
// grey

// bright text colors:

// brightRed
// brightGreen
// brightYellow
// brightBlue
// brightMagenta
// brightCyan
// brightWhite

// background colors:

// bgBlack
// bgRed
// bgGreen
// bgYellow
// bgBlue
// bgMagenta
// bgCyan
// bgWhite
// bgGray
// bgGrey

// bright background colors:

// bgBrightRed
// bgBrightGreen
// bgBrightYellow
// bgBrightBlue
// bgBrightMagenta
// bgBrightCyan
// bgBrightWhite

// styles:

// reset
// bold
// dim
// italic
// underline
// inverse
// hidden
// strikethrough

// extras:

// rainbow
// zebra
// america
// trap
// random