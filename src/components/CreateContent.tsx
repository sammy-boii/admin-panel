import { useState } from 'react'
import Header from './Header'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import CourseInfo from './FormPages/CourseInfo'
import CoursePreview from './FormPages/CoursePreview'
import Curriculum from './FormPages/Curriculum'
import CourseMedia from './FormPages/CourseMedia'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { FaDotCircle } from 'react-icons/fa'

type TabsList =
  | 'Course Information'
  | 'Course Preview'
  | 'Course Media'
  | 'Curriculum'

const CreateContent = () => {
  const [activeTab, setActiveTab] = useState<TabsList>('Course Information')
  return (
    <>
      <Header />
      <div className='mx-auto max-w-[95vw] p-5 rounded-md border-2 relative border-cyan-500'>
        <div className='flex justify-between items-baseline'>
          <div className='flex w-max gap-[100px]'>
            <Tabs defaultValue='courseInfo' className=' w-[400px]'>
              <TabsList className='bg-white'>
                {activeTab === 'Course Information' ? (
                  <FaDotCircle size={25} className='text-cyan-500' />
                ) : (
                  <IoIosCheckmarkCircleOutline size={25} />
                )}

                <TabsTrigger
                  value='courseInfo'
                  onClick={() => {
                    setActiveTab('Course Information')
                  }}
                >
                  Course Information
                </TabsTrigger>
                {activeTab === 'Course Media' ? (
                  <FaDotCircle size={25} className='text-cyan-500' />
                ) : (
                  <IoIosCheckmarkCircleOutline size={25} />
                )}

                <TabsTrigger
                  value='courseMedia'
                  onClick={() => {
                    setActiveTab('Course Media')
                  }}
                >
                  Course Media
                </TabsTrigger>
                {activeTab === 'Curriculum' ? (
                  <FaDotCircle size={25} className='text-cyan-500' />
                ) : (
                  <IoIosCheckmarkCircleOutline size={25} />
                )}

                <TabsTrigger
                  value='curriculum'
                  onClick={() => {
                    setActiveTab('Curriculum')
                  }}
                >
                  Curriculum
                </TabsTrigger>
                {activeTab === 'Course Preview' ? (
                  <FaDotCircle size={25} className='text-cyan-500' />
                ) : (
                  <IoIosCheckmarkCircleOutline size={25} />
                )}

                <TabsTrigger
                  value='coursePreview'
                  onClick={() => {
                    setActiveTab('Course Preview')
                  }}
                >
                  Course Preview
                </TabsTrigger>
              </TabsList>

              <div className='pt-5 w-full left-0 absolute border-cyan-500 border-b-2' />

              <TabsContent value='courseInfo'>
                <CourseInfo />
              </TabsContent>
              <TabsContent value='courseMedia'>
                <CourseMedia />
              </TabsContent>
              <TabsContent value='curriculum'>
                <Curriculum />
              </TabsContent>
              <TabsContent value='coursePreview'>
                <CoursePreview />
              </TabsContent>
            </Tabs>
          </div>

          <div className='text-cyan-500 text-2xl font-medium'>{activeTab}</div>
        </div>
      </div>
    </>
  )
}
export default CreateContent
