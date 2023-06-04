/* eslint-disable react/no-unescaped-entities */

import { Section } from "@/components/ui/section"
import { Title } from "@/components/ui/title"
import Timeline from "@/components/time-line"

import InView from "../hoc/in-view"

const Career = () => (
  <Section sectionId="career">
    <InView className={["duration-1000", "slideInRight"]}>
      <Title size="medium">Career</Title>
    </InView>
    <div className="flex min-h-full flex-1 flex-col">
      <Timeline />
    </div>
  </Section>
)

export { Career }
