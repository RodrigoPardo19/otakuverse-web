import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

vi.mock('next/font/google', () => ({
	Roboto: () => ({
		style: {
			fontFamily: 'mocked',
		},
	}),
	Koulen: () => ({
		style: {
			fontFamily: 'mocked',
		},
	}),
}));

test('Home Page', () => {
	render(<Home />);
	expect(screen.getByRole('heading', { level: 1, name: 'Otakuverse' })).toBeDefined();
});
