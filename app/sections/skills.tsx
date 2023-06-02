import { Section } from "@/components/ui/section"
import { Text } from "@/components/ui/text"
import { Title } from "@/components/ui/title"
import Icon from "@/components/icon"

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

const Skills = () => (
  <Section sectionId="technologies">
    <Title size="medium">Technologies</Title>
    <div className="grid min-h-[200px] min-w-full grid-cols-9 gap-4 md-max:mb-8 md-max:mt-10 md-max:grid-cols-3">
      {icons.map((icon) => (
        <Icon key={icon} name={icon as any} />
      ))}
    </div>
    <div className="flex justify-center">
      <Text type="div">and more!</Text>
    </div>
  </Section>
)

export { Skills }
