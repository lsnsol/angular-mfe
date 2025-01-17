import NextFederationPlugin from "@module-federation/nextjs-mf";
const federatedConfig = {
  name: "nextmnh",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./Home": "./src/pages/bootstrap.tsx",
  },
  shared: {},
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