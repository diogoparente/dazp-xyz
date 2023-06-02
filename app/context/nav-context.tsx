"use client"

import React, { PropsWithChildren, createContext, useState } from "react"

import { siteConfig } from "@/config/site"

interface NavContextValue {
  activeLinkId: string
  setActiveLinkId: React.Dispatch<React.SetStateAction<string>>
}

export const NavContext = createContext<NavContextValue>({
  activeLinkId: "",
  setActiveLinkId: () => {},
})

const NavProvider = ({ children }: PropsWithChildren<{}>) => {
  const [activeLinkId, setActiveLinkId] = useState<string>(
    siteConfig.mainNav[0].id
  )

  const providerValue: NavContextValue = {
    activeLinkId,
    setActiveLinkId,
  }

  return (
    <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
  )
}

export default NavProvider
