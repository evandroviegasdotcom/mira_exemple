/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "lh3.googleusercontent.com" },
            { hostname: "avatar.vercel.sh" },
            { hostname: "cdn.jsdelivr.net" },
            { hostname: "utfs.io" },
        ]
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
