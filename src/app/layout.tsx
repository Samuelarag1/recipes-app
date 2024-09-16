// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import ReduxProvider from "../components/ReduxProvider"; // Importa tu nuevo Provider

export const metadata = {
  title: "Generador de recetas",
  description: "Genera recetas rápidamente",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
