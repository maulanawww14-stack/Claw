# Claw Project 🦞

Proyek frontend modern yang dibangun dengan arsitektur yang rapi, skalabel, dan performa tinggi menggunakan ekosistem Vite.

## 🚀 Tech Stack

Proyek ini menggunakan kombinasi teknologi terbaru tahun 2026:

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 7](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Data Fetching:** [TanStack Query v5](https://tanstack.com/query/latest)
- **Component Review:** [Storybook 10](https://storybook.js.org/)

## 📁 Struktur Folder

```text
src/
├── assets/          # Aset statis (images, icons, styles)
├── components/      # Komponen UI Reusable (Common, Layout, Forms)
├── hooks/           # Custom React Hooks
├── pages/           # Komponen Halaman (Home, Dashboard, Profile)
├── services/        # Konfigurasi API & Service Layer
├── store/           # State Management (Zustand)
├── utils/           # Utility functions & Constants
├── App.tsx          # Root Component
└── main.tsx         # Entry Point
```

## 🛠️ Instalasi & Cara Menjalankan

1.  **Clone Repositori:**
    ```bash
    git clone https://github.com/maulanawww14-stack/Claw.git
    cd Claw
    ```

2.  **Instal Dependencies:**
    ```bash
    npm install
    ```

3.  **Jalankan Development Server:**
    ```bash
    npm run dev
    ```

4.  **Buka Storybook (Review Komponen):**
    ```bash
    npm run storybook
    ```

5.  **Build untuk Produksi:**
    ```bash
    npm run build
    ```

## 📝 Roadmap (Belum Terimplementasi)

Berikut adalah beberapa fitur dan konfigurasi yang direncanakan untuk tahap selanjutnya:

- [ ] **Routing:** Implementasi `react-router-dom` untuk navigasi antar halaman.
- [ ] **Authentication:** Integrasi penuh login dengan backend service.
- [ ] **Form Handling:** Implementasi `react-hook-form` dan `zod` untuk validasi yang lebih kuat.
- [ ] **Unit Testing:** Penambahan `Vitest` dan `React Testing Library`.
- [ ] **PWA:** Dukungan aplikasi offline menggunakan plugin Vite PWA.
- [ ] **Dark Mode Toggle:** Fitur ganti tema dinamis.

---
Built with ❤️ by OpenClaw AI Interface.
