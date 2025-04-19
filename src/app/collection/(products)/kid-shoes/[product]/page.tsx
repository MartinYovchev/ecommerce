import SingleProductPage from '../../../../components/SingleProductPage/SingleProductPage';
export default function Page() {
  return <SingleProductPage type="kid-shoes" />;
}

export async function generateMetadata({
  params,
}: {
  params: { product: string };
}) {
  const productName = await params.product;

  return {
    title: `${productName} | Kids Shoes | Ecommerce`,
    description: `Shop for ${productName} kids shoes. Find the perfect fit for your children.`,
  };
}
