"use client"

import { useContext, useEffect, useRef } from "react"

import { NavContext } from "../context/nav-context"
import { useOnScreen } from "./use-on-screen"

export const useNav = (navLinkId: string) => {
  const ref = useRef(null)
  const { setActiveLinkId } = useContext(NavContext)

  const isOnScreen = useOnScreen(ref)

  useEffect(() => {
    if (isOnScreen) {
      setActiveLinkId(navLinkId)
    }
  }, [isOnScreen, setActiveLinkId, navLinkId])

  return ref
}
