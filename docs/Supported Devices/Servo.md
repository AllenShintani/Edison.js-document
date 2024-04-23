
![Servo img](/img/Servo.svg)

## 1. Write standard firmata to the device
Uploading Standard Firmata to Arduino
Open Arduino IDE.
`File > Examples > Firmata > StandardFirmata`.

`Tools > Board > your board`
`Tools > Serial Port > your port`
Click Upload button. if you use WSL, you need to follow [this](/docs/Getting%20Started/How%20to%20WSL.md)

### 2. Run the Servo

```tsx title="index.tsx"
import React, { useState } from 'react'
import { Board, Button, Servo, render } from 'edison'

const App: React.FC = () => {
  const [angle, setAngle] = useState(0)

  const handlePress = () => {
    setAngle(angle + 10)
  }

  const handleRelease = () => {
    if (angle >= 150) {
      setAngle(0)
      return
    }
    setAngle(angle + 10)
  }
  return (
    <Board>
      <Button
        pin={8}
        triggered={handlePress}
        untriggered={handleRelease}
      >

        <Servo
          pin={10}
          angle={angle}
        />
      </Button>
    </Board>
  )
}
render(<App />)

```

Increases the servo angle by 10 when the button is pressed and released, and returns to 0 when the angle exceeds 150.



## 3. execute the program
```bash
$ npx vite-node index.tsx 
```

You can use `<Servo pin={pin} angle={angle} />`

| Props | Type   | Description      | Default |
|-----------|--------|------------------|---------|
| `pin`      | `number`  | Pin number to control current     | `None` |
| `angle`      | `number`  | Servo direction     | `None` |

:::danger Take care

`angle` is a method that turns the motor to a specified angle regardless of the current angle.
If you want to reset the angle at the beginning, use XX.

:::