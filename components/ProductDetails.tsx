'use client';

import Image from 'next/image';
import React from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface Props {
  product: Product;
}

const ProductDetails: React.FC<Props> = ({ ...product }) => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* <h1 className="text-3xl font-bold mb-4 text-center">{title}</h1> */}

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          {/* <Image
            src={product.thumbnail}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-lg w-full h-auto object-cover"
          /> */}
        </div>

        <div className="w-full md:w-1/2 space-y-3">
          <p className="text-lg">
            {/* <span className="font-semibold">Price:</span> ${product.price} */}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Discount Percentage:</span>{' '}
            {/* {product.discountPercentage} */}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Rating:</span>{' '}
            <span className="text-yellow-500">
              {/* {'★'.repeat(Math.round(product.rating))} */}
            </span>
          </p>
          <p className="text-lg">
            {/* <span className="font-semibold">Stock:</span> {product.stock} */}
          </p>
          <p className="text-lg">
            {/* <span className="font-semibold">Brand:</span> {product.brand} */}
          </p>
          <p className="text-lg">
            {/* <span className="font-semibold">Category:</span> {product.category} */}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Product Description</h2>
        {/* <p className="text-gray-700">{product.description}</p> */}
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Product Images</h2>
        <div className="flex flex-wrap gap-4">
          {/* {product.images.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`Product image ${idx + 1}`}
              width={150}
              height={150}
              className="rounded-lg object-cover"
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
