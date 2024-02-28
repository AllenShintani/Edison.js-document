
![Buzzer img](/img/Buzzer.svg)

## 1. Write standard firmata to the device
Uploading Standard Firmata to Arduino
Open Arduino IDE.
`File > Examples > Firmata > StandardFirmata`.

`Tools > Board > your board`
`Tools > Serial Port > your port`
Click Upload button. if you use WSL, you need to follow [this](/docs/Getting%20Started/How%20to%20WSL.md)


## 2. Run the Buzzer

```tsx title="index.tsx"
import { Board, Button, Buzzer. render } from "edison"
import React from "react"

const App: React.FC = () => {
  return (
    <Board>
      <Buzzer pin={13} isOn={true} />
    </Board>
  )
}

render(<App />)
```


## 3. execute the program
```bash
$ npx vite-node index.tsx 
```

You can use `<Buzzer pin={pin} isOn={boolen} />`

| Props | Type   | Description      | Default |
|-----------|--------|------------------|---------|
| `pin`      | `number`  | Pin number to control current     | `None` |
| `isOn?`      | `boolen`  | On if LED is true, off if false.    | `None` |


