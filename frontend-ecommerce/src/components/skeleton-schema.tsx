import { Skeleton } from '@/components/ui/skeleton'

interface SkeletonSchemaProps {
  grid: number
}

export default function SkeletonSchema({ grid }: SkeletonSchemaProps) {
  return Array.from({ length: grid }, (_, i) => (
    <div className='flex flex-col gap-8 mx-auto space-y-3' key={i}>
      <Skeleton className='h-[125px] w-[250px] rounded-xl' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[250px]' />
        <Skeleton className='h-4 w-[250px]' />
      </div>
    </div>
  ))
}
