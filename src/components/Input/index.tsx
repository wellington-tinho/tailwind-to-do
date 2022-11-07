import { useRef } from 'react'
import { IItenList } from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';

interface InputProps {
  appenList: (value: IItenList) => void;
}

export default function Input({appenList}:InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const hancleClick = () => {
    if(inputRef.current?.value !== "" && inputRef.current?.value !== null){
      const inputValue = ""+(inputRef.current?.value)
      const dataItem = {
        id: uuidv4(),
        name: inputValue,
        isCompleted: false
      }
      appenList(dataItem)
    }
  }

  return (
    <div 
    className="mx-auto flex flex-col justify-center items-center 
    -mt-7 w-1/2 sm:flex-row gap-3"  >
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa" 
        className="h-14 rounded-lg bg-gray-500 text-white pl-4 w-full text-gray-100"
        ref={inputRef}
      />
      <button 
        className="h-14 
        sm:max-w-min bg-blue--dark
        rounded-lg 
        px-4 w-full 
        flex justify-center items-center gap-2 font-Inter"
        onClick={hancleClick}
        >
         <span className="text-gray-100 font-medium  text-sm "
         > Criar </span>
          <img src="src\assets\plus.svg" alt="logo" className="w-3 h-3" />
      </button>
    </div>
  )
}
