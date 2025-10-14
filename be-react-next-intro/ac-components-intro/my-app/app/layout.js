import Link from "next/link";

export const metadata = {
  title: 'Next.js App',
  description: 'Practice with App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '1rem', background: '#eee' }}>
          <Link href="/">Home</Link> | <Link href="/about">About</Link>
        </header>
        <main>{children}</main>
        <footer style={{ padding: '1rem', background: '#eee' }}>
          &copy; 2025 My App
        </footer>
      </body>
    </html>
  );
}