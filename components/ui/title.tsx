import { PropsWithChildren } from "react"

import { cn } from "@/lib/utils"

type SizeType = "big" | "medium" | "small"

type TitleType = {
  size: SizeType
  extraClassName?: string
}

const sizeClassNames = {
  big: "text-5xl md:text-6xl font-extrabold h-23 md-max:32 py-[10px]",
  medium: "text-3xl md:text-4xl font-bold",
  small: "text-xl md:text-2xl",
}

const sizeElements = {
  big: ({ className, children }: PropsWithChildren<any>) => (
    <h1 className={className}>{children}</h1>
  ),
  medium: ({ className, children }: PropsWithChildren<any>) => (
    <h2 className={className}>{children}</h2>
  ),
  small: ({ className, children }: PropsWithChildren<any>) => (
    <h3 className={className}>{children}</h3>
  ),
}

const getSizeClassName = (size: SizeType) => sizeClassNames[size]
const getSizeElement = (size: SizeType) => sizeElements[size]

const Title = ({
  size,
  extraClassName,
  children,
}: PropsWithChildren<TitleType>) => {
  const sizeClassName = getSizeClassName(size)
  const Element = getSizeElement(size)
  return (
    <Element
      className={cn(
        "flex bg-gradient-to-br from-c2 to-c3 bg-clip-text tracking-tighter text-transparent md-max:justify-center md-max:text-center",
        sizeClassName,
        extraClassName
      )}
    >
      {children}
    </Element>
  )
}

export { Title }
