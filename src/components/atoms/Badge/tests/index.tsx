import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Badge from '../index';

describe('Badge Atom', () => {
  it('renders successfully', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText(/New/i)).toBeDefined();
  });
});
