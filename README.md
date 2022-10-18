# ec.tailbite

![tailbite logo](https://i.imgur.com/XbaEseA.jpg)

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

### 3. open a new terminal and run:

```sh
npm install @entrecode/tailbite
```

## Usage

```js
import { Section, Button, Card } from '@entrecode/ec.tailbite';
```

The import is currently not tree shaked, so it might be changed in the future..
