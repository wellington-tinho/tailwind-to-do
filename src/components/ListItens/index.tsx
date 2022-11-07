import { IItenList } from "../../interfaces";

interface ListItensProps {
  list: IItenList[];
  removeItem: (id: string) => void;
  updateItem: (id: string) => void;
}

export default function ListItens({list, removeItem, updateItem}:ListItensProps) {
  console.log(list);

  return (
    <div className="w-full h-96 bg-gray-500 flex justify-center items-center">
      <div className="w-1/2 flex flex-col gap-3">
        {list.map(item => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-gray-700 rounded-lg px-4 py-2"
          >
            <div className="flex gap-3 items-center">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={item.isCompleted}
                onChange={() => updateItem(item.id)}
              />
              <span
                className={`text-gray-100 font-medium text-sm ${
                  item.isCompleted ? "line-through" : ""
                }`}
              >
                {item.name}
              </span>
            </div>
            <button
              className="bg-red-500 rounded-lg px-4 py-2"
              onClick={() => removeItem(item.id)}
            >
              <img src="src\assets\trash.svg" alt="logo" className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
