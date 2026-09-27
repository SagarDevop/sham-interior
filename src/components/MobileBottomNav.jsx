import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Layers, Image, Users, MessageSquare } from 'lucide-react';

export default function MobileBottomNav() {
  const location = useLocation();

  const items = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Layers },
    { name: 'Portfolio', href: '/portfolio', icon: Image },
    { name: 'Specialist', href: '/specialist', icon: Users },
    { name: 'Contact', href: '/contact', icon: MessageSquare },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FAF9F6]/92 backdrop-blur-lg border-t border-[#E8E2D8] px-2 py-1.5 shadow-[0_-4px_20px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {items.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all duration-200 ${
                active ? 'text-[#171717]' : 'text-[#8A847C] hover:text-[#171717]'
              }`}
            >
              <div
                className={`p-1 rounded-lg transition-colors ${
                  active ? 'bg-[#F1E2CC] text-[#7A695C]' : ''
                }`}
              >
                <Icon size={18} strokeWidth={active ? 2.2 : 1.8} />
              </div>
              <span className={`text-[10px] mt-0.5 font-['Poppins'] ${active ? 'font-semibold' : 'font-medium'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
