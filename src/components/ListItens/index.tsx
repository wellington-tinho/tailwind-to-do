import { IItenList } from "../../interfaces";

interface ListItensProps {
  list: IItenList[];
  removeItem: (id: string) => void;
  updateItem: (id: string) => void;
}

export default function ListItens({list, removeItem, updateItem}:ListItensProps) {
  console.log(list);
  const hasItems = list.length <= 0;

  return (
    <div className="w-1/2 mx-auto h-46 flex justify-center flex-col items-center mt-16 mb-6"  >
      <div className="w-full flex flex-col justify-center items-center gap-3 px-4
         sm:flex-row sm:justify-between  
      ">
         
        <div className="w-full flex gap-3 items-baseline justify-between sm:justify-start">
          <p className="text-blue font-medium text-base " >Tarefas criadas</p>
          <span className="text-gray-200 font-medium text-base bg-gray-400 rounded-full px-2 py-[2px]"
          > {list.length} </span>
        </div>
        {/* end */}
        <div className="w-full flex gap-3 items-baseline justify-between sm:justify-end  ">
          <p className="text-purple-dark font-medium text-base"
          >Concluidos</p>
          <span className="flex text-gray-200 font-medium text-base bg-gray-400 rounded-full px-2 py-[2px]"> 
          {
            hasItems ? 0 : 
              list.filter((item) => item.isCompleted).length + " de " + list.length
          }
          </span>
        </div>
      </div>
      <div className="w-full px-4 flex flex-col gap-3 mt-6">
        {list.map((item) => (
          <div key={item.id} className="w-full">  
            <div 
              className={`
                bg-gray-500
                flex
                items-center
                rounded-lg
                border-2
                ${item.isCompleted ? "border-transparent" : " border-gray-400"}
              `}
            >
            <button 
              className="p-4"
              onClick={() =>updateItem(item.id)}> 
              {item.isCompleted ?
                <img src="src\assets\checked.svg" alt="uncheck" className="w-6 h-6" />
                :
                <img src="src\assets\check.svg" alt="check" className="w-6 h-6" /> 
              }
            </button>
              <p className={` text-gray-200 font-medium text-base w-full 
                ${item.isCompleted ? "line-through text-gray-300" : ""}
              `}
              >{item.name}</p>
              <button 
                className="p-4"
                onClick={() => removeItem(item.id)}>
                <img src="src\assets\trash.svg" alt="trash" className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
