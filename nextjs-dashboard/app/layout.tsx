import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'${montserrat.className} antialiased'}>
        <h1>TITULOTE</h1>
        Parte del layout
        {children}
      </body>
    </html>
  );
}
