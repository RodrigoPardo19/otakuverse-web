import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	test: {
		environment: 'jsdom',
		setupFiles: './src/tests/vitest-setup.ts',
		include: ['./src/tests/**/*.{test.tsx,test.ts}'],
	},
});
