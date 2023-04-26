偵測當使用者連續輸入一個特定的字串後，就會產生一些相對應的反應。

在這個的例子中，所載入的 JavaScript 檔案是 cornify.js，這是一個由 Cornify.com 提供的 JavaScript 檔案，它可以在網頁中添加彩色、閃爍的獨角獸和彩虹等裝飾圖案，並且可以通過 JavaScript 函數 cornify_add() 在網頁中添加這些圖案。
這樣可以為網頁增添一些趣味性和互動性。
```
<script type="text/javascript" src="https://www.cornify.com/js/cornify.js"></script>
```
## 比對輸入的字串

用keyup事件+ `e.key` 來抓到目前輸入的字
```javascript
    const pressedKey = []
    const secretCode = 'react'
    console.log('secretCode.length',secretCode.length)

    window.addEventListener('keyup', function(e){
      pressedKey.push(e.key)
      console.log(pressedKey)

    })
```
確保 pressedKey 陣列的長度要等於 secretCode 的長度，這樣才能夠正確地判斷是否輸入了 secretCode。
```javascript
pressedKey.splice(-secretCode.length - 1, pressedKey.length - secretCode.length)
```

`splice(-secretCode.length - 1, pressedKey.length - secretCode.length)`的作用是移除陣列前面多餘的元素
- -secretCode.length - 1 : 代表從哪個位置開始刪除元素，因為是負數，代表從陣列的後面開始刪除
- pressedKey.length - secretCode.length : 代表需要刪除幾個元素

這樣就可以確保 pressedKey = secretCode 

判斷如果兩者相等，呼叫cornify_add()函數
使用 ==join 方法==來將 pressedKey 陣列中的所有元素連接成一個字串
```javascript!
  if (pressedKey.join('').includes(secretCode)) {
    cornify_add()
  }
```