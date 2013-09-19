var calor = require('../')

console.log(calor.text.RED + "this is a red string" + calor.text.RESET)

var red = calor.text(4,0,0)
console.log(red('this is also a red string'))

var blue_under = calor.text(0,0,4,calor.text.UNDERLINE)
console.log(blue_under('this is also a blue underline string'))

var random = calor.background(2,3,4)
console.log(random('this is some color'))

var grey = calor.text.grey(12)
console.log(grey('this is grey 12'))

//var stream = new calor.stream(process.stdout)
//stream.write(calor.color(0,7,0))
//stream.write('this is a green string')
//stream.write(calor.UNDERLINE)
//stream.write(' that now has underline')
//stream.write(calor.RESET)
//stream.write(' and now is normal')
