const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/home',
        destination: '/pages/home',
      },
      {
        source: '/',
        destination: '/pages/start',
      },
        {
          source: '/:path*',
          destination: '/pages/start',
        },
        // Puedes agregar más rutas según tus necesidades
    ];
  },
};

module.exports = nextConfig;