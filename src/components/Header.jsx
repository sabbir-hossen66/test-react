import { ShoppingCart } from "lucide-react";

  const Header = () => {
    return (
     <div className=" bg-black text-white overflow-x-hidden">
      {/* Scrolling Announcement Banner */}
      <div className="bg-emerald-600 py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-sm font-medium mx-8">
            🚀 Launch event • Get one year FREE • Only for limited use • 🚀 Launch event • Get one year FREE • Only for
            limited use • 🚀 Launch event • Get one year FREE.
          </span>
        </div>
      </div>

      {/* Navigation Header */}
{/* Navigation Header */}
<header className="sticky top-0 z-50 px-6 py-4 flex items-center justify-between bg-black bg-opacity-90 backdrop-blur-md shadow-md">
  <div className="flex items-center space-x-2">
    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
      <span className="text-black font-bold text-lg">C</span>
    </div>
    <span className="text-xl font-semibold">CirriNote</span>
  </div>

  <nav className="hidden md:flex items-center space-x-8">
    <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
    <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
    <a href="#faqs" className="text-gray-300 hover:text-white transition-colors">FAQs</a>
    <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
  </nav>

  <button className="inline-flex items-center justify-center bg-white text-black hover:bg-gray-100 transition-colors rounded-full px-6 h-10 font-medium">
    <ShoppingCart className="w-4 h-4 mr-2" />
    Try Now
  </button>
</header>


      {/* Hero Section */}
      <main className="flex-1 px-6 py-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">Note Taking</h1>
                <h2 className="text-5xl md:text-7xl font-bold text-emerald-400">Redefined</h2>
              </div>

              <p className="text-xl text-gray-300 max-w-lg">
                Transform your ideas into organized, actionable notes with our revolutionary note-taking platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center h-11 px-8 py-2 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-md transition-colors">
                  Get Started Free
                </button>
                <button className="inline-flex items-center justify-center h-11 px-8 py-2 border border-gray-600 text-white hover:bg-gray-800 bg-transparent rounded-md font-medium transition-colors">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Content - Octopus Character */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow effect */}
                <div className="w-96 h-96 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full opacity-20 blur-3xl absolute inset-0"></div>
                <div className="relative z-10 w-80 h-80 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    {/* Octopus character placeholder */}
                    <div className="w-32 h-32 bg-emerald-500 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-4xl">🐙</span>
                    </div>
                    {/* Notepad */}
                    <div className="bg-yellow-100 text-black p-3 rounded-lg transform -rotate-12 shadow-lg">
                      <p className="text-sm font-handwriting">Ideas for World</p>
                      <p className="text-sm font-handwriting">Domination</p>
                    </div>
                    {/* Glasses indicator */}
                    <div className="text-xs text-gray-400">👓 Smart AI Assistant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
    );
  };
  
  export default Header;