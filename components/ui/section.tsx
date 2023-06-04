import { PropsWithChildren } from "react"

import InView from "@/app/hoc/in-view"

const Section = ({
  children,
  sectionId,
  withBar = true,
}: PropsWithChildren<{ withBar?: boolean; sectionId: string }>) => {
  return (
    <div
      id={sectionId}
      className="my-8 flex w-full max-w-[980px] flex-1 flex-col gap-4 md-max:items-center"
    >
      {withBar ? (
        <InView className={["fadeIn"]}>
          <div className="h-[6px] w-16 rounded-full bg-gradient-to-r from-c2 to-c3" />
        </InView>
      ) : null}
      {children}
    </div>
  )
}

export { Section }
