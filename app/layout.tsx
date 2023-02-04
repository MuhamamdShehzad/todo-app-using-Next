import { ChakraProvider } from "@chakra-ui/react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ChakraProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ChakraProvider>
  );
}
