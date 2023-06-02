import { Section } from "@/components/ui/section"
import { Text } from "@/components/ui/text"
import { Title } from "@/components/ui/title"

const Intro = () => (
  <Section withBar={false} sectionId="intro">
    <Title size="big">Diogo Parente</Title>
    <Text type="p" extraClassName="font-semibold">
      Building things for the web, one line at a time
    </Text>
  </Section>
)

export { Intro }
