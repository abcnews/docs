---
# Start iframe blank
sidebar: false
header: false
footer: false
pager: false
# End iframe blank
theme: [air, near-midnight]
---

```js
import { Chart } from "./chart.js"
import { autoResize } from "../lib/iframeResizer.js"
```

```js
autoResize();
display(await Chart())
```

<style>
  #observablehq-center {
    margin: 0;
  }
</style>