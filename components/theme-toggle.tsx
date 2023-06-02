import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import Icon from "@/components/icon"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size={"sm"}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <span className="relative w-6">
        <Icon
          name="sun"
          className="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Icon
          name="moon"
          className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
      </span>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
