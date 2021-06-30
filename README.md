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
