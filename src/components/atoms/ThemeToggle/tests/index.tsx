import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ThemeToggle from '../index';

describe('ThemeToggle Atom', () => {
  it('harus merender tombol toggle', () => {
    render(<ThemeToggle />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
