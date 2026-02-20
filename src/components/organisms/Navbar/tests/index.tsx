import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Navbar from '../index';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar Organism', () => {
  it('harus merender judul MyProject', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText(/My/i)).toBeInTheDocument();
    expect(screen.getByText(/Project/i)).toBeInTheDocument();
  });
});
