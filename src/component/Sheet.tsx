import { useState } from "react";

type cellData = string[][];

type Column = {
  headerName: string;
  iconUrl: string;
  color: string;
  bgColor: string;
};
export default function Sheet() {
  const rows = 50;
  const cols = 10;

  const [columnWidth, setColumnWidth] = useState<number[]>(() => {
    const widths = Array(cols).fill(122);
    widths[0] = 260; // First column wider
    return widths;
  });

  const [columns] = useState<Column[]>([
    {
      headerName: "Job Request",
      iconUrl: "./Icons for headers/briefcase.svg",
      color: "",
      bgColor: "",
    },

    {
      headerName: "Submitted",
      iconUrl: "./Icons for headers/Calendar.svg",
      color: "",
      bgColor: "",
    },

    {
      headerName: "Status",
      iconUrl: "./Icons for headers/Chevron Circle.svg",
      color: "",
      bgColor: "",
    },

    {
      headerName: "Submitter",
      iconUrl: "./Icons for headers/Person.svg",
      color: "",
      bgColor: "",
    },

    {
      headerName: "URL",
      iconUrl: "./Icons for headers/Globe.svg",
      color: "",
      bgColor: "",
    },

    {
      headerName: "Assigned",
      iconUrl: "./Icons for headers/Emoji.svg",
      color: "",
      bgColor: "",
    },

    {
      headerName: "Priority",
      iconUrl: "",
      color: "#655C80",
      bgColor: "#EAE3FC",
    },

    {
      headerName: "Due Date",
      iconUrl: "",
      color: "#655C80",
      bgColor: "#EAE3FC",
    },

    {
      headerName: "Est. Value",
      iconUrl: "",
      color: "#8C6C62",
      bgColor: "#FFE9E0",
    },
  ]);

  const [data] = useState<cellData>(() => {
    const initialData = Array.from({ length: rows }, () =>
      Array(cols).fill("")
    );
    initialData[0][0] = "Launch social media campaign for product XYZ";
    initialData[1][0] = "Update press kit for company redesign";
    initialData[2][0] = "Finalize user testing feedback for app update";
    initialData[3][0] = "Design new features for the website";
    initialData[4][0] = "Prepare financial report for Q4";

    initialData[0][1] = "15-11-2024";
    initialData[1][1] = "28-10-2024";
    initialData[2][1] = "05-12-2024";
    initialData[3][1] = "10-01-2025";
    initialData[4][1] = "25-01-2025";

    initialData[0][2] = "In-process";
    initialData[1][2] = "Need to start";
    initialData[2][2] = "In-process";
    initialData[3][2] = "Complete";
    initialData[4][2] = "Blocked";

    initialData[0][3] = "Aisha Patel";
    initialData[1][3] = "Irfan Khan";
    initialData[2][3] = "Mark Johnson";
    initialData[3][3] = "Emily Green";
    initialData[4][3] = "Jessica Brown";

    initialData[0][4] = "www.aishapatel.com";
    initialData[1][4] = "www.irfankhanportfolio.com";
    initialData[2][4] = "www.markjohnsondesigns.com";
    initialData[3][4] = "www.emilygreenart.com";
    initialData[4][4] = "www.jessicabrowncreative.com";

    initialData[0][5] = "Sophie Choudhury";
    initialData[1][5] = "Tejas Pandey";
    initialData[2][5] = "Rachel Lee";
    initialData[3][5] = "Tom Wright";
    initialData[4][5] = "Kevin Smith";

    initialData[0][6] = "Medium";
    initialData[1][6] = "High";
    initialData[2][6] = "Medium";
    initialData[3][6] = "Low";
    initialData[4][6] = "Low";

    initialData[0][7] = "20-11-2024";
    initialData[1][7] = "30-10-2024";
    initialData[2][7] = "10-12-2024";
    initialData[3][7] = "15-01-2025";
    initialData[4][7] = "30-01-2025";

    initialData[0][8] = "6,200,000 ₹";
    initialData[1][8] = "3,500,000 ₹";
    initialData[2][8] = "4,750,000 ₹";
    initialData[3][8] = "900,000 ₹";
    initialData[4][8] = "2,800,000 ₹";

    return initialData;
  });

  const [editingCell, setEditingCell] = useState<[number, number] | null>(null);

  const ArrowMovements = (
    e: React.KeyboardEvent<HTMLDivElement>,
    rowIndex: number,
    colsIndex: number
  ) => {
    let newRow = rowIndex;
    let newCol = colsIndex;

    if (e.key === "ArrowDown") newRow++;
    else if (e.key === "ArrowUp") newRow--;
    else if (e.key === "ArrowLeft") newCol--;
    else if (e.key === "ArrowRight") newCol++;
    else return;

    e.preventDefault();
    setEditingCell([newRow, newCol]);
  };

  const handleColumnResize = (e: React.MouseEvent, colIndex: number) => {
    e.preventDefault();
    const startingPosition = e.clientX;
    const startWidth = columnWidth[colIndex];

    const onMouseMove = (moveEvent: MouseEvent) => {
      const newPosition = startWidth + (moveEvent.clientX - startingPosition);
      setColumnWidth((prev) => {
        const newData = [...prev];
        newData[colIndex] = Math.max(50, newPosition);
        return newData;
      });
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div className="flex flex-col overflow-y-scroll h-full text-[#121212]">
      {/* Header Row */}
      <section className="flex bg-gray-200">
        {/* Row number header */}
        <div className="w-[32px] min-w-[32px] flex justify-center items-center border text-[#757575] border-white bg-[#EEEEEE]">
          #
        </div>

        {/* Column names */}
        <div
          className="grid flex-1 text-[13px]"
          style={{
            gridTemplateColumns: columnWidth.map((w) => `${w}px`).join(" "),
          }}
        >
          {columns.map((colName, i) => (
            <div
              key={i}
              className={`
 
  font-semibold flex justify-between items-center relative py-0.5 text-center pr-5 pl-2 border border-white
`}
              style={{
                color: colName.color || "#757575",
                backgroundColor: colName.bgColor || "#e2e1e1",
              }}
            >
              <span className="flex gap-1 items-center">
                {colName.iconUrl !== "" ? (
                  <img src={colName.iconUrl} className="w-4 h-4" />
                ) : (
                  ""
                )}
                {colName.headerName}
              </span>

              <div
                className="absolute top-0 right-0 w-1 h-full cursor-col-resize z-10"
                onMouseDown={(e) => handleColumnResize(e, i)}
              ></div>
            </div>
          ))}
        </div>
      </section>

      {/* Rows */}
      {data.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {/* Row number */}
          <div className="text-[#757575] text-[14px] w-[32px] min-w-[32px] border border-gray-300 flex justify-center items-center">
            {rowIndex + 1}
          </div>

          {/* Row cells */}
          <div
            className="grid flex-1"
            style={{
              gridTemplateColumns: columnWidth.map((w) => `${w}px`).join(" "),
            }}
          >
            {row.map((cell, colsIndex) => {
              const isEditing =
                editingCell?.[0] === rowIndex && editingCell?.[1] === colsIndex;

              return (
                <div
                  key={colsIndex}
                  contentEditable={isEditing}
                  tabIndex={0}
                  className={`truncate overflow-hidden whitespace-nowrap text-[12px] w-full border border-gray-300 flex items-center  min-h-[30px] h-[30px] px-1 py-0.5 outline-none ${
                    isEditing ? "border-green-700" : ""
                  }`}
                  onClick={() => setEditingCell([rowIndex, colsIndex])}
                  onKeyDown={(e) => ArrowMovements(e, rowIndex, colsIndex)}
                >
                  {colsIndex === 2 || colsIndex === 6? (
                    <span
                      className={`px-2 py-[2px] rounded-full text-xs font-medium
        ${
          cell === "In-process"
            ? "bg-[#FFF3D6] text-[#85640B]"
            : cell === "Blocked"
            ? "bg-red-100 text-red-800"
            : cell === "Complete"
            ? "bg-green-100 text-green-800"
            : cell === "Need to start"
            ? "bg-[#E2E8F0] text-[#475569]"
            : cell === "Low" ?"bg-[#E2E8F0] text-[#1A8CFF]":
            cell === "Medium"?"text-[#C29210]":cell === "High" ? "text-[#EF4D44]":''
        }
      `}
                    >
                      {cell}
                    </span>
                  ) : (
                    cell
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
