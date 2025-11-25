import { ProjectCard } from "@/components/projectCard";

export const metadata = {
  title: 'JCloud Hub',
};

export default function ProjectsHub() {
  return (
    <div className="flex flex-col min-h-screen bg-base-100 text-base-content">
      
      <nav className="navbar bg-base-100 shadow-sm p-1">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-widest text-primary">JCloud HUB</h1>
          <a href="mailto:contact@barrea.lu" className="btn btn-ghost btn-sm">Contact</a>
        </div>
      </nav>

      <section className="hero bg-primary text-primary-content py-5">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in-up">JCloud</h2>
            <p className="text-md md:text-xl mb-4 animate-fade-in-up delay-100">
              Welcome to the entry point of all my apps and websites.
            </p>
          </div>
        </div>
      </section>

      <main id="projects" className="flex-grow container mx-auto p-8 md:p-12">
        
        <h2 className="text-4xl font-extrabold mb-4 text-center">My Digital Creations</h2>
        <p className="text-lg text-center mb-12 opacity-80 max-w-2xl mx-auto">
          Explore a collection of my personal projects, from professional websites to fun web applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <ProjectCard
            title="Julien"
            description="My professional portfolio and main entry point."
            href="https://julien.barrea.lu"
          />

          <ProjectCard
            title="Juflix"
            description="A modern interface for consuming media content."
            href="https://juflix.barrea.lu"
          />

          <ProjectCard
            title="Cocktail Menu"
            description="A digital menu app featuring custom recipes."
            href="/menu"
            isInternal={true}
          />
          
          <ProjectCard
            title="First Web Project"
            description="A throwback to my initial foray into web development."
            href="/highsensations/index.html"
          />

          <ProjectCard
            title="EasyGift"
            description="A simpler way to manage gift lists and occasions."
            href="#"
            status="Coming Soon"
          />

          <ProjectCard
            title="Learning Center"
            description="JLC (Julien Learning Center) is a basic website I created during my studies to store all my summaries."
            href="https://learn.barrea.lu"
          />

          <div className="card bg-base-300 shadow-xl opacity-50 border-2 border-dashed border-base-content/20 flex items-center justify-center p-8">
            <p className="text-center italic text-lg">More apps are on the way...</p>
          </div>

        </div>
      </main>

      {/* 4. Footer */}
      <footer className="footer footer-center p-6 bg-base-200 text-base-content border-t border-base-300">
        <aside>
          <p>
            Powered by Next.js & Tailwind | Built with ❤️ by Julien.
            <br />
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
}