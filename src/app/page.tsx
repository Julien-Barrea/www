import Link from "next/link";

export const metadata = {
  title: 'J Cloud',
};

/* export const metadata = {
  title: 'About Us – My Website',
  description: 'Meet our amazing team and learn our story.',
  openGraph: {
    title: 'About Us – My Website',
    description: 'Learn more about our company.',
    url: 'https://example.com/about',
    siteName: 'My Website',
    images: [
      {
        url: 'https://example.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us – My Website',
    description: 'Our story and team.',
    creator: '@myhandle',
    images: ['https://example.com/twitter-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
}; */

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-around min-h-screen p-4">
      <div className="btn btn-secondary btn-block btn-circle max-w-lg">
        <a href="https://julien.barrea.lu">Julien</a>
      </div>
      <div className="btn btn-secondary btn-block btn-circle max-w-lg">
        <a href="https://juflix.barrea.lu">Juflix</a>
      </div>
      <div className="btn btn-secondary btn-block btn-circle max-w-lg">
        <Link href="/menu">Menu</Link>
      </div>

      <div className="btn btn-secondary btn-block btn-circle max-w-lg">
        <a href="/highsensations/index.html">First Web Project</a>
      </div>

      <div className="btn btn-secondary btn-block btn-circle max-w-lg">
        <a href="#">EasyGift (coming soon)</a>
      </div>
    </div>
  );
}
