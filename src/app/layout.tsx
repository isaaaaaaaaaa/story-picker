import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: "Story picker",
  description: "Simple story picker for picky bedtime readers",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">{children}</div>
        <footer className="text-xs sticky bottom-0 text-center">
          Backgound photo by{" "}
          <a href="https://unsplash.com/@sharonmccutcheon?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Alexander Grey
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/pink-and-green-bokeh-lights-7EK5WABscqw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </footer>
      </body>
    </html>
  );
}
