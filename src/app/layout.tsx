import "./globals.css";

export const metadata = {
  title: "College Compass",
  description: "Explore colleges by stream and category",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
