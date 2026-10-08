// Copies the address on any [data-copy] button and briefly confirms it.
document.querySelectorAll("[data-copy]").forEach((button) => {
  const label = button.querySelector("[data-label]");
  const original = label.textContent;
  let timer;
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      label.textContent = "Copied";
    } catch {
      label.textContent = button.dataset.copy;
    }
    clearTimeout(timer);
    timer = setTimeout(() => (label.textContent = original), 1600);
  });
});
