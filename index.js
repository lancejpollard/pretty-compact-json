
module.exports = function prettify(obj, indent = 0) {
  return makePrettyArray(obj, indent).join('')
}

function makePrettyArray(obj, indent = 0, nested = 0) {
  const str = []

  if (Array.isArray(obj)) {
    const arr = []
    let isSimple = true
    obj.forEach(val => {
      const item = makePrettyArray(val, 0, nested + 2)
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
      arr.forEach((item, i) => {
        if (i === 0) {
          str.push(` ${item}`)
        } else {
          str.push(`\n${makeIndent(nested + 1)} ${item}`)
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
      let newIndent = 0 // account for {
      keys.forEach((key, i) => {
        const initialKey = ` "${key}": `
        newIndent = nested + 1 + initialKey.length
        if (i === 0) {
          str.push(initialKey)
        } else {
          str.push(`\n${makeIndent((nested ? nested : indent) + 2)}"${key}": `)
        }
        str.push(makePrettyArray(obj[key], (nested ? nested : indent) + 2, newIndent).join(''))
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
