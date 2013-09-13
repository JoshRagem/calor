var hascolor = require('has-color'),
Color = require('./colors/color')

module.exports = {
    color: Color,
    grey: function(num){
        num += 232
        return Color.raw_color(38,num)
    },

    RED: Color.raw_color(38,196),
    UNDERLINE: Color.raw_effect(38,4),
    RESET: Color.raw_effect(38,0)
}
