---
sidebar_position: 1
---
Get Edison with NPM:

```bash
npm install edison
```

## 1. What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.


## 2. Uploading Standard Firmata to Arduino

- Open Arduino IDE. if you have not install that, [install Arduino IDE](https://www.arduino.cc/en/software).
- `File` > `Examples` > `Firmata` > `StandardFirmata`
- `Tools` > `Board` > `your board`
- `Tools` > `Port` > `your port`
- Click `Upload` button.
if you use WSL, you need to follow [this instruction](/docs/Getting%20Started/How%20to%20WSL)
## 3. Try LED flashing

```ts title="index.tsx"
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

## 4. execute the program

```bash
$ npx vite-node index.tsx
```

automatically\*\* and displays your changes.
