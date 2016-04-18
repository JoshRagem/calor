This library is not maintained. It seems also that the color reference I used was not correct and this led to bugs.

calor
=====

a simple terminal text colorizer. simple simple simple. simple.

##Usage

```
var calor = require('calor'),
red = calor.text(6,0,0),
gry = calor.text.grey(16)

console.log(calor.text.RED('hello'))
console.log(red('redde'))
console.log(calor.background.BLUE('bllluuu'))
console.log(gry("I'm grey!"))
```


Calor tries to provide an 8-bit RGB color constructor. Since the terminal color standard is kinda wierd, the colors that are possible are not quite logical and don't fit in an 8-bit representation.

If 0-7 maps to 00, 5f, 87, af, d7, df, ff respectively, the possible colors are:

![xterm color chart](http://upload.wikimedia.org/wikipedia/en/1/15/Xterm_256color_chart.svg)

See? It's weird.

###bugs and contrubution
I probably missed a color somehow or I may not be reseting the string effect appropriatly in all cases. If you find a bug, please submit a [ticket](https://github.com/pagodajosh/calor/issues/new)
