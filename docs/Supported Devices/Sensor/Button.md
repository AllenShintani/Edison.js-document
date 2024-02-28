
## 1. Write standard firmata to the device
Uploading Standard Firmata to Arduino
Open Arduino IDE.
`File > Examples > Firmata > StandardFirmata`.

`Tools > Board > your board`
`Tools > Serial Port > your port`
Click Upload button. if you use WSL, you need to follow [this](/docs/Getting%20Started/How%20to%20WSL.md)

## 2. Run the Button

```tsx title="index.tsx"
import { Board, Led, Button, render} from "edison"
import React, {useState} from "react"

const App: React.FC = () => {
  const [isOn, setIsOn] = useState(false)

  const handlePress = () => {
    setIsOn(true)
  }

  const handleRelease = () => {
    setIsOn(false)
  }
  return (
    <Board>
      <Button
        pin={8}
        onPress={handlePress}
        onRelease={handleRelease}
      >
        <Led
          pin={13}
          isOn={isOn}
        />
      </Button>
    </Board>
  )
}
render(<App />)
```
This program will blink the LED when the button is run.

:::tip

if you use non-genuine Arduino, you need to set the port manually.
check [this](/docs/API/connectManual.md)

:::

## 3. execute the program
```bash
$ npx vite-node index.tsx 
```

You can use `<Button >`

| Props | Type   | Description      | Default |
|-----------|--------|-----------------------|---------|
| `pin`      | `number`  | Pin number to control current     | `None` |
| `onPress?`      | `(() => void)`  | Function executed when a button is pressed     | `None` |
| `onRelease?`      | `(() => void)`  | Function executed when the button is released    | `None` |
| `debounceTime?`      | `number`  | Delay for a specified period of time    | `None` |
| `children`      | `React.ReactNode`  | Child components such as outbut     | `None` |


