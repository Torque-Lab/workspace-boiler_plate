/** @type {import('next').NextConfig} */
import process from 'process';
const apiBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL; 
const isDev = process.env.NEXT_PUBLIC_ENV === 'development';

const nextConfig = {
    output: 'standalone',
    ...(isDev && {
        async rewrites() {
            return [
                {
                    source: '/api/:path*',
                    destination: `${apiBaseURL}/api/:path*`,
                }
            ];
        }
    })
};

export default nextConfig;
