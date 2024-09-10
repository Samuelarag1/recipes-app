// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Generador de recetas",
  description: "Genera recetas rapidamente",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
