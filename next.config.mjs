/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        // domains: ['api.zumo.asia'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
            }
        ]
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://api.zumo.asia/api/:path*',
                basePath: false
            }
        ]
    },
};
export default nextConfig;
