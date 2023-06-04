"use client"

import { Section } from "@/components/ui/section"
import { Text } from "@/components/ui/text"
import { Title } from "@/components/ui/title"
import Icon from "@/components/icon"

import InView from "../hoc/in-view"

const icons = [
  "react",
  "next",
  "typescript",
  "node",
  "graphql",
  "redux",
  "sass",
  "sst",
  "aws",
]

const Skill = ({ name, index }: { name: string; index: number }) => {
  return (
    <InView
      className={[
        "flex",
        "flex-col",
        "flex-1",
        `${index % 2 === 0 ? "slideInRight" : "slideInLeft"}`,
      ]}
    >
      <Icon key={name} name={name as any} className="flex-1" />
    </InView>
  )
}

const Skills = () => (
  <Section sectionId="technologies">
    <InView className={["duration-1000", "slideInRight"]}>
      <Title size="medium">Technologies</Title>
    </InView>
    <div className="grid min-h-[200px] min-w-full grid-cols-9 items-center gap-4 md-max:mb-8 md-max:mt-10 md-max:grid-cols-3">
      {icons.map((icon, index) => (
        <Skill key={icon} name={icon as any} index={index} />
      ))}
    </div>
    <InView className={["duration-1000", "delay-1000", "fadeIn"]}>
      <div className="flex justify-center">
        <Text type="div" extraClassName="text-md font-semibold text-c4">
          and more!
        </Text>
      </div>
    </InView>
  </Section>
)

export { Skills }
