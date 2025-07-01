function TitleBar(){
    return <section className="h-[5%] flex justify-between p-1">
          <div className="left-sect flex items-center gap-1 text-[#AFAFAF] font-medium">
             <button className="border-none"><img src="./Panel.svg"/></button>
             <a>Workspace</a>
              <div className="icon"><img src="./Chevron.svg"/></div>
             <a>Folder 2</a>
             <div className="icon"><img src="./Chevron.svg"/></div>
             <a>Spreadsheet 3</a>
              <div className="icon">
                <img src="./Icon frame.svg"/>
              </div>
          </div>
          <div className="right-sect flex items-center gap-2">
            <div className="input-box flex items-center gap-1 bg-[#F6F6F6] p-2">
               <div className="icon"><img src="./search2.svg"/></div>
               <input type="text" placeholder="Search within sheet" className="bg-[#F6F6F6] outline-none"/>
            </div>
            <div className="icon">
                <img src="./Alert.svg"/>
            </div>
            <div className="profile">
                <img src="./Profile_block.png" />
            </div>
          </div>
        </section>
}

export default TitleBar;