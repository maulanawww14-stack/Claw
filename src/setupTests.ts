import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Membersihkan DOM setelah setiap test agar tidak bocor ke test berikutnya
afterEach(() => {
  cleanup();
});
