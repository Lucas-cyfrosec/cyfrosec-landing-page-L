import { BrainCircuit } from 'lucide-react'
import { PRODUCTS } from '@/app/components/landing/content'
import { ProductPageTemplate } from '../ProductPageTemplate'

const product = PRODUCTS.find((p) => p.slug === 'ai-insights')!

export const metadata = {
  title: 'Cyfro AI Insights — Explainable Risk Prioritization | CyfroSec',
  description: product.description,
}

export default function AiInsightsPage() {
  return (
    <ProductPageTemplate
      name={product.name}
      tagline={product.tagline}
      description={product.description}
      icon={BrainCircuit}
      capabilities={product.capabilities}
      benefits={product.benefits}
    />
  )
}
