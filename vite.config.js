import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'node:path';
import path from 'path';

export default {
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    resolve: {
        alias: {
            'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
            '@': path.resolve(__dirname, 'resources/js'),
            '@components': path.resolve(__dirname, 'resources/js/components'),
            '@hooks': path.resolve(__dirname, 'resources/js/hooks'),
            '@layouts': path.resolve(__dirname, 'resources/js/layouts'),
            '@pages': path.resolve(__dirname, 'resources/js/pages'),
        },
    },
    server: {
        // Ensure the server is running with the right URL
        host: 'dietplanner.site',
        hmr: {
            host: 'localhost',
            protocol: `ws`,
        },
        watch: {
            ignored: [
                `vendor`,
                `node_modules`,
                `resources/**/*.php`,
                `public/**/*.php`,
            ],
        },
        cors: {
            origin: ['http://dietplanner.site'],
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization'],
        }
    },
};
