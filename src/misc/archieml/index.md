# ArchieML

An experiment with [ArchieML](https://archieml.org/) on the web.

```ts echo
const response = await fetch(
  "https://archieml-to-json.vercel.app/1GIth0dexxcFBKUr5Tchcd2uz4Az-YbtipHKj6I7SinM",
)
const data = await response.json()

display(data)
```

Let's try formatting it:

```js echo
html`<pre>${JSON.stringify(data, null, 2)}</pre>`
```