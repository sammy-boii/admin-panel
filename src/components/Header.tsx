import { Button } from './ui/button'

const Header = () => {
  return (
    <>
      <div className='mx-auto max-w-[95vw] p-2'>
        <div className='w-full flex justify-between'>
          <img
            className='max-w-full cursor-pointer px-[55px] pt-5' // images have a tendancy to be funky so set a max width
            src='https://placehold.co/80x80'
            alt='https://placehold.co/80x80'
          />
          <div className='pr-12 pt-5'>
            <Button className='p-1 mx-[100px]  inline-block bg-cyan-500 w-12 h-5'></Button>
            <img
              className='inline-block rounded-full'
              src='https://placehold.co/50x50'
              alt='https://placehold.co/50x50'
            />
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='pt-5 font-bold text-3xl'>Add New Course</div>
          <div className='flex gap-10'>
            <div>
              <Button className='bg-black w-[150px]'>
                {' '}
                Back to Dashboard{' '}
              </Button>
            </div>
            <div>
              <Button className='bg-cyan-500 w-[150px]'> Save </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header
