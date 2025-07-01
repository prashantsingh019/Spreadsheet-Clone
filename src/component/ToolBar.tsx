function ToolBar() {
  return (
    <section className="h-[5%] flex justify-between p-1">
      <div className="left flex items-center gap-3">
        <div className="flex items-center gap-1">
          <img src="./Chevron Double.svg" />
          Toolbar
        </div>
        <div className="flex items-center gap-1">
          <img src="./Eye.svg" />
          Hide fields
        </div>
        <div className="flex items-center gap-1">
          <img src="./Arrow Sort.svg" />
          Sort
        </div>
        <div className="flex items-center gap-1">
          <img src="./Filter.svg" />
          Filter
        </div>
        <div className="flex items-center gap-1">
          <img src="./Arrow Autofit.svg" />
          Cell view
        </div>
      </div>
      <div className="right flex">
        <button className="px-2 py-[6px] flex items-center gap-1">
          <img src="./Arrow Download.svg" />
          Import
        </button>
        <button className="px-2 py-[6px] flex items-center gap-1">
          <img src="./Arrow Upload.svg" />
          Export
        </button>
        <button className="px-2 py-[6px] flex items-center gap-1">
          <img src="./Share.svg" />
          Share
        </button>
        <button className="px-6 py-2 rounded-md flex items-center gap-1 bg-[#4B6A4F] text-white">
          <img src="./Arrow Split.svg" />
          New Action
        </button>
      </div>
    </section>
  );
}

export default ToolBar;
