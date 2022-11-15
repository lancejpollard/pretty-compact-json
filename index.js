
module.exports = function prettify(obj, indent = 0) {
  return makePrettyArray(obj, indent).join('')
}

function makePrettyArray(obj, indent = 0, nestedObject = false) {
  const str = []

  if (Array.isArray(obj)) {
    const arr = []
    let isSimple = true
    obj.forEach(val => {
      const item = makePrettyArray(val, indent + 2, true)
      if (item.length > 1) {
        isSimple = false
      }
      arr.push(item.join(''))
    })

    if (isSimple) {
      if (arr.length) {
        str.push(`[ ${arr.join(', ')} ]`)
      } else {
        str.push(`[]`)
      }
    } else {
      str.push(`[`)
      let initialIndent = indent
      arr.forEach((item, i) => {
        if (i === 0) {
          initialIndent += 5
          str.push(` ${item}`)
        } else {
          str.push(`\n${makeIndent((nestedObject ? initialIndent : indent) + 2)}${item}`)
        }
        if (i < arr.length - 1) {
          str.push(',')
        }
      })
      str.push(` ]`)
    }
  } else if (obj != null) {
    if (typeof obj === 'object') {
      str.push(`{`)
      const keys = Object.keys(obj)
      let initialIndent = indent
      keys.forEach((key, i) => {
        if (i === 0) {
          const initialKey = ` "${key}": `
          initialIndent += 5
          str.push(initialKey)
        } else {
          str.push(`\n${makeIndent((nestedObject ? initialIndent : indent) + 2)}"${key}": `)
        }
        str.push(makePrettyArray(obj[key], (nestedObject ? initialIndent : indent) + 2, true).join(''))
        if (i < keys.length - 1) {
          str.push(`,`)
        }
      })
      if (keys.length) {
        str.push(` }`)
      } else {
        str.push(`}`)
      }
    } else if (typeof obj === 'boolean') {
      str.push(`${obj}`)
    } else if (typeof obj === 'string') {
      str.push(`"${obj.replace(/"/g, '\\"')}"`)
    } else if (typeof obj.toJSON === 'function') {
      str.push(`${obj.toJSON()}`)
    } else {
      str.push(`${obj.toString()}`)
    }
  } else if (obj === null) {
    str.push(`null`)
  }

  return str
}

function makeIndent(i) {
  return (new Array(i + 1)).join(' ')
}
