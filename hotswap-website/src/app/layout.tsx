// src/app/layout.tsx

import './globals.css';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Adobe Fonts Kit Link */}
        <link rel="stylesheet" href="https://use.typekit.net/hxv5upj.css" />
      </head>
      <body className="bg-[#F5F4DC] font-rotunda">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
