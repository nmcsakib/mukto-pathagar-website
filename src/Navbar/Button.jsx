import { MdKeyboardArrowDown } from "react-icons/md"

 const Button = ({ btnName, arrow = true }) => {
    return (
      <summary className='btn rounded-4xl bg-stone-400 text-white hover:btn-outline hover:bg-transparent hover:text-stone-600 mr-3'>{btnName}
        {arrow === false || <MdKeyboardArrowDown
          className="text-[1.5rem] text-white group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]" />}
      </summary>
    )
  }

  export default Button