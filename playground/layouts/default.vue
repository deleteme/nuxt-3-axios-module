<template>
  <div>
    <slot />
  </div>
</template>

<style>
html {
  font-family: sans-serif;
}

:root {
  --gap: 10px;
  --border: 1px solid #ccc;
}

.box {
  border: var(--border);
  border-radius: 4px;
  padding: var(--gap);
}

.example {
  margin-top: var(--gap);
  padding-top: var(--gap);
  display: flex;
  justify-content: space-between;
  gap: var(--gap);
}

.example + .example {
  border-top: var(--border);
}

.example .description {
  flex-shrink: 1;
}

.demo {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  flex-basis: fit-content;
  flex-shrink: 0;
  flex-direction: column;
  text-align: center;
}

.label {
  font-size: 12px;
  font-weight: bold;
  display: block;
}
</style>
