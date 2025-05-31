import NextFederationPlugin from "@module-federation/nextjs-mf";
const remotes = () => {
  return {
    // specify remotes
    remote: `remote@http://localhost:3001/_next/static/chunks/remoteEntry.js`,
    // remote2: `remote2@http://localhost:3002/_next/static/chunks/remoteEntry.js`,
  };
}

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(),
        exposes: {
          // Host app also can expose modules
        }
      })
    );
    return config;
  },
}
export default nextConfig;