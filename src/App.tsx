import "./App.css";
import TitleBar from "./component/TitleBar";
import ToolBar from "./component/ToolBar";
import FormulaBar from "./component/FormulaBar";
import Column from "./component/Column";

function App() {
 
  const row = 16;
  const column = 10;
  return (
    <>
      <main className="min-h-screen bg-[#FFFFFF] ">
        <TitleBar />
        <ToolBar />
        <FormulaBar/>
        <div className="cells-container h-[80%] overflow-y-scroll">
          <section className="h-[5%] flex">
            <div className="hash-icon p-0"><img src="/Table_Title-cell.svg" className="w-full h-6 mr-1"/></div>
            <div className="column-name-container flex items-start text-[13px] pl-0.5">
                <div className="py-0.5 text-center column-tab min-w-[120px] bg-[#EEEEEE] pr-5 pl-2 border border-white ">Job Request</div>
                <div className="py-0.5 text-center column-tab min-w-[120px] bg-[#EEEEEE] pr-1 pl-2  border border-white">Submitted</div>
                <div className="py-0.5 text-center column-tab min-w-[120px] bg-[#EEEEEE] pr-1 pl-2  border border-white">Status</div>
                <div className="py-0.5 text-center column-tab min-w-[120px] bg-[#EEEEEE] pr-1 pl-2  border border-white">Submitter</div>
                <div className="py-0.5 text-center column-tab min-w-[120px] bg-[#EEEEEE] pr-1 pl-2   border border-white">URL</div>
                <div className="py-0.5 text-center column-tab min-w-[120px] bg-[#EEEEEE] pr-1 pl-2  border border-white">Assigned</div>
                <div className="py-0.5 text-center column-tab min-w-[120px] bg-[#EEEEEE] pr-1 pl-2  border border-white">Priority</div>
                <div className="py-0.5 text-center column-tab min-w-[120px] bg-[#EEEEEE] pr-1 pl-2  border border-white">Due Date</div>
                <div className="py-0.5 text-center column-tab min-w-[120px] bg-[#EEEEEE] pr-1 pl-2  border border-white">Est. Value</div>
                <div className="py-0.5 text-center column-tab min-w-[120px] bg-[#EEEEEE] pr-1 pl-2  border border-white"></div>
            </div>
            </section>
          <div className="content-box flex">

            <div className="cells-name-container-sideBar h-[95%] bg-neutral-50 w-[2.5%] ">
              {Array.from({ length: row }).map((_, i) => {
                return (
                  <h1
                    className="border border-gray text-gray-500 flex justify-center items-center cursor-pointer"
                    key={1}
                  >
                    {i + 1}
                  </h1>
                );
              })}
            </div>
           
            <div className="data-cells-container flex-1">
                 {
                   Array.from({length:row}).map((_,i)=>{
                     return  <Column noOfColumn={column} key={i}/>
                   })
                 }
                
            </div>
          </div>
          <div className="sheet-container h-[%] flex gap-3 p-2 px-4">
              <div className="sheet-tabs text-[#757575] border-t-2 border-[#4B6A4F] text-[#4B6A4F] font-bold px-2">All orders</div>
              <div className="sheet-tabs text-[#757575]">Pending</div>
              <div className="sheet-tabs text-[#757575]">Reviewed</div>
              <div className="sheet-tabs text-[#757575]">Arrived</div>
              <div className="add-sheet-btn">
                  <img src="/Add.svg"/>
              </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
