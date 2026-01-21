---
sidebar: false
header: false
footer: false
pager: false
theme: "air"
---

```js
import { Chart } from "./chart.js";
import { emitResize } from "../lib/iframeResizer.js";

addEventListener("resize", () => {
  const height = document.body.clientHeight;
  emitResize(height);
});
```

```js
Chart();
```
