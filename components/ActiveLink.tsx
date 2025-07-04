'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function ActiveLink({ href, children, className = '' }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`no-underline    ${
        isActive ? 'text-blue-500' : 'text-[#000000]'
      } ${className}`}
    >
      {children}
    </Link>
  );
}
