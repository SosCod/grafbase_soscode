import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'SosCode',
  description: 'Comparte sistemas web. App Y mas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
            {children}  
        </main>
        <Footer />
      </body>
    </html>
  )
}
