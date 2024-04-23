
## 1. Write standard firmata to the device
Uploading Standard Firmata to Arduino
Open Arduino IDE.
`File > Examples > Firmata > StandardFirmata`.

`Tools > Board > your board`
`Tools > Serial Port > your port`
Click Upload button. if you use WSL, you need to follow [this](/docs/Getting%20Started/How%20to%20WSL.md)

## 2. Run the PIR Motion sensor

```tsx title="index.tsx"
import { Board, Led, PIRMotion, render} from "edison"
import React, {useState} from "react"

const App: React.FC = () => {
  const [isOn, setIsOn] = useState(false)

  return (
    <Board port={'/dev/ttyUSB0'}>
      <PIRMotion
        pin={8}
        triggered={() => {
          setIsOn(true)
        }}
        untriggered={() => {
          setIsOn(false)
        }}
        delayTime={4000}
      >
        <Led
          pin={13}
          isOn={isOn}
        />
      </PIRMotion>
    </Board>
  )
}
render(<App />)
```
This program will blink the LED when the PIR Motion sensor is run.

:::tip

if you use non-genuine Arduino, you need to set the port manually.
check [this](/docs/API/connectManual.md)

:::

## 3. execute the program
```bash
$ npx vite-node index.tsx 
```

You can use `<PIRMotion >`

| Props | Type   | Description      | Default |
|-----------|--------|-----------------------|---------|
| `pin`      | `number`  | Pin number to control current     | `None` |
| `triggered?`      | `(() => void)`  | Pin number to control current     | `None` |
| `untriggered?`      | `(() => void)`  | Pin number to control current     | `None` |
| `children`      | `React.ReactNode`  | Child components such as outbut     | `None` |


