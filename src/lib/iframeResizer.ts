/**
 * Emits a message to the parent window to resize the iframe
 * @param height
 * @returns void
 */
export const emitResize = (height: number) => {
  if (!window.parent) {
    return;
  }

  const payload = {
    type: "embed-size",
    height,
  };

  window.parent.postMessage(payload, "*");
};

export const autoResize = () => {
  const observer = new ResizeObserver(() => {
    const height = document.body.scrollHeight;
    emitResize(height);
  });

  observer.observe(document.body);
};
