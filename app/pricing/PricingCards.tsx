'use client'

import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import {
  Card,
  Header,
  Plan,
  PlanName,
  Badge,
  Description,
  Body,
  List,
  ListItem,
} from '@/components/ui/pricing-card'
import { Button } from '@/components/ui/button'
import { pricingPlans } from './pricing-data'

export default function PricingCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {pricingPlans.map((plan) => (
        <Card
          key={plan.name}
          className={`max-w-none ${plan.highlighted ? 'border-primary/40' : ''}`}
        >
          <Header glassEffect={plan.highlighted}>
            <Plan>
              <PlanName>
                {plan.name}
              </PlanName>
              {plan.badge ? <Badge>{plan.badge}</Badge> : null}
            </Plan>
            <Description>{plan.info}</Description>
          </Header>

          <Body>
            <List>
              {plan.features.map((feature) => (
                <ListItem key={feature.text}>
                  <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  {feature.text}
                </ListItem>
              ))}
            </List>

            <Button
              asChild
              variant={plan.highlighted ? 'default' : 'outline'}
              className="w-full"
            >
              <Link href="/contact">
                Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Body>
        </Card>
      ))}
    </div>
  )
}
