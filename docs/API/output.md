## 1. Write standard firmata to the device
Uploading Standard Firmata to Arduino
Open Arduino IDE.
`File > Examples > Firmata > StandardFirmata`.

`Tools > Board > your board`
`Tools > Serial Port > your port`
Click Upload button. if you use WSL, you need to follow [this](/docs/Getting%20Started/How%20to%20WSL.md)

## 2. Set output pin

You can use `<Output >` function component to set output pin.

| Props | Type   | Description      | Default |
|-----------|--------|------------------|---------|
| `pin`      | number  | Pin number to control current     | `None` |
| `isOn`      | boolen  | `on` if `isOn` is true, `off` if false.     | `None`    |

:::tip

`<Output>` is a function that sets the output pin. So, you can control many device Led, Buzzer, etc.

:::