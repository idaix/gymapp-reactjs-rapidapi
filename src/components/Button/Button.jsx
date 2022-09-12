import './Button.css'

const Button = ({ primary, onClick, children }) => {
  return (
    <button 
      className={`py-2 px-6 duration-300 font-semibold border border-white  ${primary? 'text-black bg-primary hover:bg-white hover:text-black':'text-black bg-white hover:bg-primary hover:text-white'}`}
      onClick={onClick}
    >{children}</button>
  )
}

export default Button