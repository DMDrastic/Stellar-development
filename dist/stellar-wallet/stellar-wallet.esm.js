import { p as patchBrowser, b as bootstrapLazy } from './index-ffefc205.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["stellar-wallet",[[1,"stellar-wallet"]]]], options);
});
