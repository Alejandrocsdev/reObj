// 檢查物件是否為單一路徑的巢狀結構
function isFormatted(obj: object): boolean {
  //確保傳入物件
  if (typeof obj !== 'object' || obj === null) return false
  // 取得 key 值
  let keys = Object.keys(obj)

  if (keys.length !== 1) {
    console.error('Error:', '非單一路徑巢狀物件，無法倒裝。')
    return false
  }

  let key = keys[0]
  let value = obj[key]

  // 若 value 不是物件，表示到底層，回傳 true
  if (typeof value !== 'object' || value === null) return true

  // 遞迴檢查下一層
  return isFormatted(value)
}

// 取得每層物件key值
function objKeys(obj: object): string[] {
  let keys = Object.keys(obj)
  // 取得當前層的 key
  let key = keys[0]
  // 取得 key 對應的值
  let value = obj[key]
  // 回傳 [key, value]
  if (typeof value !== 'object' || value === null) return [key, value]

  // 遞迴處理下一層，將 key 值累加
  return [key, ...objKeys(value)]
}

// 倒裝物件
export function reObj(data: object): object {
  // 若物件不是單一路徑，則回傳空物件
  if (!isFormatted(data)) return {}

  // 取得物件所有 key 值
  const keys = objKeys(data)
  let result = {}
  let current = result

  for (let i = keys.length - 1; i > 0; i--) {
    let key = keys[i]

    if (i === 1) {
      // 最後一個值為 value
      current[key] = keys[i - 1]
    } else {
      current[key] = {}
      // 確保在移動到下一層時物件巢狀結構正確
      current = current[key]
    }
  }

  return result
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

const wrong = {
  I: {
    am: 'Alex',
    an: 'idiot'
  }
}

console.log(reObj(inputValue))
console.log(reObj(wrong))
