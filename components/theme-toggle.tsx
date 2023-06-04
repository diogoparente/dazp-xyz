import * as React from "react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Icon from "@/components/icon"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <div
      className={cn(
        buttonVariants({
          size: "sm",
          variant: "ghost",
        }),
        "ml-4 cursor-pointer md-max:ml-0"
      )}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icon
        name="sun"
        className="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Icon
        name="moon"
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle theme</span>
    </div>
  )
}
