import { PropsWithChildren } from "react"

const Section = ({
  children,
  sectionId,
  withBar = true,
}: PropsWithChildren<{ withBar?: boolean; sectionId: string }>) => {
  return (
    <div
      id={sectionId}
      className="my-10 flex w-full max-w-[980px] flex-1 flex-col gap-4 md-max:my-8 md-max:items-center"
    >
      <div
        className={`h-[6px] w-16 rounded-full bg-gradient-to-r from-c2 to-c3 ${
          withBar ? "visible" : "invisible"
        }`}
      />
      {children}
    </div>
  )
}

export { Section }
