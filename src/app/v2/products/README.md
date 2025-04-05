# Product Pages

This directory contains product category pages for the e-commerce site.

## Directory Structure

- `men-shoes/` - Men&apos;s shoes collection
- `women-shoes/` - Women&apos;s shoes collection
- `kid-shoes/` - Kids&apos; shoes collection

## Adding a New Product Category

To add a new product category:

1. Create a new directory for your category (e.g., `running-shoes/`)
2. Create a `page.tsx` file with the basic structure:

```tsx
export default function CategoryPage() {
  return (
    <div
      style={{
        padding: '100px 20px 40px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <h1>Category Name</h1>
      <p>Products coming soon...</p>
    </div>
  );
}
```

3. Update the navbar in `src/app/v2/components/Navbar/Navbar.tsx` to include a link to your new category

## Future Development

For a more robust solution:

- Create reusable product card components
- Implement product filtering and search
- Add pagination for product listings
- Connect to a product database or API
