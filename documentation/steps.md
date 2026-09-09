# Pasos para desarrollar la app

##### Enlaces de respaldo

* https://docs.expo.dev/

---

###### Commit: `Nuevo Proyecto:...`

## Creando la applicación

```bash
pnpm create expo-app
# ✔ What is your app named? … calculator-app
# ✔ Select an Expo SDK version: › For learning with Expo Go (SDK 54)
```

---

###### Commit: `Estructura:...`

## Explicando el sistema de ficheros

```bash
.
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── app
│   ├── (tabs)
│   │   ├── _layout.tsx
│   │   ├── explore.tsx
│   │   └── index.tsx
│   ├── _layout.tsx
│   └── modal.tsx
├── app.json
├── assets
│   └── images
│       ├── android-icon-background.png
│       ├── android-icon-foreground.png
│       ├── android-icon-monochrome.png
│       ├── favicon.png
│       ├── icon.png
│       ├── partial-react-logo.png
│       ├── react-logo.png
│       ├── react-logo@2x.png
│       ├── react-logo@3x.png
│       └── splash-icon.png
├── components
│   ├── external-link.tsx
│   ├── haptic-tab.tsx
│   ├── hello-wave.tsx
│   ├── parallax-scroll-view.tsx
│   ├── themed-text.tsx
│   ├── themed-view.tsx
│   └── ui
│       ├── collapsible.tsx
│       ├── icon-symbol.ios.tsx
│       └── icon-symbol.tsx
├── constants
│   └── theme.ts
├── documentation
│   ├── Goal.png
│   ├── steps.md
│   └── temas_puntuales.md
├── eslint.config.js
├── expo-env.d.ts
├── hooks
│   ├── use-color-scheme.ts
│   ├── use-color-scheme.web.ts
│   └── use-theme-color.ts
├── package.json
├── pnpm-lock.yaml
├── scripts
│   └── reset-project.js
└── tsconfig.json
```

1. App router: `./app/*`

Es similar al sistema de ficheros de NextJS, tenemos una serie de nombres específicos que tendremos en sus componentes de React que vayamos a crear, incluso las carpetas tienen una __sintaxis__ especial.

Éste sistema de archivos indicará a ReactNative que __Rutas__ crear, esto es bastante poderoso.

2. Not Found: `./+not-found.tsx`

En anteriores versiones se creaba por defecto este archivo, nos sirve para crear un componente para cuando la __ruta__ al que intentamos acceder no existe y entonces renderizará este componente.

3. Componente: `./app/modal.tsx`

Éste archivo es especial porque __Expo Router detecta automáticamente esta estructura__ para manejar pantallas modales. Este archivo sirve como plantilla para crear ventanas emergentes rápidas sin tener que lidiar con las APIs complejas de los componentes nativos de Android o iOS.

Ésta Prop `dismissTo`: Es la clave para los __modales__. Indica al sistema que, en lugar de abrir una nueva "página" normal sobre el __stack__, debe __descartar (cerrar)__ este modal actual.

4. El archivo: `./app/_layout.tsx`

No muestra contenido directo, sino que __orquesta la arquitectura__: define cómo se apilan las pantallas, qué tema usa toda la app, dónde inicia por defecto y cómo se comportan los modales frente a las rutas normales. Es el "tablero de control" de tu navegación.

5. Agrupador de lógica: `./app/(tabs)/*`

En Expo Router, los paréntesis crean un __grupo de rutas__ que se usa para organización y alias de rutas, pero __no añaden segments a la URL__.

Está diseñada para organizar y configurar la navegación por pestañas (tab bar) de tu app.

6. Contenido estático: `./assets/*`

Aquí añadimos los archivos que nuestra aplicación podrá utilizar de manera estática.

7. Directorio: `./components/*`

Es un directorio de __propósito general__, para componentes de interfaz de usuario __reutilizables__, separados de la lógica de __enrutamiento__.

8. Script: `./scripts/reset-project.tsx`

Éste script nos permite resetear el proyecto o __eliminar todo el boilerplate__ mediante un __único comando__, sería lo mas cercado de utilizar el `--template blank-typescript`.

---

###### Commit: `Expo Rotuer:...`

## Expo Router: `index` y `_layout`

Realizaremos las modificaciones en una serie de pasos.

1. Eliminaremos todos los archivos de `./app/*`, excepto `./app/_layout.tsx`

2. Vaciamos el contenido de `_layout.tsx` y generamos un componente básico con `rnfe`, y cambiamos el nombre por `RootLayout`, aunque no importa que nombre pongamos.

```tsx
import { View, Text } from 'react-native'

const RootLayout = () => {
  return (
    <View>
      <Text>RootLayout</Text>
    </View>
  )
}

export default RootLayout
```

En este punto aún no le decimos a nuestro `_layout` donde renderizará el `index`.

Para esto deberemos añadir `<Slot />` de `expo-router`.

3. Eliminamos los archivos: `./componets`, `./hooks`, `./scripts`, reducimos `./constants/theme.ts`, quitamos el script de `package.json`,

4. Añadimos __fuente__ desde nuestra carpeta estática `./assets/fonts/SpaceMono-Regular.ttf`

---
