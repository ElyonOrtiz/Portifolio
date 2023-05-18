import NextLink from 'next/link'
import { ComponentProps } from 'react';

type LinkProps = ComponentProps<typeof NextLink>;

export const Link = ({className, children, ...props}: LinkProps) => {
    return (
     <NextLink className='flex items-center gap-2 text-gray-300 text-lg hover:text-emerald-500 transition-colors'
      {...props}>
      {children}
     </NextLink>
  )
}