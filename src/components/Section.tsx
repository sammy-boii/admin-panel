import { useState } from 'react'
import { Button } from './ui/button'

interface SectionProps {
  heading: string
  index: number
}

const Section = ({ heading, index }: SectionProps) => {
  const [contents, setContents] = useState(['Content'])
  return (
    <div className='flex flex-col border-[1px] border-cyan-500 w-[90vw] rounded-md flex p-4 bg-cyan-100'>
      <div className='flex justify-between w-full align-center'>
        <p className='text-[18px]'>
          Section {index + 1}: {heading}
        </p>
        <Button
          onClick={() =>
            setContents((prevContent) => [...prevContent, 'Content'])
          }
          className=' bg-violet-800'
        >
          Add Content
        </Button>
      </div>
      <div className='flex flex-col rounded-lg gap-3 my-4'>
        {contents.map((content) => (
          <div className='p-3 bg-white'>{content}</div>
        ))}
      </div>
    </div>
  )
}
export default Section
