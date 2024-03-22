/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://api.zumo.asia/api/:path*'
            }
        ]
    }
};
export default nextConfig;
