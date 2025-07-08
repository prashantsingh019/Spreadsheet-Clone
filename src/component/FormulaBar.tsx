

function FormulaBar() {
  return (
        <section className="h-[6.5%] w-full pl-8 flex justify-between text-[12px] items-center">

          <div className="left bg-[#E2E2E2] w-[631px] h-[88%] pt-1">

            <div className="p-1 h-[90%] formula-bar flex items-center  gap-2">
           
              <div className="tab flex rounded bg-[#EEEEEE] border border-[#EEEEEE] p-1 text-[#545454]">
                {" "}
                <img src="./Link.svg" className="w-4 mr-0.5"/> Q3 Financial Overview
              </div>
              <img src="./Arrow Sync.svg" className="w-4" />
            
            </div>

          </div>


          <div className="right flex items-center font-medium gap-0.5 text-[#505450]">
            <div className="flex items-center gap-2 bg-[#D2E0D4] px-4 py-2">
              <img src="/Arrow Split (1).svg" />
              ABC
              <img src="/More.svg" />
            </div>

            <div className="flex items-center gap-2 bg-[#DCCFFC]  px-4 py-2">
              <img src="/Arrow Split (2).svg" />
              Answer a question
              <img src="/More.svg" />
            </div>

            <div className="flex items-center gap-2 bg-[#FAC2AF]  px-4 py-2">
              <img src="/Arrow Split (2).svg" />
              Extract
                <img src="/More.svg" />
              </div>
            
            <div className="bg-[#CBCBCB] px-2 py-2 w-[122px] flex justify-center items-center]">
              <img src="/Add.svg" />
            </div>
           
          </div>
        </section>
  )
}

export default FormulaBar