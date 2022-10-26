# ec.tailbite

![tailbite logo](./logo.png)

This is the entrecode frontend component framework.

## Install

Since it is a private package, you are required to have npm configured correctly.

### 1. create a GitHub PAT here <https://github.com/settings/tokens> with the permission `read:packages`.

### 2. You'll need a `.npmrc` file in your root directory with the following content:

```sh
@entrecode:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOURTOKEN
```

Replace `YOURTOKEN` with the generated PAT

### 3. open a new terminal and run

```sh
npm install @entrecode/tailbite --save
```

### 4. configure styles

To make sure you have all styles, make sure your tailwind config includes:

```js
module.exports = {
  /* .. */
  content: [
    /* .. */
    './node_modules/@entrecode/ec.tailbite/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* copy this part from ec.tailbite tailwind.config.js */
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')],
  /* .. */
};
```

### 5. configure theme

Copy the contents [index.css](./src/index.css) to your main css file and adapt the theme to your needs.

## Usage

### Imports

Each file is imported seperately:

```js
import Section from '@entrecode/ec.tailbite/components/Section';
import useSdk from '@entrecode/ec.tailbite/hooks/useSdk';
import cx from '@entrecode/ec.tailbite/util/classNames';
```

This ensures your bundle stays small.

### Environment

Wrap your App in `Tailbite` like this:

```jsx
<Tailbite
  environment={{
    shortID: '83cc6374',
    env: 'stage',
    colors: {
      primary: '#ba443c',
    },
  }}
>
  {/* your app */}
</Tailbite>
```

### Theming

Tailwind will run in dark mode when your theme contains the word dark!

## Dev Notes

### Build

The build is using vite in library mode. The problem: default settings will build only one giant bundle
, which results in a lot of stuff nobody needs. Luckily [this comment](https://github.com/vitejs/vite/discussions/1736#discussioncomment-3812904) pointed out that the 3.2.0 beta version of vite supports multiple entry points in library mode.
To make this work with typescript (using vite-plugin-dts), the entry keys must match the actual paths, relative to src, e.g.

```js
{
  entry: {
    /* .. */
    'components/Section': path.resolve(__dirname, 'src', 'components', 'Section.tsx'),
    /* .. */
  }
}
```

... which results in `Section.js` being generated into the same directory as `Section.d.ts`.

This is now implemented using a file crawler to determine the chunks automatically (see `vite.config.ts`)

### Import Magic

To be able to import without including the `dist` folder, I am using a [little hack](https://github.com/npm/npm/issues/10996#issuecomment-372985827).

### Package Publishing

To publish the package to the private entrecode github registry, run:

```sh
npm run patch
```

This will build all files and bump the version + commit everything.
