import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                captura: 'captura.html',
                obrigado: 'obrigado.html',
                "vendas-abertas": 'vendas-abertas.html',
            },
        },
    },
});
