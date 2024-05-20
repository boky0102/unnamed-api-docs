import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/subject')({
  component: () => <div>Hello /subject!</div>
})