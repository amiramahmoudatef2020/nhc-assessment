// components/MobileMenu.tsx
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden px-4 py-4 space-y-2 bg-gray-100 border-t border-gray-200">
      <Link
        href="/products"
        className="block text-gray-700 hover:text-blue-700 text-base font-medium"
      >
        Products
      </Link>
      <Link
        href="/about"
        className="block text-gray-700 hover:text-blue-700 text-base font-medium"
      >
        About
      </Link>
    </div>
  );
}
