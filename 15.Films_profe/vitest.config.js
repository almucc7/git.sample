import { defineConfig } from 'vitest/config.js';

export default defineConfig({
    test: {
        include: ['**/*.test.ts'],
        globals: true,
    },
});
