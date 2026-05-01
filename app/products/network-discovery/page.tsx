import { Network } from 'lucide-react'
import { PRODUCTS } from '@/app/components/landing/content'
import { ProductPageTemplate } from '../ProductPageTemplate'

const product = PRODUCTS.find((p) => p.slug === 'network-discovery')!

export const metadata = {
  title: 'Network Discovery — Internal Attack Surface Mapping | CyfroSec',
  description: product.description,
}

export default function NetworkDiscoveryPage() {
  return (
    <ProductPageTemplate
      name={product.name}
      tagline={product.tagline}
      description={product.description}
      icon={Network}
      capabilities={product.capabilities}
      benefits={product.benefits}
    />
  )
}
