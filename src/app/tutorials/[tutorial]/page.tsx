import { notFound } from "next/navigation"
import TutorialClient from "./TutorialClient"
import tutorial_1 from "@/content/tutorials/tutorial_1.mdx"
import tutorial_2 from "@/content/tutorials/tutorial_2.mdx"
import tutorial_3 from "@/content/tutorials/tutorial_3.mdx"

const tutorialMap: Record<string, React.ComponentType> = {
  tutorial_1,
  tutorial_2,
  tutorial_3,
}

export default async function TutorialPage({
  params,
}: {
  params: Promise<{ tutorial: string }>
}) {
  const { tutorial } = await params

  const MdxContent = tutorialMap[tutorial]
  if (!MdxContent) notFound()

  return (
    <TutorialClient tutorial={tutorial}>
      <MdxContent />   {/* ← rendered here on server, passed as children */}
    </TutorialClient>
  )
}

export function generateStaticParams() {
  return Object.keys(tutorialMap).map((tutorial) => ({ tutorial }))
}