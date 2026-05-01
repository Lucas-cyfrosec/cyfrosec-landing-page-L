import { Cpu } from 'lucide-react'
import { PRODUCTS } from '@/app/components/landing/content'
import { ProductPageTemplate } from '../ProductPageTemplate'

const product = PRODUCTS.find((p) => p.slug === 'cyfroagent')!

export const metadata = {
  title: 'CyfroAgent — Lightweight Agent, Enterprise Scanning | CyfroSec',
  description: product.description,
}

export default function CyfroAgentPage() {
  return (
    <ProductPageTemplate
      name={product.name}
      tagline={product.tagline}
      description={product.description}
      icon={Cpu}
      capabilities={product.capabilities}
      benefits={product.benefits}
    />
  )
}
