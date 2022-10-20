import laravel from "laravel-vite-plugin";
import react from '@vitejs/plugin-react';

export default ({ command }) => ({
    plugins: [
        laravel([
            'resources/css/app.css',
            'resources/js/app.jsx',
        ]),
        react(),
    ],
});