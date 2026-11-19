import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'দেশ-বিদেশের সকল খবর | DESHBIDESH NEWS 24',
  description: 'বাংলাদেশ ও বিশ্বের সর্বশেষ সংবাদ',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="bn"><body>{children}</body></html>;
}
