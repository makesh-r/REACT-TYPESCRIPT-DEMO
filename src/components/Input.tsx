type InputProps = {
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ value, handleChange }: InputProps) => {
  return (
    <input value={value} onChange={handleChange} type="text" />
  )
}

export default Input
