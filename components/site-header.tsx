"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"

import Icon from "./icon"
import SmoothLink from "./smooth-link"
import { ThemeToggle } from "./theme-toggle"
import { buttonVariants } from "./ui/button"

const links = siteConfig.mainNav
const socials = siteConfig.links

const WideNavLinks = ({
  links,
}: {
  links: { title: string; id: string; disabled: boolean }[]
}) => {
  return links?.length ? (
    <nav className="flex gap-6 rounded-md p-2 shadow-md">
      {links?.map((item, index) => (
        <SmoothLink key={item.id} item={item} index={index} />
      ))}
    </nav>
  ) : null
}

const SocialLinks = ({ socials }: { socials: Record<string, string> }) => (
  <span>
    <div className="flex items-center space-x-1">
      <Link href={socials.github} target="_blank" rel="noreferrer">
        <div
          className={buttonVariants({
            size: "sm",
            variant: "ghost",
          })}
        >
          <Icon name="github" className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </div>
      </Link>
      <Link href={socials.linkedin} target="_blank" rel="noreferrer">
        <div
          className={buttonVariants({
            size: "sm",
            variant: "ghost",
          })}
        >
          <Icon name="linkedin" className="h-5 w-5 fill-current" />
          <span className="sr-only">LinkedIn</span>
        </div>
      </Link>
    </div>
  </span>
)

const MobileHeader = () => (
  <div className="w-full flex-1 items-center justify-between bg-c1 md:hidden md-max:flex">
    <Logo />
    <div className="flex flex-col items-center p-4">
      <SocialLinks socials={socials} />
      <div className="mt-2">
        <WideNavLinks links={links} />
      </div>
    </div>
    <ThemeToggle />
  </div>
)
const DesktopHeader = () => (
  <div className="w-full flex-1 justify-between bg-c1 p-4 md:flex md-max:hidden">
    <Logo />
    <WideNavLinks links={links} />
    <div className="flex">
      <SocialLinks socials={socials} />
      <ThemeToggle />
    </div>
  </div>
)

const Logo = () => (
  <Link
    href="/"
    className="max-h-[32px] min-h-[32px] min-w-[32px] max-w-[32px]"
    rel="noreferrer"
    aria-label="Logo"
  >
    <Icon name="logo" className="h-full w-full rounded-sm" isCircle={false} />
  </Link>
)
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 min-w-full bg-c1">
      <div className="container flex h-full w-full items-center justify-between space-x-4 shadow-sm sm:space-x-0">
        <MobileHeader />
        <DesktopHeader />
      </div>
    </header>
  )
}
