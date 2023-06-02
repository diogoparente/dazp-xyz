/* eslint-disable react/no-unescaped-entities */

import { Section } from "@/components/ui/section"
import { Title } from "@/components/ui/title"
import Timeline from "@/components/time-line"

const Career = () => (
  <Section sectionId="career">
    <Title size="medium">Career</Title>
    <div className="flex min-h-full flex-1 flex-col">
      <Timeline />
    </div>
  </Section>
)

export { Career }
