import { ReactLenis } from "lenis/react";
import "@/styles/globals.css";

import LayoutClient from "./LayoutClient";
import { metadataInfo } from "@/lib/metadata";

export const metadata = metadataInfo;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactLenis
          root
          options={{
            duration: 1,
          }}
        >
          <LayoutClient>{children}</LayoutClient>
        </ReactLenis>
      </body>
    </html>
  );
}
