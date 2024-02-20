export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <h2>Layout of Coffee</h2>
        {children}
        </>
  );
}
