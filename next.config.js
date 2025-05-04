/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'static.axiolot.com.ng',
                port: '',
                pathname: '/**',
            },
            // {
            //     protocol: 'http',
            //     hostname: 'localhost',
            //     port: '', // Accept any port (or use '3000' if fixed)
            //     pathname: '/**',
            // },
        ],
    },
}

module.exports = nextConfig
