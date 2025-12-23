
import React, { useState, useEffect } from 'react';
import { 
  Music, 
  Film, 
  MapPin, 
  Users, 
  Ticket, 
  Coffee, 
  Camera, 
  PartyPopper,
  Sparkles,
  ArrowRight,
  Globe,
  Compass,
  Zap,
  Star,
  Heart,
  MessageCircle,
  TrendingUp,
  Map as MapIcon,
  Menu,
  X
} from 'lucide-react';
import { FloatingElement } from './components/FloatingElement';
import { getCityVibe } from './services/geminiService';

const App: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [vibe, setVibe] = useState('FETCHING THE NCR PULSE...');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchVibe = async () => {
      const cityVibe = await getCityVibe();
      setVibe(cityVibe?.toUpperCase() || 'DELHI IS VIBING RIGHT NOW! ⚡️');
    };
    fetchVibe();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setEmail('');
    }
  };

  const tabs = [
    { 
      title: "NCR Underground", 
      icon: <MapPin className="w-6 h-6" />, 
      content: "Discover secret speakeasies in GK, indie bookstore hangs in Lodhi, and the late-night paratha trails only the realest roomies know." 
    },
    { 
      title: "Cult Curation", 
      icon: <Ticket className="w-6 h-6" />, 
      content: "From acoustic nights at The Dhan Mill to high-octane techno pop-ups in Chhatarpur. We curate the NCR social map for the bold." 
    },
    { 
      title: "Matched Living", 
      icon: <Users className="w-6 h-6" />, 
      content: "Find people who share your frequency. Whether it's Gurugram's hustle or Noida's quiet cafes, find roomies who get your vibe." 
    }
  ];

  const cityHighlights = [
    "SUNSET SESSIONS @ THE DHAN MILL", "TECHNO TAKEOVER @ CHHATARPUR", "ART POP-UP @ BIKANER HOUSE",
    "JAZZ NIGHT @ GK II", "SUNDAY BRUNCH @ 32ND AVENUE", "NIGHT MARKET @ NOIDA 104", "OPEN MIC @ CYBER HUB",
    "VINTAGE DROP @ SAKET", "ROOFTOP CINEMA @ GURUGRAM", "KARAOKE @ DLF AVENUE"
  ];

  return (
    <div className="relative min-h-screen flex flex-col font-space bg-[#050505] text-white">
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>

      {/* Floating Animated Stickers - Background Layer */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <FloatingElement 
          icon={<div className="p-3 md:p-4 bg-yellow-400 rounded-xl sticker rotate-12 flex items-center gap-2 shadow-2xl"><Film className="text-black w-4 h-4 md:w-5 md:h-5" /><span className="text-[10px] font-black text-black hidden sm:inline">CINEMA</span></div>} 
          initialX="left-[5%] md:left-[8%]" initialY="top-[15%] md:top-[20%]" delay={0} duration={8} 
        />
        <FloatingElement 
          icon={<div className="p-3 md:p-4 bg-cyan-400 rounded-full sticker -rotate-6 flex items-center gap-2 shadow-2xl"><Music className="text-black w-4 h-4 md:w-5 md:h-5" /><span className="text-[10px] font-black text-black hidden sm:inline">GIGS</span></div>} 
          initialX="right-[5%] md:right-[12%]" initialY="top-[12%] md:top-[18%]" delay={1} duration={10} 
        />
        <FloatingElement 
          icon={<div className="p-2 md:p-3 bg-pink-500 rounded-xl sticker rotate-6 shadow-2xl"><PartyPopper className="text-white w-5 h-5 md:w-6 md:h-6" /></div>} 
          initialX="left-[10%] md:left-[15%]" initialY="bottom-[20%] md:bottom-[25%]" delay={2} duration={7} 
        />
        <FloatingElement 
          icon={<div className="p-4 md:p-5 bg-purple-600 rounded-full sticker -rotate-12 shadow-2xl"><Star className="text-white w-5 h-5 md:w-7 md:h-7" /></div>} 
          initialX="right-[10%] md:right-[15%]" initialY="bottom-[12%] md:bottom-[18%]" delay={1.5} duration={11} 
        />
        <FloatingElement 
          icon={<div className="p-2 md:p-3 bg-green-400 rounded-full sticker rotate-45 flex items-center gap-2 shadow-2xl"><Zap className="text-black w-4 h-4 md:w-5 md:h-5" /><span className="text-[10px] font-black text-black hidden sm:inline">NCR HYPE</span></div>} 
          initialX="left-[40%] md:left-[45%]" initialY="top-[5%]" delay={0.5} duration={9} 
        />
      </div>

      {/* Navigation */}
      <header className="relative z-[100] w-full px-6 py-8 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-pink-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-all border-2 border-white/20 shadow-lg shadow-pink-500/20">
            <Users className="text-white w-7 h-7 md:w-8 md:h-8" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bungee tracking-tight">ROOMIES</h1>
            <span className="text-[9px] font-bold tracking-[0.4em] text-pink-500 block uppercase">Social</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {['Feed', 'Map', 'Collabs', 'Safety'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-black uppercase tracking-[0.2em] hover:text-pink-500 transition-colors">
              {item}
            </a>
          ))}
          <button className="px-8 py-3 bg-white text-black rounded-full font-bungee text-[10px] hover:bg-pink-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-xl">
            GET INVITED
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button className="lg:hidden p-2 text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center gap-8">
          {['Feed', 'Map', 'Collabs', 'Safety'].map((item) => (
            <a key={item} href="#" className="text-2xl font-bungee text-white hover:text-pink-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
          <button className="px-10 py-4 bg-pink-600 text-white rounded-full font-bungee text-sm">
            CLAIM ACCESS
          </button>
        </div>
      )}

      {/* Marquee - Event Ticker */}
      <div className="relative z-50 bg-white py-3 md:py-4 overflow-hidden border-y-2 border-black">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...cityHighlights, ...cityHighlights].map((text, i) => (
            <span key={i} className="mx-8 md:mx-12 text-[10px] md:text-xs font-bungee tracking-widest text-black flex items-center gap-3">
              <Zap className="w-3 h-3 md:w-4 md:h-4 text-pink-600 fill-current" /> {text}
            </span>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <main className="relative z-20 flex-grow flex flex-col items-center justify-center px-6 pt-16 md:pt-24 pb-32 max-w-7xl mx-auto w-full">
        
        {/* Real-time Vibe Indicator */}
        <div className="mb-12 px-6 py-3 md:px-8 md:py-4 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full flex items-center gap-4 animate-float-slow bg-black/40 shadow-2xl border-white/20">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </div>
          <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-cyan-50 uppercase italic truncate max-w-[250px] md:max-w-none">
            {vibe}
          </p>
        </div>

        {/* Hero Headlines */}
        <div className="text-center w-full mb-16">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bungee leading-[0.9] mb-8 relative">
            <span className="block text-outline opacity-60">EXPERIENCE</span>
            <span className="block text-white">THE NCR</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              PULSE.
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl font-light max-w-3xl mx-auto mb-14 leading-relaxed tracking-wide px-4">
            The elite social discovery layer for <span className="text-white font-medium underline decoration-pink-500/50">Delhi, Noida & Gurugram</span>. Meet your tribe, find cult spots, and discover the best <span className="text-white font-bold">Roomies</span>.
          </p>

          {/* Signup Form */}
          <div className="w-full max-w-2xl mx-auto relative px-4">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 p-2 bg-white/5 border-2 border-white/10 rounded-3xl md:rounded-full backdrop-blur-3xl focus-within:border-pink-500/50 transition-all shadow-2xl">
              <div className="flex-grow flex items-center px-6 py-3 md:py-0">
                <MessageCircle className="w-5 h-5 text-gray-500 mr-4" />
                <input 
                  type="email" 
                  required
                  placeholder="Drop your email for the early drop..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent outline-none text-white text-base md:text-lg placeholder-gray-600"
                />
              </div>
              <button 
                type="submit"
                className="bg-white text-black hover:bg-pink-600 hover:text-white px-10 py-5 rounded-2xl md:rounded-full font-bungee text-[11px] md:text-xs flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-xl"
              >
                {isSubmitted ? 'THANKS! CHECK EMAIL' : 'GET ACCESS'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-8 text-[9px] md:text-[10px] font-black uppercase text-gray-500 tracking-[0.2em]">
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-lg shadow-green-500/40"></div> 15k+ Waiting</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-lg shadow-purple-500/40"></div> Live in Delhi NCR</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-pink-500 shadow-lg shadow-pink-500/40"></div> Roomies Verified</div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <section id="feed" className="w-full pt-32 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {tabs.map((tab, idx) => (
              <div key={idx} className="glass-card p-10 md:p-12 rounded-[2.5rem] flex flex-col group h-full">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-pink-600 group-hover:text-white transition-colors duration-500">
                  {React.cloneElement(tab.icon as React.ReactElement, { className: "w-7 h-7 md:w-8 md:h-8" })}
                </div>
                <h3 className="text-2xl md:text-3xl font-bungee mb-4 text-white group-hover:text-pink-500 transition-colors">{tab.title}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed flex-grow">{tab.content}</p>
                <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Heatmap Section Mockup */}
        <section id="map" className="w-full py-32">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <span className="text-pink-500 font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">LIVE VIBE MAPPING</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bungee mb-8 leading-tight">
                NEVER WONDER<br/><span className="text-cyan-400">WHERE TO GO</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl font-light mb-10 leading-relaxed">
                Our real-time Heatmap tracks social energy across NCR. From acoustic nights at 32nd Avenue to rooftop sundowners in Noida, witness the city breathe in real-time.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Cyber Hub', '32nd Ave', 'Dhan Mill', 'Sec 104', 'GK II', 'Saket'].map(spot => (
                  <span key={spot} className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold hover:bg-white hover:text-black transition-all cursor-pointer">
                    {spot}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative group">
              <div className="aspect-square sm:aspect-video lg:aspect-square bg-gradient-to-br from-gray-900 to-black rounded-[3rem] md:rounded-[4rem] border-2 border-white/10 overflow-hidden relative shadow-2xl">
                {/* Fake UI Background */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-30"></div>
                
                {/* Heatmap Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-pink-500/20 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-cyan-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Floating Map Labels */}
                <div className="absolute top-10 right-10 p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 animate-float-slow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-600 flex items-center justify-center">
                      <Music className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black">CYBER HUB</div>
                      <div className="text-[8px] text-gray-400">HYPE: PEAK (9.2)</div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="relative">
                      <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full"></div>
                      <Compass className="w-32 h-32 md:w-48 md:h-48 text-white/80 animate-spin-slow opacity-60" style={{ animationDuration: '60s' }} />
                   </div>
                </div>

                <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bungee text-lg md:text-xl">NCR HEATMAP</h4>
                    <span className="px-3 py-1 bg-red-600 rounded-full text-[8px] font-black animate-pulse uppercase tracking-widest">Live Now</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    <span>Activity up 42% in Gurugram Sector 29</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-50 bg-black border-t-2 border-white/5 pt-24 pb-12 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-pink-500/20">
                 <Users className="text-white w-7 h-7" />
               </div>
               <span className="font-bungee text-2xl">ROOMIES SOCIAL</span>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed max-w-md font-light">
              Building the digital fabric for NCR's most electric social connections. We're here to make sure you never miss the city's pulse.
            </p>
          </div>
          <div>
            <h5 className="font-bungee text-sm mb-8 text-white tracking-widest uppercase">Explore</h5>
            <ul className="space-y-4 text-gray-500 font-bold text-xs uppercase tracking-widest">
              <li><a href="#" className="hover:text-pink-500 transition-colors">Vibe Feed</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">The Heatmap</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Curated Spots</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Roomie Matching</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bungee text-sm mb-8 text-white tracking-widest uppercase">Community</h5>
            <ul className="space-y-4 text-gray-500 font-bold text-xs uppercase tracking-widest">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Ambassadors</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-gray-600">
          <p>© 2025 ROOMIES SOCIAL. ALL VIBES PROTECTED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">TikTok</a>
            <a href="#" className="hover:text-white transition-colors">Twitter (X)</a>
          </div>
          <p className="text-pink-600/50">HANDCRAFTED IN DELHI NCR</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
