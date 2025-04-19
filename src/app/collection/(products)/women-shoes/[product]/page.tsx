import SingleProductPage from '../../../../components/SingleProductPage/SingleProductPage';
export default function Page() {
  return <SingleProductPage type="women-shoes" />;
}

export async function generateMetadata({
  params,
}: {
  params: { product: string };
}) {
  const productName = await params.product;

  return {
    title: `${productName} | Women Shoes | Ecommerce`,
    description: `Shop for ${productName} women shoes. Find the perfect fit for your children.`,
  };
}
