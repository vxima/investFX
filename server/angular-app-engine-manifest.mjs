
export default {
  basePath: 'https://vxima.github.io/investFX',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
