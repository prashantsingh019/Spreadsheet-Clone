import React, { useState, useRef } from "react";

type sheetTabProps = {
  name: string;
  index: number;
  setSheets: React.Dispatch<React.SetStateAction<string[]>>;
  activeSheet: number;
  setActiveSheet: (index: number) => void;
};

function SheetTab({
  name,
  index,
  setSheets,
  activeSheet,
  setActiveSheet,
}: sheetTabProps) {
  const [isEditable, setIsEditable] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleBlur = () => {
    setIsEditable(false);
    const newName = ref.current?.textContent?.trim();
    if (newName && newName !== name) {
      setSheets((prev) => {
        const updated = [...prev];
        updated[index] = newName;
        return updated;
      });
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      ref.current?.blur();
    }
    if (e.key === "Escape") {
      setIsEditable(false);
    }
  };
  return (
    <div
      ref={ref}
      suppressContentEditableWarning
      onDoubleClick={() => setIsEditable(true)}
      onClick={() => setActiveSheet(index)}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      contentEditable={isEditable}
      className={`font-bold h-[98%] bg[#E8F0E9] sheet-tab px-4 py-[10px] flex items-center mr-1 cursor-pointer
      
      outline-none
      ${
        activeSheet === index
          ? "border-t-2 border-[#3E5741] text-[#3E5741]"
          : "text-[#757575] bg-[#fff]"
      } 
        
     `}
    >
      {name}
    </div>
  );
}

export default SheetTab;
