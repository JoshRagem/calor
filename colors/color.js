var color_map = require('./colors'),
num_map = [
    '00',
    '5f',
    '87',
    'af',
    'd7',
    'df',
    'ff'
]

function calculate_color(r,g,b) {
    key = [r,g,b].map(function(v){
        return num_map[v]
    }).join('')
    var val = color_map[key]
    if (!val) {
        throw new Error("invalid color: "+key+" aka: "+[r,g,b].join())
    }
    return val
}

function Color(r,g,b,type,background) {
    var num, self, where, prefix
    num = calculate_color(r,g,b)

    if (typeof type == 'boolean') {
        background = type
        type = null
    }
    type && (type = (type.rawValue || type))
    if (background) {
        where = '48'
    } else {
        where = '38'
    }

    prefix = '\x1B[' + where + ';'
    effect = prefix + type + ';' + num + 'm'
    end_effect = prefix + '0m'
    color = prefix + '5;' + num + 'm'
    end_color = prefix + '0m'

    self = function(str){
        var strs = Array.prototype.slice.call(arguments)

        if (type != null) {
            strs.unshift(effect)
            strs.push(end_effect)
        }

        strs.unshift(color)
        strs.push(end_color)

        return strs.join('')
    }
    self.toString = function(){
        var starter = []

        if (type != null) {
            starter.push(effect)
        }
        starter.push(color)

        return starter.join('')
    }

    return self
}

function Raw(where,type,num){
    var self, prefix, effect, end_effect

    prefix = '\x1B[' + where + ';'
    if (num) {
        effect = prefix + '5;' + num + 'm'
        end_effect = prefix + '0m'
    } else {
        effect = prefix + type + 'm'
        end_effect = prefix + '0m'
    }


    self = function(str){
        var strs = Array.prototype.slice.call(arguments)

        strs.unshift(effect)
        strs.push(end_effect)

        return strs.join('')
    }
    self.toString = function(){
        return effect
    }
    return self
}

Color.raw_color = function(where,num){
    var self = Raw(where,5,num)

    Object.defineProperty(self, 'rawValue', {
        get: function(){return num}
    })
    return self
}

Color.raw_effect = function(where,type){
    var self = Raw(where,type)

    Object.defineProperty(self, 'rawValue', {
        get: function(){return type}
    })
    return self
}

module.exports = Color
