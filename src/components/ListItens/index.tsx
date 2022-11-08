import { IItenList } from "../../interfaces";

interface ListItensProps {
  list: IItenList[];
  removeItem: (id: string) => void;
  updateItem: (id: string) => void;
}

export default function ListItens({list, removeItem, updateItem}:ListItensProps) {
  console.log(list);

  return (
    <div className="w-1/2 h-46 flex justify-center items-center bg-purple m-">
      <div className="flex justify-center "> 
        <div>
          <p>Tarefas criadas</p>
          <span> {list.length} </span>
        </div>
        <div>
          <p>Concluidos</p>
          <span> {list.filter((item) => item.isCompleted).length} </span>
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-3">
        {list.map((item) => (
          <div key={item.id} className=" bg-gray-500 flex justify-between items-center">  
            <div className="flex gap-3">
              <input type="checkbox" checked={item.isCompleted} onChange={() => updateItem(item.id)} />
              <p>{item.name}</p>
              <button onClick={() => removeItem(item.id)}>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
