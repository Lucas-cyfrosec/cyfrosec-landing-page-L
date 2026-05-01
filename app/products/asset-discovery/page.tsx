import { ScanSearch } from 'lucide-react'
import { PRODUCTS } from '@/app/components/landing/content'
import { ProductPageTemplate } from '../ProductPageTemplate'

const product = PRODUCTS.find((p) => p.slug === 'asset-discovery')!

export const metadata = {
  title: 'Asset Discovery — Complete Environment Inventory | CyfroSec',
  description: product.description,
}

export default function AssetDiscoveryPage() {
  return (
    <ProductPageTemplate
      name={product.name}
      tagline={product.tagline}
      description={product.description}
      icon={ScanSearch}
      capabilities={product.capabilities}
      benefits={product.benefits}
    />
  )
}
