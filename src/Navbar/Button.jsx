import { MdKeyboardArrowDown } from "react-icons/md"

 const Button = ({ btnName, arrow = true }) => {
    return (
      <>
        <summary className='flex justify-around items-center border-none bg-transparent hover:text-stone-600 mr-3  text-base-content'>{btnName}
        {arrow === false || <MdKeyboardArrowDown
          className="text-[1.5rem] group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]" />}
      </summary>
      </>
    )
  }

  export default Button