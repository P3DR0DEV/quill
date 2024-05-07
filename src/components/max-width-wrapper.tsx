import { cn } from '@/lib/util'

type MaxWidthWrapperProps = React.HTMLAttributes<HTMLDivElement>

export function MaxWidthWrapper({ className, children, ...props }: MaxWidthWrapperProps) {
  return (
    <div className={cn('max-w-screen-xl px-2.5 md:px-20 w-full mx-auto', className)} {...props}>
      {children}
    </div>
  )
}
