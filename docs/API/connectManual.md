## Want to connect a non-genuine Arduino?
You can use non-genuine Arduino. But you need to set the port manually.
If you use WSL, you need to follow [this](/docs/Getting%20Started/How%20to%20WSL.md)

```ts title="index.tsx"

import { Board, Button, Led, render } from "edison"
import React from "react"

const App: React.FC = () => {
  return (
    <Board port={'/dev/tty***'}> // *** is your port
      <Led pin={13} blink={500} />
    </Board>
  )
}

render(<App />)
```

## if you use WSL or Mac
`ls /dev/tty*` and check your port.

## if you use Windows

`Tools` > `Port` > `Com**` and check your port.

```tsx title="index.tsx"
//example
const App: React.FC = () => {
  return (
    <Board port={'COM8'}> // *** is your port
      <Led pin={13} blink={500} />
    </Board>
  )
}

render(<App />)
```