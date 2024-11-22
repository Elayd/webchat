import { FC } from 'react'

interface CardHeaderProps {
  headerText: string
  day: string
}
export const CardHeader: FC<CardHeaderProps> = ({ headerText, day }) => {
  return (
    <div className='flex justify-between items-center'>
      <h4 className='text-white font-semibold'>{headerText}</h4>
      <span className='text-gray-400 text-sm'>{day}</span>
    </div>
  )
}
