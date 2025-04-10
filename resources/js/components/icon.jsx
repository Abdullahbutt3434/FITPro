import { cn } from '@/lib/utils.js';

export function Icon({ iconNode: IconComponent, className, ...props }) {
    return <IconComponent className={cn('h-4 w-4', className)} {...props} />;
}
