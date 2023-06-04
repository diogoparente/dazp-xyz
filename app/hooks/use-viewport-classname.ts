import { useEffect, useRef, useState } from "react"

type ClassName = string | string[]

const useViewportClassName = (
  classNames: ClassName
): React.RefObject<HTMLElement> => {
  const ref = useRef<HTMLElement>(null)
  const [classNamesAdded, setClassNamesAdded] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !classNamesAdded) {
          addClassNames(entry.target as HTMLElement, classNames)
          setClassNamesAdded(true)
        }
      })
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [classNames, classNamesAdded])

  const addClassNames = (element: HTMLElement, classNames: ClassName) => {
    let cs = typeof classNames === "string" ? [classNames] : [...classNames]
    element.classList.remove("invisible")
    element.classList.add(...cs)
  }

  return ref
}

export default useViewportClassName
