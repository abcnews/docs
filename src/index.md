---
toc: true
---

# Welcome

```ts
import { Chart } from "/embeds/chart.js"
```

```ts echo
const x: string = () => "Hello World"

function greeting(name) {
  return html`Hello, <i>${name}</i>!`
}
```

```js echo
document.createTextNode("[insert chart here]")
```

```ts echo
display(greeting("World"))
```

## Charts

We can output charts.

```js echo
Chart()
```

## Other

And other things.

<style>



</style>
