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

## Usage

```js
import { Section, Button, Card } from '@entrecode/ec.tailbite';
```

The import is currently not tree shaked, so it might be changed in the future..

## Notes about the build

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
