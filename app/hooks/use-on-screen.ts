"use client"

import { RefObject, useEffect, useState } from "react"

export const useOnScreen = <T extends HTMLElement>(
  ref: RefObject<T>
): boolean => {
  const [isOnScreen, setIsOnScreen] = useState(false)

  useEffect(() => {
    let cur = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOnScreen(entry.isIntersecting)
      },
      {
        threshold: 0.7,
      }
    )

    if (cur) {
      cur = ref.current
      observer.observe(cur!)
    }

    return () => {
      if (cur) {
        observer.unobserve(cur)
      }
    }
  }, [ref])

  return isOnScreen
}
