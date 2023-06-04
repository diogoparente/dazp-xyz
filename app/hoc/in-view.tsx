"use client"

import { PropsWithChildren, RefObject } from "react"

import useViewportClassName from "../hooks/use-viewport-classname"

const InView = ({
  className,
  children,
}: PropsWithChildren<{ className: string | string[] }>) => {
  const ref = useViewportClassName(className)
  return (
    <div ref={ref as RefObject<HTMLDivElement>} className="invisible">
      {children}
    </div>
  )
}

export default InView
