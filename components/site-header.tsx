"use client"

import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"

import Icon, { Icons } from "./icon"
import SmoothLink from "./smooth-link"
import { buttonVariants } from "./ui/button"

const links = siteConfig.mainNav
const socials = siteConfig.links

const WideNavLinks = ({
  links,
}: {
  links: { title: string; id: string; disabled: boolean }[]
}) => {
  return links?.length ? (
    <nav className="ml-20 flex gap-6 rounded-md p-2 shadow-md md-max:ml-0">
      {links?.map((item, index) => (
        <SmoothLink key={item.id} item={item} index={index} />
      ))}
    </nav>
  ) : null
}

const SocialLinks = ({ socials }: { socials: Record<string, string> }) => (
  <span>
    <div className="flex items-center space-x-4">
      <Link
        href={socials.github}
        className="hover:scale-110"
        target="_blank"
        rel="noreferrer"
      >
        <Icon
          name="github"
          className="h-5 w-5 cursor-pointer fill-current hover:scale-150"
        />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link
        href={socials.linkedin}
        className="hover:scale-110"
        target="_blank"
        rel="noreferrer"
      >
        <Icon
          name="linkedin"
          className="h-5 w-5 cursor-pointer fill-current hover:scale-110"
        />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link
        href={`mailto:${socials.email}`}
        className="hover:scale-110"
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="mail" className="h-5 w-5 cursor-pointer fill-current " />
        <span className="sr-only">e-mail</span>
      </Link>
    </div>
  </span>
)

const MobileHeader = () => (
  <div className="header-mobile w-full items-center md:hidden">
    <Logo />
    <div className="flex flex-col items-center p-4">
      <SocialLinks socials={socials} />
      <div className="mt-2">
        <WideNavLinks links={links} />
      </div>
    </div>
  </div>
)
const DesktopHeader = () => (
  <div className="w-full flex-1 justify-between bg-c1 p-4 md:flex md-max:hidden">
    <Logo />
    <WideNavLinks links={links} />
    <div className="flex">
      <SocialLinks socials={socials} />
    </div>
  </div>
)

const Logo = () => (
  <Link
    href="/"
    className="h-[32px] w-[32px] hover:scale-110"
    rel="noreferrer"
    aria-label="Logo"
  >
    <Icons.logo className="h-full w-full rounded-full" />
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
