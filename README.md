# What is this?
This is an Electron-based template for Tools Development students, who wish to build native Electron apps with React & Webpack support. The bulk of this template uses the [webpack template](https://www.electronforge.io/templates/webpack-template) from `electron-forge`. Additionally, the changes suggested by [the electron forge documentation](https://www.electronforge.io/guides/framework-integration/react) on integrating React with Electron have been took. Finally, a basic folder structure and component has been added under `src/components/Application.jsx` and `src/app.jsx`.

## Getting started
To get started, click on `Use this template` in the top-right. This will allow you to create a repository based on this template. You can then expand it and turn it into your own tool!

Once you have made a repository from this template, clone it via Github Desktop or `git clone`. You will then need to run `npm install` to install all local dependencies.

Finally, you can run `npm run start` to start the dev process. You can also use `npm run build` to build the resulting executable.


## Recreating the template
If you want to do make this template yourself, all you need to do is:

1) Run `npm init electron-app@latest my-new-app -- --template=webpack`
2) `cd` into `my-new-app`
3) Run `npm install --save-dev @babel/core @babel/preset-react babel-loader`
4) Add the following to `webpack.rules.js` to enable `jsx` loading:

```js
module.exports = [
  // ... existing loader config ...
  {
    test: /\.jsx?$/,
    use: {
      loader: 'babel-loader',
      options: {
        exclude: /node_modules/,
        presets: ['@babel/preset-react']
      }
    }
  }
  // ... existing loader config ...
];
```

5) Run `npm install --save react react-dom` to install React
6) Make `app.jsx` and import it in `src/renderer.js`. In `app.jsx`, create a React root and render it with:

```jsx
import * as React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.body);
root.render(<h2>Hello from React!</h2>);
```

6) Add the main application component and render that instead of the `<h2>` code listed above.