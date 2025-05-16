
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/investFX/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/investFX/simulacao",
    "route": "/investFX"
  },
  {
    "renderMode": 2,
    "route": "/investFX/simulacao"
  },
  {
    "renderMode": 2,
    "route": "/investFX/sobre"
  },
  {
    "renderMode": 2,
    "route": "/investFX/contato"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23780, hash: 'dc7fd9bb50033b1a97e64b7d96d9c17a33d9496a9b8d7661542aae872da8024b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17211, hash: 'fd09ffb5e2fcd57e90b26890d80fbc54f373864e3bc591050a21b969bd89e241', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'sobre/index.html': {size: 93644, hash: '4528d38869eb5c001c0417164bc3ba2d54e35647ade1bdaa305fd0bf1f723004', text: () => import('./assets-chunks/sobre_index_html.mjs').then(m => m.default)},
    'contato/index.html': {size: 94185, hash: '65b18d6ebdcadd2fe652cdbf3a0640df0c1fa28f5b2f9ff2dc3ac7057afddc33', text: () => import('./assets-chunks/contato_index_html.mjs').then(m => m.default)},
    'simulacao/index.html': {size: 160304, hash: '0f5a89f053ed677a681a4aa54424800e4ed47b2e3310073061fc9273f19636a6', text: () => import('./assets-chunks/simulacao_index_html.mjs').then(m => m.default)},
    'styles-E5BT4V6G.css': {size: 366581, hash: 'MyiIZR8ceFw', text: () => import('./assets-chunks/styles-E5BT4V6G_css.mjs').then(m => m.default)}
  },
};
