/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.axiolot.com.ng',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000', // Accept any port (or use '3000' if fixed)
                pathname: '/**',
            },
        ],
        unoptimized: true,
        qualities: [100],
    },
}

module.exports = nextConfig
