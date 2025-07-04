'use client';

import Image from 'next/image';
import Link from 'next/link';
interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  onMoreClick?: () => void;
  thumbnail: string;
  id: string;
}

export default function ProductCard({
  image,
  title,
  description,
  price,
  onMoreClick,
  thumbnail,
  id,
}: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-image">
        {/* <Image src={thumbnail} alt={title} width={200} height={150} /> */}
      </div>

      <h3 className="product-title">{title}</h3>

      <p className="product-description">{description}</p>

      <div className="product-footer">
        <span className="product-price">Price : {price}</span>

        <Link href={`/products/${id}`} className="more-button">
          More
        </Link>
      </div>
    </div>
  );
}
