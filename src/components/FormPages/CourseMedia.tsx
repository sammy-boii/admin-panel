import { useReducer, ReactNode, useState, useRef } from 'react'
import { CiSquarePlus } from 'react-icons/ci'
import Input from '../Input'
import { Button } from '../ui/button'

interface CourseMediaState {
  benefits: ReactNode[]
  prerequisites: ReactNode[]
}

type CourseMediaAction =
  | { type: 'benefits' }
  | { type: 'prerequisites' }
  | { type: 'default' }

const addInputsReducer = (
  state: CourseMediaState,
  action: CourseMediaAction
): CourseMediaState => {
  switch (action.type) {
    case 'benefits':
      return {
        ...state,
        benefits: [...state.benefits, <Input key={state.benefits.length} />]
      }
    case 'prerequisites':
      return {
        ...state,
        prerequisites: [
          ...state.prerequisites,
          <Input key={state.prerequisites.length} />
        ]
      }
    default:
      return state
  }
}

const CourseMedia = () => {
  const [thumbnail, setThumbnail] = useState({ src: '', msg: '' })
  const inputRef = useRef<HTMLInputElement>(null)
  const [state, dispatch] = useReducer(addInputsReducer, {
    benefits: [<Input />],
    prerequisites: [<Input />]
  })

  const handleThumbnail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]

    if (selectedFile) {
      if (selectedFile.type.startsWith('image/')) {
        setThumbnail({ src: URL.createObjectURL(selectedFile), msg: '' })
      } else {
        setThumbnail({ src: '', msg: 'Invalid image type' })
      }
    }
  }

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'copy'
  }

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault()

    const droppedFile = event.dataTransfer.files[0]

    if (droppedFile) {
      if (droppedFile.type.startsWith('image/')) {
        setThumbnail({ src: URL.createObjectURL(droppedFile), msg: '' })
      } else {
        setThumbnail({ src: '', msg: 'Invalid image type' })
      }
    }
  }

  return (
    <div className='py-2'>
      <p className='text-[20px]'>Course Thumbnail</p>
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className='flex justify-center items-center border-[1px] border-cyan-500 w-[90vw] py-[70px] my-2'
      >
        <p className='text-[20px] font-medium'>
          Drag and drop your thumbnail here
        </p>
      </div>
      <input
        hidden
        type='file'
        ref={inputRef}
        onChange={handleThumbnail}
        accept='image/*'
      />
      {thumbnail.src && (
        <div className='w-min relative'>
          <img
            className='max-w-[250px] max-h[100px] py-2'
            src={thumbnail.src}
            alt=''
          />
          <div
            onClick={() => setThumbnail({ src: '', msg: '' })}
            className='cursor-pointer z-10 absolute right-[-25px] top-0 text-4xl font-bold text-red-500'
          >
            &times;
          </div>
        </div>
      )}
      {thumbnail.msg && (
        <p className='text-red-500 font-bold text-2xl py-1'>
          Invalid image type
        </p>
      )}
      <label>
        <p className='text-[20px]'>Video Url</p>
        <Input />
      </label>
      <label>
        <p className='text-[20px] w-screen'>
          What are the benefits of studying your course?
        </p>
        {state.benefits.map((input, index) => (
          <div key={index}>{input}</div>
        ))}
      </label>
      <CiSquarePlus size={25} onClick={() => dispatch({ type: 'benefits' })} />
      <label>
        <p className='text-[20px] w-screen'>
          What are the prerequisites for starting this course?
        </p>
        {state.prerequisites.map((input, index) => (
          <div key={index}>{input}</div>
        ))}
      </label>
      <CiSquarePlus
        size={25}
        onClick={() => dispatch({ type: 'prerequisites' })}
      />
      <div className='mt-10 flex w-[90vw] justify-between'>
        <Button className='bg-black w-[150px]'>Back</Button>
        <Button className='bg-cyan-500  w-[150px]'>Save</Button>
      </div>
    </div>
  )
}

export default CourseMedia
