import { FC } from 'react'

export const CardAvatar: FC<{ imgSrc: string }> = ({ imgSrc }) => {
  return (
    <div className='flex justify-center items-center pl-2'>
      <img src={imgSrc} alt='Avatar' className='w-14 h-14 rounded-full object-cover border border-gray-600' />
    </div>
  )
}
