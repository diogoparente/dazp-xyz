import { Section } from "@/components/ui/section"
import { Text } from "@/components/ui/text"
import { Title } from "@/components/ui/title"

import InView from "../hoc/in-view"

const Intro = () => (
  <Section withBar={false} sectionId="intro">
    <InView className={["duration-1000", "slideInRight"]}>
      <Title size="big">Diogo Parente</Title>
    </InView>
    <InView className={["duration-1000", "slideInLeft"]}>
      <Text type="p" extraClassName="font-semibold md-max:text-center">
        Building things for the web, one line at a time
      </Text>
    </InView>
  </Section>
)

export { Intro }
