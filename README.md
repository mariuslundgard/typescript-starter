# typescript-starter

A starter repository for TypeScript projects.

Pre-installed `typings`:

* node v6

## Getting started

### Installing

This project supports `pollinate` installation:

```sh
# in a workspace directory
pollinate https://github.com/mariuslundgard/typescript-starter.git --name newproject --author "Bertram Gilfoyle <gilfoyle@piedpiper.io>"
cd newproject
git init
npm install
# ready
```

Or manually with `git`:

```sh
git clone git@github.com:mariuslundgard/typescript-starter.git
cd typescript-starter
rm -rf .git
rm TEMPLATE-README.md template-package.json template.json
# modify README.md and package.json
git init
npm install
```

### Compiling

```sh
npm run build
```
