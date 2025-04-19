import SingleProductPage from '../../../../components/SingleProductPage/SingleProductPage';
export default function Page() {
  return <SingleProductPage type="women-shoes" />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;

  return {
    title: `${product} | Women Shoes | Ecommerce`,
    description: `Shop for ${product} women shoes. Find the perfect fit for your children.`,
  };
}
