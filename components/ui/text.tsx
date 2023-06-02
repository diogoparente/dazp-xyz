import { PropsWithChildren, ReactNode } from "react"

import { cn } from "@/lib/utils"

type TypographyType = "p" | "div"

type TextType = {
  type: TypographyType
  extraClassName?: string
}

const typeClassNames = {
  p: "antialiased text-lg text-c4 font-medium md-max:text-sm leading-6 contrast-150",
  div: "text-2xl md:text-3xl font-bold bg-gradient-to-br from-c2 to-c3 bg-clip-text tracking-tighter text-transparent contrast-150",
}

const typeElements = {
  p: ({ className, children }: PropsWithChildren<any>) => (
    <p className={className}>{children}</p>
  ),
  div: ({ className, children }: PropsWithChildren<any>) => (
    <div className={className}>{children}</div>
  ),
}

const getTypeClassName = (type: TypographyType) => typeClassNames[type]
const getTypeElement = (type: TypographyType) => typeElements[type]

const Text = ({
  type,
  extraClassName,
  children,
}: PropsWithChildren<TextType>) => {
  const typeClassName = getTypeClassName(type)
  const Element = getTypeElement(type)
  return (
    <Element className={cn("flex", typeClassName, extraClassName)}>
      {children}
    </Element>
  )
}

export { Text }
