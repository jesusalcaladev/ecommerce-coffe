import { cn } from '@/lib/utils'

interface IconButtonProps {
  className?: string
  onClick?: () => void
  icon: React.ReactElement
}

export default function IconButton({
  icon,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={cn(
        'rounded-full flex items-center bg-white border shadow-md p-2 hover:scale-110 transition-transform',
        className
      )}
      {...props}
    >
      {icon}
    </button>
  )
}
