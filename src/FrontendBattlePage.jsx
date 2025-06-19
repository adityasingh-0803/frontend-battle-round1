import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function FrontendBattlePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <video autoPlay muted loop className="w-32 h-32 rounded-full">
            <source src="/assets/loader.mp4" type="video/mp4" />
          </video>
        </div>
      ) : (
        <>
          {/* Navbar */}
          <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-opacity-80 backdrop-blur-md sticky top-0 z-50 dark:bg-gray-800 bg-white">
            <h1 className="text-xl font-bold">Frontend Battle</h1>
            <ul className="flex gap-4">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#showcase" className="hover:underline">Showcase</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Hero Section - Contrast fixed */}
          <section
            id="home"
            className="min-h-screen bg-cover bg-center px-4 pt-24 flex justify-center"
            style={{ backgroundImage: "url('/assets/stats.png')" }}
          >
            <div className="bg-black bg-opacity-60 text-white p-6 rounded-xl backdrop-blur-md text-center max-w-2xl w-full">
              <h2 className="text-4xl font-bold mb-4">Replicate & Innovate</h2>
              <p className="text-lg">Recreate the design with enhancements that impress ✨</p>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="p-10 bg-gray-100 dark:bg-gray-800">
            <h2 className="text-3xl font-semibold mb-6 text-center">Core Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["Cards Layout", "Graph Analytics", "Video Popups", "Parallax Scroll", "Testimonials", "Ripple Effects"].map((feature, i) => (
                <div key={i} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow">
                  <img src="/assets/cards.png" alt="Feature Visual" className="rounded mb-4" />
                  <h3 className="font-bold mb-2">{feature}</h3>
                  <p>Implemented using the media assets provided. Enhancements added for interactivity and polish.</p>
                </div>
              ))}
            </div>
          </section>

          {/* Showcase Section */}
          <section id="showcase" className="p-10 bg-white dark:bg-gray-900">
            <h2 className="text-3xl font-semibold text-center mb-6">Video Showcase</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { file: "features-services.mp4", title: "Feature Highlights" },
                { file: "homepage.mp4", title: "Homepage Walkthrough" },
                { file: "scroll and pop up.mp4", title: "Scroll & Popup Animation" },
                { file: "ripple effect.mp4", title: "Ripple Visual Effect" }
              ].map(({ file, title }, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                  <video
                    controls
                    className="w-full rounded-xl"
                    poster="/assets/cards.png"
                  >
                    <source src={`/assets/${file}`} type="video/mp4" />
                  </video>
                  <p className="text-center mt-3 font-medium">{title}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="p-10 text-center">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p>Reach out via GitHub or email after submitting your challenge. Good luck!</p>
          </section>
        </>
      )}
    </div>
  );
}
