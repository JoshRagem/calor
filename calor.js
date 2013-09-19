var Color = require('./colors/color'),
text = function(r,g,b,type){
    return Color(r,g,b,type,false)
},
background = function(r,g,b,type){
    return Color(r,g,b,type,true)
}


text.BLACK = Color.raw_color(38,0)
text.RED = Color.raw_color(38,1)
text.GREEN = Color.raw_color(38,2)
text.YELLOW = Color.raw_color(38,3)
text.BLUE = Color.raw_color(38,4)
text.PURPLE = Color.raw_color(38,5)
text.CYAN = Color.raw_color(38,6)
text.WHITE = Color.raw_color(38,7)
text.BOLD = Color.raw_effect(38,1)
text.RESET = Color.raw_effect(38,0)
text.UNDERSCORE = Color.raw_effect(38,4)
text.INVERT = Color.raw_effect(38,7)
text.HIDDEN = Color.raw_effect(38,8)
text.STRIKE = Color.raw_effect(38,9)
text.grey = function(num){
    num += 232
    return Color.raw_color(38,num)
}

background.BLACK = Color.raw_color(48,0)
background.RED = Color.raw_color(48,1)
background.GREEN = Color.raw_color(48,2)
background.YELLOW = Color.raw_color(48,3)
background.BLUE = Color.raw_color(48,4)
background.PURPLE = Color.raw_color(48,5)
background.CYAN = Color.raw_color(48,6)
background.WHITE = Color.raw_color(48,7)
background.RESET = Color.raw_effect(48,0)
background.BOLD = Color.raw_effect(48,1)
background.UNDERSCORE = Color.raw_effect(38,4)
background.INVERT = Color.raw_effect(48,7)
background.HIDDEN = Color.raw_effect(48,8)
background.STRIKE = Color.raw_effect(48,9)
background.grey = function(num){
    num += 232
    return Color.raw_color(48,num)
}

module.exports = {
    text: text,
    background: background
}
