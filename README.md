# esbuild-plugin-copy-file

This esbuild plugin copies files (asynchronously and in parallel) before and after bundling.

## Installation

```bash
npm install esbuild-plugin-copy-file
```

## Usage

```js
import esbuild from 'esbuild';
import copyFilePlugin from 'esbuild-plugin-copy-file';

esbuild.build({
  // ...
  plugins: [copyFilePlugin({
    before: { // copy before bundling
      './assets/favicon.png': './media/images/favicon.png'
    },
    after: { // copy after bundling
      './logs/build-report.json': './dist/report.json'
    }
  })]
});
```

## Options

**before**: {_String_ targetPath: _String_ sourcePath, ...}

An _object_ with `targetPath`: `sourcePath` entries. Files are copied before bundling.

**after**: {_String_ targetPath: _String_ sourcePath, ...}

An _object_ with `targetPath`: `sourcePath` entries. Files are copied after bundling.