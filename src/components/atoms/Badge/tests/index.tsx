import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Badge from '../index';

describe('Badge', () => {
  it('renders successfully', () => {
    render(<Badge />);
    expect(screen.getByText(/Badge/i)).toBeDefined();
  });
});
