import { getProductById } from '../../../lib/api/products';
import ProductDetails from '../../../components/ProductDetails';
import { notFound } from 'next/navigation';
import { getSafeParams } from '../../utils/params';

export default async function Page(ctx: { params: { id: string } }) {
  let id: string;

  try {
    const params = await getSafeParams(ctx, ['id']);
    id = params.id;
  } catch {
    return notFound();
  }

  const product = await getProductById(id);
  if (!product) return notFound();

  return <ProductDetails product={product} />;
}
