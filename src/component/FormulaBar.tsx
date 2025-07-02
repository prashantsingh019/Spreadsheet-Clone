

function FormulaBar() {
  return (
        <section className="h-[5%] pl-6 flex justify-between text-[12px]">
          <div className="left bg-[#E2E2E2] w-[50%]">
            <div className="formula-bar flex items-center gap-2 ">
              <div className="tab flex items-center gap-2 bg-[#EEEEEE] border border-[#EEEEEE] p-2">
                {" "}
                <img src="./Link.svg" /> Q3 Financial Overview
              </div>
              <img src="./Arrow Sync.svg" />
            </div>
          </div>
          <div className="right flex items-center">
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
            
            <div className="bg-[#CBCBCB] px-2 py-2">
              <img src="/Add.svg" />
            </div>
           
          </div>
        </section>
  )
}

export default FormulaBar