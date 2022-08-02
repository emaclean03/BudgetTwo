import laravel from "laravel-vite-plugin";

export default ({ command }) => ({
    plugins: [
        laravel([
            'resources/css/app.css',
            'resources/js/app.jsx',
        ]),
    ],
});