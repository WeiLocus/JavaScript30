## shiftKey
參考： [JavaScript MouseEvent shiftKey Property](https://www.geeksforgeeks.org/javascript-mouseevent-shiftkey-property/)

The mouseEvent shiftKey property is used to define whether the shift key is pressed or not. It is a boolean value. When the shift key is pressed then on click of the mouse left button, it returns true and if the shift key is not pressed then it returns false. 

### 加入事件處理handleClick
事件處理分兩塊，設定一個自定義 flag variable  -> inBetween，
第一部分是當點擊checkbox和按住shift時，loop每個checkbox，第一次選擊的checkbox 會是lastChecked，先了解this 會等於自己點擊的checkbox，可以console.log出來看。

只有`if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween
      }`條件成立，才讓false變成true
      
如果遍歷到的項目等於 目前勾選的checkbox 或上一個被勾選的 checkbox，表示從這裡開始需要勾選選項

```javascript
let lastChecked

function handleClick(e) {
  // check if they had the shift key down and check that they are checking it 
  let inBetween = false
  
  if (e.shiftKey && this.checked) {
    //loop over every single checkbox
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween
      }

    })
  }
  lastChecked = this
}
```

接著是判斷只要inBetween 是true，讓checkbox的check都打勾
```javascript
if (e.shiftKey && this.checked) {
    //loop over every single checkbox
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween
      }
      if (inBetween) {
        checkbox.checked = true
        
    })
  }
```

更多筆記資訊放在 [Day10: Hold Shift to Check Multiple Checkboxes](https://hackmd.io/CdPPHjQ9RoufAYcq7n4aaw?both)