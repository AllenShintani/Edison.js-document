
## 1. Write standard firmata to the device
Uploading Standard Firmata to Arduino
Open Arduino IDE.
`File > Examples > Firmata > StandardFirmata`.

`Tools > Board > your board`
`Tools > Serial Port > your port`
Click Upload button. if you use WSL, you need to follow [this](/docs/Getting%20Started/How%20to%20WSL.md)

## 2. Run the PhotoInterrupt sensor

```tsx title="index.tsx"
import { Board, Led, PhotoInterrupter, render} from "edison"
import React, {useState} from "react"

const App: React.FC = () => {
  const [isOn, setIsOn] = useState(false)

  return (
    <Board port={'/dev/tty***'}, baudRate={57600}> 
      <PhotoInterrupter
        pin={8}
        triggered={() => {
          setIsOn(true)
        }}
        untriggered={() => {
          setIsOn(false)
        }}
      >
        <Led
          pin={13}
          isOn={isOn}
        />
      </PhotoInterrupter>
    </Board>
  )
}
render(<App />)
```
This program will blink the LED when the photo interrupter sensor is run.



## 3. execute the program
```bash
$ npx vite-node index.tsx 
```

You can use `<PhotoInterrupter >`

| Props | Type   | Description      | Default |
|-----------|--------|-----------------------|---------|
| `pin`      | `number`  | Pin number to control current     | `None` |
| `triggered?`      | `(() => void)`  | Pin number to control current     | `None` |
| `untriggered?`      | `(() => void)`  | Pin number to control current     | `None` |
| `children`      | `React.ReactNode`  | Child components such as outbut     | `None` |


