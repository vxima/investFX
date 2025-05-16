
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://vxima.github.io/investFX/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/https://vxima.github.io/investFX/simulacao",
    "route": "/https:/vxima.github.io/investFX"
  },
  {
    "renderMode": 2,
    "route": "/https:/vxima.github.io/investFX/simulacao"
  },
  {
    "renderMode": 2,
    "route": "/https:/vxima.github.io/investFX/sobre"
  },
  {
    "renderMode": 2,
    "route": "/https:/vxima.github.io/investFX/contato"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23803, hash: '7b1a570eb69587dcbefce0ccb0128c01643016c882db1a620fe055a45963a273', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17234, hash: '8cc53eac32f58c727e1c1ef3bc86169fbb6b40c6dd8b429eda339f18bb9f78e0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'https:/vxima.github.io/investFX/sobre/index.html': {size: 92796, hash: '0623d789037f6c5f483a99041488a266fe68a94de77aa582b62cecb31d25905b', text: () => import('./assets-chunks/https:_vxima_github_io_investFX_sobre_index_html.mjs').then(m => m.default)},
    'https:/vxima.github.io/investFX/contato/index.html': {size: 92796, hash: '0623d789037f6c5f483a99041488a266fe68a94de77aa582b62cecb31d25905b', text: () => import('./assets-chunks/https:_vxima_github_io_investFX_contato_index_html.mjs').then(m => m.default)},
    'https:/vxima.github.io/investFX/simulacao/index.html': {size: 92796, hash: '0623d789037f6c5f483a99041488a266fe68a94de77aa582b62cecb31d25905b', text: () => import('./assets-chunks/https:_vxima_github_io_investFX_simulacao_index_html.mjs').then(m => m.default)},
    'styles-E5BT4V6G.css': {size: 366581, hash: 'MyiIZR8ceFw', text: () => import('./assets-chunks/styles-E5BT4V6G_css.mjs').then(m => m.default)}
  },
};
