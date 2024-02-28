![Led img](/img/Led.svg)

## 1. Write standard firmata to the device
Uploading Standard Firmata to Arduino
Open Arduino IDE.
`File > Examples > Firmata > StandardFirmata`.

`Tools > Board > your board`
Click Upload button. if you use WSL, you need to follow [this](/docs/Getting%20Started/How%20to%20WSL.md)


## 2. Run the LED

```tsx title="index.tsx"
import { Board, Button, Led, render } from "edison"
import React from "react"

const App: React.FC = () => {
  return (
    <Board>
      <Led pin={13} blink={500} />
    </Board>
  )
}

render(<App />)
```


## 3. execute the program
```bash
$ npx vite-node index.tsx 
```

The LED will blink every 500ms.

You can use `<Led />`

| Props | Type   | Description      | Default |
|-----------|--------|------------------|---------|
| `pin`      | `number`  | Pin number to control current     | `None` |
| `isOn?`      | `boolen`/undefined  | On if LED is true, off if false   | `None` |
| `blink?`      | `number`/undefined  | Set blinking sensation (ms)     | `None` |
