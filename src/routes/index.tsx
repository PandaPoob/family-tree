import { getFamilyData } from '@/api/family'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  ssr: 'data-only',
  component: FamilyTreeHomePage,
  loader: async () => await getFamilyData(),
})

function FamilyTreeHomePage() {
  const familyMembers = Route.useLoaderData()

  console.log(familyMembers)

  return (
    <div>
      <section>Welcome</section>
    </div>
  )
}
