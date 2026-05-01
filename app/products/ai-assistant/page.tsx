import { MessageSquare } from 'lucide-react'
import { PRODUCTS } from '@/app/components/landing/content'
import { ProductPageTemplate } from '../ProductPageTemplate'

const product = PRODUCTS.find((p) => p.slug === 'ai-assistant')!

export const metadata = {
  title: 'CyfroAssistant — AI Security Advisor | CyfroSec',
  description: product.description,
}

export default function AiAssistantPage() {
  return (
    <ProductPageTemplate
      name={product.name}
      tagline={product.tagline}
      description={product.description}
      icon={MessageSquare}
      capabilities={product.capabilities}
      benefits={product.benefits}
    />
  )
}
