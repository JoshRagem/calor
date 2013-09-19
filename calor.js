var Color = require('./colors/color'),
text = function(r,g,b,type){
    return Color(r,g,b,type,false)
},
background = function(r,g,b,type){
    return Color(r,g,b,type,true)
}

text.RED = Color.raw_color(38,196)
text.UNDERLINE = Color.raw_effect(38,4)
text.RESET = Color.raw_effect(38,0)
text.grey = function(num){
    num += 232
    return Color.raw_color(38,num)
}

background.RED = Color.raw_color(48,196)
background.UNDERLINE = Color.raw_effect(48,4)
background.RESET = Color.raw_effect(48,0)
background.grey = function(num){
    num += 232
    return Color.raw_color(48,num)
}

module.exports = {
    text: text,
    background: background
}
