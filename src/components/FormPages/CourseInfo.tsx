import Input from '../Input'
import { Button } from '../ui/button'

const CourseInfo = () => {
  return (
    <div className='py-2'>
      <label>
        <p className='text-[20px]'>Course Title</p>
        <Input />
      </label>
      <label>
        <p className='text-[20px]'>Course Description</p>
        <textarea
          className='resize-none p-1 my-2 border-[2px] rounded-sm w-[90vw] border-cyan-500 focus:outline-none'
          name=''
          id=''
          rows={5}
        ></textarea>
      </label>
      <div className='flex w-[90vw] justify-between items-baseline'>
        <label>
          <p className='text-[20px]'>Course Category </p>
          <select className='p-2 my-2 border-[2px] w-[40vw] rounded-sm bg-white border-cyan-500 focus:outline-none'>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
          </select>
        </label>
        <label>
          <p className='text-[20px]'>Course Price </p>
          <select className='p-2 my-2 border-[2px]  w-[40vw] rounded-sm bg-white border-cyan-500 focus:outline-none'>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
          </select>
        </label>
      </div>
      <div className='flex w-[90vw] justify-between items-baseline'>
        <label>
          <p className='text-[20px]'>Course Level </p>
          <select className='p-2 my-2 border-[2px] w-[40vw] rounded-sm bg-white border-cyan-500 focus:outline-none'>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
          </select>
        </label>
        <label>
          <p className='text-[20px]'>Discounted Price (optional) </p>
          <select className='p-2 my-2 border-[2px]  w-[40vw] rounded-sm bg-white border-cyan-500 focus:outline-none'>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
          </select>
        </label>
      </div>
      <div className='mt-10 flex w-[90vw] justify-between'>
        <Button className='bg-black w-[150px]'>Back</Button>
        <Button className='bg-cyan-500  w-[150px]'>Save</Button>
      </div>
    </div>
  )
}
export default CourseInfo
