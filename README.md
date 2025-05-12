# Nextjs usando pages router.

A definição de rotas é bastante semelhante ao app router a diferença é que ao envez de termos as paginas definidas dentro de uma pasta `/src/app` teremos elas definidas por uma pasta `/src/pages`.

## Custom App

Next usa o componente `App` para inicializar paginas.

- Criar layout compartilados entre mudanças de paginas.
- Injetar dados na paginas.
- Adicionar CSS global.

```javascript (teste)
// pages/_app.tsx

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```
