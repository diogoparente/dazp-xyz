import { cn } from "@/lib/utils"

const SmoothLink = ({ item, index }: { item: any; index: number }) => {
  const handleClickScroll = () => {
    const scrollOffset =
      document?.getElementById(item.id)!.getBoundingClientRect().top - 75
    window.scrollBy({ top: scrollOffset, behavior: "smooth" })
  }

  return (
    <div
      onClick={handleClickScroll}
      key={index}
      className={cn(
        "flex items-center font-semibold text-c2 hover:scale-110 hover:cursor-pointer hover:text-c3 hover:transition-all"
      )}
    >
      {item.title}
    </div>
  )
}

export default SmoothLink
