/* eslint-disable react/no-unescaped-entities */

import { Section } from "@/components/ui/section"
import { Text } from "@/components/ui/text"
import { Title } from "@/components/ui/title"

const parts = [
  "Hey there!",
  "I'm Diogo, a software engineer from Lisbon.",
  "I began my journey in 2013 with a degree in Telecommunications Engineering and Computer Science from ISCTE-IUL.",
  "Since then, I've been dedicated to continuous learning, receiving guidance from experts along the way.",
  "I pride myself on being proactive, detail-oriented, and delivering high-quality work that meets user and stakeholder needs.",
  "I specialize in Typescript, React.js, and Node.js, and I have a strong passion for Web3 and impact-driven projects.",
]

const About = () => (
  <Section sectionId="about">
    <Title size="medium">About me</Title>
    <div className="flex flex-col">
      {parts.map((part, i) => {
        return (
          <div key={i}>
            <Text type="p">{part}</Text>
            <div className="mt-2" />
          </div>
        )
      })}
    </div>
  </Section>
)

export { About }
