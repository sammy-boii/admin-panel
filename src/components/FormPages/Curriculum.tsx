import { useState } from 'react'
import Section from '../Section'
import { Button } from '../ui/button'

const Curriculum = () => {
  const [sections, setSections] = useState([
    <Section heading='Introduction' index={0} />
  ])

  return (
    <>
      <Button
        onClick={() =>
          setSections((prevSections) => [
            ...prevSections,
            <Section heading='Add Heading' index={sections.length} />
          ])
        }
        className='bg-violet-800 text-[15px] text-white'
      >
        Add New Section
      </Button>
      <div className=' my-2 py-2'>
        {sections.map((section, index) => (
          <div className='my-5' key={index}>
            {section}
          </div>
        ))}
      </div>
      <div className='mt-10 flex w-[90vw] justify-between'>
        <Button className='bg-black w-[150px]'>Back</Button>
        <Button className='bg-cyan-500  w-[150px]'>Save</Button>
      </div>
    </>
  )
}

export default Curriculum
