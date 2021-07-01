# Web (Frontend)

Notes for the development of the frontend of the PayUfirst (PUF) project.

## **Technologies and packages**

1. Create React App (CRA)

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

## Path Alias

- Install: `yarn add --dev react-app-rewired`
- New file config-overrides.js
  - Alias for 'src/' is '~'
- Also, in package.json we haver to change the scripts 'react-scripts' to 'react-app-rewired'

## More info

1. Atomic Design: <https://bradfrost.com/blog/post/atomic-web-design/>
   1. Divide components in basic building blocks
2. Barrel File: <https://adrianfaciu.dev/posts/barrel-files/>
   1. Used to add different exports in a single file and re-export them
