import { useState } from "react";


function Column({ noOfColumn }:{noOfColumn:number}) {
  const [cell,setCell] = useState({
     id:0,
     data:''
  })
  console.log(cell);
  
  return (
    <div className="Column flex">
      {Array.from({ length: noOfColumn }).map((_, i) => {
        return (
          <div
            key={i}
            contentEditable="true"
            className="outline-none border-r border-b border-gray-400 w-[120px] px-1 h-[26px]"
            onChange={(e)=>setCell({id:i,data:(e.target as HTMLInputElement).value})}
          ></div>
        );
      })}
    </div>
  );
}

export default Column;
