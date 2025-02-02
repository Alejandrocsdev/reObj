export function reObj(data) {
  const objKeys = data => {
    const result = []
    let current = data

    while (typeof current === 'object') {
      let keys = Object.keys(current)
      let key = keys[0]
      let value = current[key]
      result.push(key)

      if (keys.length !== 1) break

      if (typeof value !== 'object') {
        result.push(value)
        break
      }

      current = value
    }

    return result
  }
  let result = {}
  const keys = objKeys(data)
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]
    if (i === keys.length - 2) {
      result[key] = keys[keys.length - 1]
    } else {
      result[key] = {}
    }
    result = result[key]
  }
}

const inputValue = {
  hired: {
    be: {
      to: {
        deserve: 'I'
      }
    }
  }
}

const outputValue = {
  I: {
    deserve: {
      to: {
        be: 'hired'
      }
    }
  }
}

console.log(reObj(inputValue))
