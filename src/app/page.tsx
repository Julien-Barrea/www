import Link from "next/link";

export default function Home() {
  return (
    <>
      <head>
        <title>J Cloud</title>
      </head>
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
    </>
  );
}
