const path = require('path')
const chalk = require('chalk')
const cheerio = require('cheerio')

exports.resolve = function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

/**
 * 增加 hljs 的 classname
 */
exports.wrapCustomClass = function (render) {
    return function (...args) {
        return render(...args)
            .replace('<code class="', '<code class="hljs ')
            .replace('<code>', '<code class="hljs">')
    }
}
/**
 * Format HTML string
 */
exports.convertHtml = function (str) {
    return str.replace(/(&#x)(\w{4});/gi, ($0) => String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16)))
}

exports.strip = function (str, tags) {
    let $ = cheerio.load(str, { decodeEntities: false })

    if (!tags || tags.length === 0) {
        return str
    }

    tags = !Array.isArray(tags) ? [tags] : tags
    let len = tags.length

    while (len--) {
        $(tags[len]).remove()
    }

    return $.html() // cheerio 转换后会将代码放入<head>中
}

exports.resultLog = function (type = 'success', msg = '') {
    const color = type === 'success' ? 'greenBright' : 'redBright'
    const bgColor = type === 'success' ? 'bgGreenBright' : 'bgRedBright'
    const output = msg.split('**').reduce((value, part, index) => {
        if (index % 2 === 1) {
            return value += chalk[color].bold.underline(part)
        } else {
            return value += chalk[color](part)
        }
    }, '')
    console.log(
        '\n' +
        chalk[bgColor].bold(` ${type.toUpperCase()} `) +
        ' ' +
        output +
        '\n'
    )
}
