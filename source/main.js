import { cp } from 'fs/promises';

const getCopyFunction = (files = {}) => (async () => {
  const operations = Object.entries(files)
    .map(
      ([target, source]) => cp(source, target)
    );
  await Promise.all(operations);
});

const copyFilePlugin = ({before, after}) => ({
  name: 'copyFile',
  async setup(build) {
    before && build.onStart(getCopyFunction(before));
    after && build.onEnd(getCopyFunction(after));
  }
});

export default copyFilePlugin;