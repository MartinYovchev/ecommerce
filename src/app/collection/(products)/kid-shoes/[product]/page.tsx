import SingleProductPage from '../../../../components/SingleProductPage/SingleProductPage';
import fs from 'fs/promises';
import path from 'path';

interface Product {
  type: string;
  name: string;
}

interface Data {
  items: Product[];
}

export async function generateStaticParams() {
  const dataPath = path.join(process.cwd(), 'public/data/data.json');
  const jsonData = await fs.readFile(dataPath, 'utf8');
  const data: Data = JSON.parse(jsonData);
  const kidShoes = data.items.filter((item) => item.type === 'kid-shoes');

  return kidShoes.map((shoe) => ({
    product: shoe.name,
  }));
}

export default function Page() {
  return <SingleProductPage type="kid-shoes" />;
}
