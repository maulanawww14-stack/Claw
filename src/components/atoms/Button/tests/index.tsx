import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Button from '../index';

describe('Button Atom', () => {
  it('renders successfully', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText(/Click Me/i)).toBeDefined();
  });
});
