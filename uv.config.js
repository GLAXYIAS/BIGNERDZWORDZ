self.__uv$config = {
  prefix: '/uv/service/',
  bare: 'https://uv.radon.games/bare/',
  encodeUrl: Ultraviolet.codec.xor,
  decodeUrl: Ultraviolet.codec.xor,
  handler: '/uv/uv.handler.js',
  bundle: '/uv/uv.bundle.js',
  config: '/uv/uv.config.js',
  sw: '/uv.sw.js',
};
