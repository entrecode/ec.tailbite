import path from 'path';
import fs from 'fs';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const getFileExtension = (p) => p.split('.').slice(-1)[0];
const joinPaths = (...paths) =>
  paths
    .reduce((acc, p) => acc.concat(p.split('/')), [])
    .flat()
    .join('/');

// this function will return an array of file paths found in folder and all its subfolders
// baseDir will not be part of the file string
function crawl(folder, baseDir = '') {
  let dir = path.resolve(__dirname, baseDir, folder);
  const ls = fs.readdirSync(dir);
  const stat = (p) => fs.lstatSync(joinPaths(dir, p));
  const dirs = ls.filter((p) => stat(p).isDirectory());
  const filesBelow = dirs.reduce((acc, dir) => acc.concat(crawl(joinPaths(folder, dir), baseDir)), []);
  const files = ls
    .filter((p) => !stat(p).isDirectory() && ['tsx', 'ts'].includes(getFileExtension(p)))
    .map((p) => joinPaths(folder, p));
  return [...filesBelow, ...files];
}

export default crawl;
