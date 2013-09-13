var calor = require('../')

console.log(calor.RED + "this is a red string" + calor.RESET)

var red = calor.color(4,0,0)
console.log(red('this is also a red string'))

var blue_under = calor.color(0,0,4,calor.UNDERLINE)
console.log(blue_under('this is also a blue underline string'))

var random = calor.color(2,3,4)
console.log(random('this is some color'))

var grey = calor.grey(12)
console.log(grey('this is grey 12'))

//var stream = new calor.stream(process.stdout)
//stream.write(calor.color(0,7,0))
//stream.write('this is a green string')
//stream.write(calor.UNDERLINE)
//stream.write(' that now has underline')
//stream.write(calor.RESET)
//stream.write(' and now is normal')
