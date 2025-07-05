import "./App.css";

import TitleBar from "./component/TitleBar";
import ToolBar from "./component/ToolBar";
import FormulaBar from "./component/FormulaBar";
import SpreadSheetBody from "./component/SpreadSheetBody";
import SheetBar from "./component/SheetBar";
import { useState } from "react";

function App() {
  const [sheets, setSheets] = useState([
    "All Orders",
    "Pending",
    "Reviewed",
    "Arrived",
  ]);
  const [activeSheet, setActiveSheet] = useState(0);
  console.log(activeSheet);
  
  // const handleTab = (sheetname:string) => {
  //     setSheets(sheetname);
  // }
  return (
    <main className="w-screen h-screen flex flex-col gap-1 overflow-hidden bg-[#FFFFFF] ">
      <TitleBar /> {/* height: 8% */}
      <ToolBar /> {/* height: 7% */}
      <FormulaBar /> {/* height: 6.5% */}
      <SpreadSheetBody /> {/*height: 60%*/}

      <SheetBar
        sheets={sheets}
        setSheets={setSheets}
        activeSheet={activeSheet}
        setActiveSheet={setActiveSheet}
      />{" "}
      {/*height: 5%*/}
    </main>
  );
}

export default App;
