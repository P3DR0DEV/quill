import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { MaxWidthWrapper } from './max-width-wrapper'
import { buttonVariants } from './ui/button'

export function Navbar() {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span>quill.</span>
          </Link>
          {/* TODO: Add mobile navbar */}

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link href="/pricing" className={buttonVariants({ size: 'sm', variant: 'ghost' })}>
                Pricing
              </Link>
              <LoginLink className={buttonVariants({ size: 'sm', variant: 'ghost' })}>Sign in</LoginLink>
              <RegisterLink className={buttonVariants({ size: 'sm' })}>
                Get started <ArrowRight className="ml-1.5 size-5" />
              </RegisterLink>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
