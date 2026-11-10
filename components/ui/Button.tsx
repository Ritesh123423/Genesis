import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-gradient-to-r from-genesis-royal to-genesis-steel text-white hover:shadow-lg hover:shadow-genesis-royal/20 hover:scale-105':
              variant === 'primary',
            'bg-genesis-slate/30 text-white hover:bg-genesis-steel hover:shadow-lg':
              variant === 'secondary',
            'border-2 border-genesis-royal text-genesis-royal hover:bg-genesis-royal hover:text-white':
              variant === 'outline',
            'text-genesis-silver hover:text-white hover:bg-genesis-slate/30':
              variant === 'ghost',
          },
          {
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
