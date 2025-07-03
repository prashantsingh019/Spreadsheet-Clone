import "./App.css";

import TitleBar from "./component/TitleBar";
import ToolBar from "./component/ToolBar";
import FormulaBar from "./component/FormulaBar";
import SpreadSheetBody from "./component/SpreadSheetBody";
import SheetBar from "./component/SheetBar";

// import Column from "./component/Column";
function App() {
  // const row = 16;
  // const column = 10;
  return (
    <>
      <main className="w-screen h-screen flex flex-col overflow-hidden bg-[#FFFFFF] ">

        <TitleBar/>       {/* height: 5% */}
        <ToolBar />        {/* height: 5% */}
        <FormulaBar/>     {/* height: 5% */}
        <SpreadSheetBody /> {/*height: 80%*/}
        <SheetBar />         {/*height: 5%*/}






      
      </main>
    </>
  );
}

export default App;



{/*
  
  
  */}