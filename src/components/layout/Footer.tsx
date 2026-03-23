import Link from 'next/link';
import { Instagram, Youtube } from 'lucide-react';
import { NilaiBotanicalTexture } from '@/components/ui/HeritageUI';

export default function Footer() {
    return (
        <footer className="bg-brand pt-10 pb-6 px-8 md:px-16 relative overflow-hidden font-manrope text-bg">
            {/* Nilai Botanical Corners */}
            <NilaiBotanicalTexture className="absolute top-10 right-10 opacity-[0.05] invert brightness-0" />
            <NilaiBotanicalTexture className="absolute bottom-10 left-10 opacity-[0.05] rotate-180 invert brightness-0" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
                {/* Left side: About Zencura */}
                <div className="md:col-span-6 flex flex-col">
                    <Link href="/" className="text-3xl font-canela font-bold tracking-[0.25em] text-bg mb-8 block uppercase hover:text-accent transition-colors">
                        ZENCURA
                    </Link>
                    <p className="text-lg text-bg/70 max-w-md mb-8 leading-relaxed font-source-serif italic">
                        "Future of Preventive Health. Advancing healthcare from reactive treatment to conscious, preventive living. We are building healthcare institutions designed not only for today's patients, but for tomorrow's civilization."
                    </p>
                </div>

                {/* Middle section: Quick Links */}
                <div className="md:col-span-3">
                    <h4 className="font-canela text-xl font-bold text-bg mb-8 uppercase tracking-widest">Quick Links</h4>
                    <ul className="space-y-3 text-[12px] font-bold uppercase tracking-[0.15em] text-bg/60">
                        <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                        <li><Link href="/why-zencura" className="hover:text-accent transition-colors">Why Zencura</Link></li>
                        <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                        <li><Link href="/founder" className="hover:text-accent transition-colors">Founder</Link></li>
                        <li><Link href="/research" className="hover:text-accent transition-colors">Research</Link></li>
                        <li><Link href="/institutions" className="hover:text-accent transition-colors">Institutions</Link></li>
                        <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Right section: Social Media Icons */}
                <div className="md:col-span-3">
                    <h4 className="font-canela text-xl font-bold text-bg mb-8 uppercase tracking-widest">Social Media</h4>
                    <div className="flex space-x-6 text-bg/60">
                        <Link href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-bg/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-500">
                            <Instagram size={18} strokeWidth={1} />
                        </Link>
                        <Link href="https://whatsapp.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-bg/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                                <path d="M9 10a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                            </svg>
                        </Link>
                        <Link href="https://x.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-bg/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                            </svg>
                        </Link>
                        <Link href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-bg/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-500">
                            <Youtube size={18} strokeWidth={1} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom: Company Terms and Policy */}
            <div className="max-w-7xl mx-auto mt-12 pt-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[10px] font-bold uppercase tracking-[0.4em] text-bg/30 border-t border-bg/10">
                <p>© 2026 Zencura Institute. Civilization Architecture.</p>
                <div className="flex space-x-12">
                    <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
