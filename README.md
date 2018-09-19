# React Webpack Boilerplate :boom:

[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

A project scaffold to quickly start developing in **react** using

## What you get:question:

### Webpack

All the assets are managed by webpack 4. You can find the webpack config files in the **build** directory.

### TypeScript

Yes we love **TypeScript** so start using it right away as the project comes with TypeScript 3 support.

### React

The project comes with react, react-dom 16 yet you can change it to the version of your choice.

### SCSS

Fuck CSS :poop: and write easy, readable CSS with SCSS which comes out of the box with this project.

### Autoprefixer

Forget about browser specific prefixes which autoprefixer will take care.

### Linting

We all like to keep our code clean with official standards and away from potential bugs thus this project comes with tslint

### Husky

- No more worries on how to format your code, prettier is here to take care of it whenever you commit the code.

- You wont push or commit code which breaks automated tests since husky is here to stop you.

### Automated Testing

Test your codebase with community recommended **jest** and **enzyme**

## How to use it:question:

1. Clone the repo

```sh
git clone https://github.com/ameerthehacker/react-boilerplate.git
```

2. Install the dependencies

```sh
npm install
```

3. Run the dev server

```sh
npm start
```

## Other npm commands

1. Lintint the project

```sh
npm run lint
```

2. Run tests

```sh
npm test
```

3. Generate code coverage report

```sh
npm run coverage
```

4. Build the project (development build)

```sh
npm run build
```

- The built artifacts will be available in **dist** directory
- This will include sourcemaps
- Assets(js,css) will not be minified

5. Build the project (production build)

```sh
npm run build:prod
```

- The built artifacts will be available in **dist** directory
- This will not include sourcemaps
- Assets(js,css) will be minified

6. Build the project with watch (development)

```sh
npm run build:watch
```

The project will be rebuilt everytime you change any file.

Show your support by :star: the repo

## License

MIT © [Ameer Jhan](mailto:ameerjhanprof@gmail.com)
