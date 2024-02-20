export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
          <h2>Layout of Cold</h2>
          {children}
          </>
    );
  }
  