interface InputProps {
  width?: string
  type?: string
}

const Input = ({ type = 'text', width = '90vw' }: InputProps) => {
  return (
    <input
      type={type}
      className={`p-2 my-2 border-[2px] rounded-sm w-[${width}] border-cyan-500 focus:outline-none`}
    />
  )
}

export default Input
