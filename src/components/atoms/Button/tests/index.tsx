import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from '../index';

describe('Button Atom', () => {
  it('harus merender teks tombol dengan benar', () => {
    render(<Button>Klik Saya</Button>);
    expect(screen.getByText('Klik Saya')).toBeInTheDocument();
  });

  it('harus memanggil fungsi onClick saat diklik', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Klik</Button>);
    
    fireEvent.click(screen.getByText('Klik'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('harus memiliki atribut disabled saat isLoading bernilai true', () => {
    render(<Button isLoading={true}>Loading</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('harus merender varian yang berbeda (misal: danger)', () => {
    render(<Button variant="danger">Hapus</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-red-600');
  });
});
