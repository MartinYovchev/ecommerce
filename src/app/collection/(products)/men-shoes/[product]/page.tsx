import SingleProductPage from '../../../../components/SingleProductPage/SingleProductPage';
export default function Page() {
  return <SingleProductPage type="men-shoes" />;
}

export async function generateMetadata({
  params,
}: {
  params: { product: string };
}) {
  const productName = params.product;

  return {
    title: `${productName} | Men Shoes | Ecommerce`,
    description: `Shop for ${productName} men shoes. Find the perfect fit for your children.`,
  };
}
