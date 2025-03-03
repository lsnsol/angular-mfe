import NextFederationPlugin from "@module-federation/nextjs-mf";
const federatedConfig = {
  name: 'host',
  filename: 'remoteEntry.js',
  remotes: {
    remote: `remote@http://localhost:3001/remoteEntry.js`, // Adjust URL as needed
  },
  shared: {}, // Define shared dependencies if needed
  extraOptions: {
    exposePages: true,
  }
};
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin(federatedConfig)
    );
    return config;
  },
};
export default nextConfig;