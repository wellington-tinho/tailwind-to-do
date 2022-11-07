import { useState } from "react"
import Input from "./components/Input"
import ListItens from "./components/ListItens"
import { IItenList } from "./interfaces"

function App() {
  const [list, setList] = useState([] as IItenList[])

  const appenList = (value: IItenList) => {
    setList([...list, value])
  }

  const removeItem = (id: string) => { 
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  const updateItem = (id: string) => {
    const newList = list.map(item => {
      if(item.id === id){
        item.isCompleted = !item.isCompleted
      }
      return item
    })
    setList(newList)
  }


  return (
    <></>
    // <div className="w-screen h-screen bg-gray-600">

    //   {/* // Header */}
    //   <div className="w-full h-52 bg-gray-700 flex justify-center items-center">
    //     <div className="w-32 flex items-end gap-3">
    //       <img src="src\assets\rocket.svg" alt="logo" className="w-6 h-9" />
    //       <h1 className="Inter font-black	text-5xl">
    //         <span className="text-blue" >to</span>
    //         <span className="text-purple-dark">do</span>
    //       </h1>
    //     </div>
    //   </div>

    //   <Input appenList={appenList}/>
    //   {console.log(list)}

    //   {/* <ListItens 
    //     list = {list}
    //     removeItem = {removeItem}
    //     updateItem = {updateItem}
    //   /> */}

    // </div>
  )
}

export default App
