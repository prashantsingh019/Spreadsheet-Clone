import SheetTab from "./SheetTab";

type sheetProps = {
  sheets: string[];
  setSheets: React.Dispatch<React.SetStateAction<string[]>>;
  activeSheet: number;
  setActiveSheet: React.Dispatch<React.SetStateAction<number>>;
};

function SheetBar({
  sheets,
  setSheets,
  activeSheet,
  setActiveSheet,
}: sheetProps) {
  const handleAddSheet = () => {
    const name = `sheet ${sheets.length + 1}`;
    setSheets((prev) => [...prev, name]);
  };

  return (
    <div className="h-[5%] w-full border flex items-center p-0.5">
      {sheets.map((sheet, index) => {
        return (
          <SheetTab
            key={index}
            name={sheet}
            index={index}
            setSheets={setSheets}
            activeSheet={activeSheet}
            setActiveSheet={setActiveSheet}
          />
        );
      })}
      <button onClick={handleAddSheet} className="flex items-center px-1">
        <img src="./Add.svg" />
      </button>
    </div>
  );
}

export default SheetBar;
