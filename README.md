# Web (Frontend)

Notes for the development of the frontend of the PayUfirst (PUF) project.

## Summary

- [Web (Frontend)](#web-frontend)
  - [Summary](#summary)
  - [**Technologies and packages**](#technologies-and-packages)
  - [**Create React App**](#create-react-app)
    - [**Preparing the project**](#preparing-the-project)
  - [Project Colors](#project-colors)
  - [Styled-components](#styled-components)
    - [createGlobalStyle](#createglobalstyle)
    - [CSS Reset](#css-reset)
    - [Google Fonts](#google-fonts)
  - [Path Alias](#path-alias)
  - [HTTP Requests](#http-requests)
    - [Test HTTP Requests](#test-http-requests)
  - [Form Validation](#form-validation)
  - [More info](#more-info)

## **Technologies and packages**

1. Create React App (CRA)
2. Styled-components
3. Configure Path Alias
4. HTTP Requests
   1. Axios
   2. JSON Placeholder

## **Create React App**

```bash
npx create-react-app puf
```

- This command creates a react app.
- Using npx the lib create-react-app don't need to be installed in the machine globally or in the project locally.
  - npx downloads the lib from the npm repository, uses the lib do create the react app and later remove the temporary folder with the libs files.

### **Preparing the project**

Files to be removed:

- public/
  - favicon.ico
  - logo192.png
  - logo512.png
- src/
  - App.css
  - App.js
  - App.test.js
  - logo.svg

Added files from api repository:

- .editorconfig
- .eslintrc: Updated based in the content of <https://github.com/CodarMe/stylelint/blob/master/index.js>
- .prettierrc

Add eslint development dependencies:

```bash
yarn add --dev eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-json
```

Test server: `yarn start`

- Opens in localhost:3000

## Project Colors

- Website: <https://coolors.co/>
  - Check palette colors
  - From this website we can check the name of each color code

## Styled-components

- To work with styles
- Install: `yarn add styled-components

### createGlobalStyle

- A method from styled-components to apply global css in a theme
- We can use themes inside the global style
  - This a difference from createGlobalStyle to a common .css file

### CSS Reset

- Padronize tags between different systems and OSs

### Google Fonts

- Website: <https://fonts.google.com/>
- You can find a font and download it
- Example:

  - Manrope: <https://fonts.google.com/specimen/Manrope?query=Manrope>
  - Select the fonts you need
  - It is possible to download the fonts through HTML link:

  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
  	href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap"
  	rel="stylesheet"
  />
  ```

  - It is possible to use in a CSS structure with style HTML tag:

  ```CSS
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap');
  </style>
  ```

## Path Alias

- Install: `yarn add --dev react-app-rewired`
- New file config-overrides.js
  - Alias for 'src/' is '~'
- Also, in package.json we haver to change the scripts 'react-scripts' to 'react-app-rewired'

## HTTP Requests

1. fetch
   1. Native to javascript
2. axios
   1. Website: <https://www.npmjs.com/package/axios>
   2. Install: `yarn add axios`

```javascript
// Use example

axios
	.get('https://jsonplaceholder.typicode.com/todos/1')
	.then((response) => console.log(response.data))
```

### Test HTTP Requests

- JSON Placeholder: <https://jsonplaceholder.typicode.com/>

## Form Validation

- Yup: <https://github.com/jquense/yup>
  - `yarn add yup`
- Formik:
  - `yarn add formik`

## More info

1. Atomic Design: <https://bradfrost.com/blog/post/atomic-web-design/>
   1. Divide components in basic building blocks
2. Barrel File: <https://adrianfaciu.dev/posts/barrel-files/>
   1. Used to add different exports in a single file and re-export them
