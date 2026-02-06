import { Heart } from 'lucide-react';

interface ValentineLayoutProps {
  children: React.ReactNode;
}

export function ValentineLayout({ children }: ValentineLayoutProps) {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-pink-100">
      {/* Main content */}
      <div className="relative z-10 w-full px-4 py-8">
        {children}
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 left-0 right-0 z-20 text-center text-sm text-gray-500">
        © 2026. Built with <Heart className="inline w-3.5 h-3.5 text-pink-500 fill-current" /> using{' '}
        <a 
          href="https://caffeine.ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-pink-600 transition-colors underline underline-offset-2"
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}
