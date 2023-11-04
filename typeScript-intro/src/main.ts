import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

import { name, age, isValid, templateString } from './bases/01-types.ts'
import { balbaseur, pokemonsId } from './bases/02-objects.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
       PROBANDO LA APLICACION 
      </br>
      <h1> ${ name } </h1>
      <h2> mi edad es: ${ age } </h2>
      <h3> En serio? ${isValid} </h3>
      Click on the Vite and TypeScript logos to learn more
      <p>${templateString}</p>
      <p>${pokemonsId}</p>
      <p>${balbaseur.name}</p>
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
