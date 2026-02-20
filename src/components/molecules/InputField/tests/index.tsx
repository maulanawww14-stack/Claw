import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import InputField from '../index';

describe('InputField Molecule', () => {
  it('harus merender label jika diberikan', () => {
    render(<InputField label="Username" />);
    expect(screen.getByText('USERNAME')).toBeInTheDocument();
  });

  it('harus merender pesan error jika ada', () => {
    render(<InputField label="Password" error="Terlalu pendek" />);
    expect(screen.getByText('Terlalu pendek')).toBeInTheDocument();
  });

  it('harus memiliki placeholder yang benar', () => {
    render(<InputField placeholder="Ketik di sini..." />);
    expect(screen.getByPlaceholderText('Ketik di sini...')).toBeInTheDocument();
  });
});
