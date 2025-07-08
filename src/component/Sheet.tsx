import { useEffect, useRef, useState } from "react";

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
    widths[0] = 260;
    return widths;
  });

  const [columns] = useState<Column[]>([
    {
      headerName: "Job Request",
      iconUrl: "./Icons for headers/briefcase.svg",
      color: "",
      bgColor: "",
    },
    { headerName: "Submitted", iconUrl: "./Icons for headers/Calendar.svg", color: "", bgColor: "" },
    { headerName: "Status", iconUrl: "./Icons for headers/Chevron Circle.svg", color: "", bgColor: "" },
    { headerName: "Submitter", iconUrl: "./Icons for headers/Person.svg", color: "", bgColor: "" },
    { headerName: "URL", iconUrl: "./Icons for headers/Globe.svg", color: "", bgColor: "" },
    { headerName: "Assigned", iconUrl: "./Icons for headers/Emoji.svg", color: "", bgColor: "" },
    { headerName: "Priority", iconUrl: "", color: "#655C80", bgColor: "#EAE3FC" },
    { headerName: "Due Date", iconUrl: "", color: "#655C80", bgColor: "#EAE3FC" },
    { headerName: "Est. Value", iconUrl: "", color: "#8C6C62", bgColor: "#FFE9E0" },
  ]);

  const [data] = useState<cellData>(() => {
    const d = Array.from({ length: rows }, () => Array(cols).fill(""));
    d[0][0] = "Launch social media campaign for product XYZ";
    d[1][0] = "Update press kit for company redesign";
    d[2][0] = "Finalize user testing feedback for app update";
    d[3][0] = "Design new features for the website";
    d[4][0] = "Prepare financial report for Q4";
    d[0][1] = "15-11-2024"; d[1][1] = "28-10-2024"; d[2][1] = "05-12-2024";
    d[3][1] = "10-01-2025"; d[4][1] = "25-01-2025";
    d[0][2] = "In-process"; d[1][2] = "Need to start"; d[2][2] = "In-process";
    d[3][2] = "Complete"; d[4][2] = "Blocked";
    d[0][3] = "Aisha Patel"; d[1][3] = "Irfan Khan"; d[2][3] = "Mark Johnson";
    d[3][3] = "Emily Green"; d[4][3] = "Jessica Brown";
    d[0][4] = "www.aishapatel.com"; d[1][4] = "www.irfankhanportfolio.com";
    d[2][4] = "www.markjohnsondesigns.com"; d[3][4] = "www.emilygreenart.com";
    d[4][4] = "www.jessicabrowncreative.com";
    d[0][5] = "Sophie Choudhury"; d[1][5] = "Tejas Pandey"; d[2][5] = "Rachel Lee";
    d[3][5] = "Tom Wright"; d[4][5] = "Kevin Smith";
    d[0][6] = "Medium"; d[1][6] = "High"; d[2][6] = "Medium";
    d[3][6] = "Low"; d[4][6] = "Low";
    d[0][7] = "20-11-2024"; d[1][7] = "30-10-2024"; d[2][7] = "10-12-2024";
    d[3][7] = "15-01-2025"; d[4][7] = "30-01-2025";
    d[0][8] = "6,200,000 ₹"; d[1][8] = "3,500,000 ₹"; d[2][8] = "4,750,000 ₹";
    d[3][8] = "900,000 ₹"; d[4][8] = "2,800,000 ₹";
    return d;
  });

  const [editingCell, setEditingCell] = useState<[number, number] | null>(null);

  const cellRefs = useRef<(HTMLDivElement | null)[][]>(
    Array.from({ length: rows }, () => Array(cols).fill(null))
  );

  useEffect(() => {
    if (editingCell) {
      const [r, c] = editingCell;
      const cell = cellRefs.current[r]?.[c];
      if (cell) cell.focus();
    }
  }, [editingCell]);

  const ArrowMovements = (
    e: React.KeyboardEvent<HTMLDivElement>,
    rowIndex: number,
    colIndex: number
  ) => {
    let newRow = rowIndex;
    let newCol = colIndex;

    if (e.key === "ArrowDown") newRow++;
    else if (e.key === "ArrowUp") newRow--;
    else if (e.key === "ArrowLeft") newCol--;
    else if (e.key === "ArrowRight") newCol++;
    else return;

    e.preventDefault();

    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
      setEditingCell([newRow, newCol]);
    }
  };

  const handleColumnResize = (e: React.MouseEvent, colIndex: number) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = columnWidth[colIndex];

    const onMouseMove = (e: MouseEvent) => {
      const newWidth = startWidth + (e.clientX - startX);
      setColumnWidth((prev) => {
        const updated = [...prev];
        updated[colIndex] = Math.max(50, newWidth);
        return updated;
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
      {/* Header */}
      <section className="flex bg-gray-200">
        <div className="w-[32px] min-w-[32px] flex justify-center items-center border text-[#757575] border-white bg-[#EEEEEE]">
          #
        </div>

        <div
          className="grid flex-1 text-[13px]"
          style={{ gridTemplateColumns: columnWidth.map(w => `${w}px`).join(" ") }}
        >
          {columns.map((col, i) => (
            <div
              key={i}
              className="font-semibold flex justify-between items-center relative py-0.5 text-center pr-5 pl-2 border border-white"
              style={{ color: col.color || "#757575", backgroundColor: col.bgColor || "#e2e1e1" }}
            >
              <span className="flex gap-1 items-center">
                {col.iconUrl && <img src={col.iconUrl} className="w-4 h-4" />}
                {col.headerName}
              </span>
              <div
                className="absolute top-0 right-0 w-1 h-full cursor-col-resize z-10"
                onMouseDown={(e) => handleColumnResize(e, i)}
              ></div>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      {data.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          <div className="text-[#757575] text-[14px] w-[32px] min-w-[32px] border border-gray-300 flex justify-center items-center">
            {rowIndex + 1}
          </div>
          <div
            className="grid flex-1"
            style={{ gridTemplateColumns: columnWidth.map(w => `${w}px`).join(" ") }}
          >
            {row.map((cell, colIndex) => {
              const isEditing = editingCell?.[0] === rowIndex && editingCell?.[1] === colIndex;

              const badge = (colIndex === 2 || colIndex === 6) && (
                <span
                  className={`px-2 py-[2px] rounded-full text-xs font-medium ${
                    cell === "In-process"
                      ? "bg-[#FFF3D6] text-[#85640B]"
                      : cell === "Blocked"
                      ? "bg-red-100 text-red-800"
                      : cell === "Complete"
                      ? "bg-green-100 text-green-800"
                      : cell === "Need to start"
                      ? "bg-[#E2E8F0] text-[#475569]"
                      : cell === "Low"
                      ? "bg-[#E2E8F0] text-[#1A8CFF]"
                      : cell === "Medium"
                      ? "text-[#C29210]"
                      : cell === "High"
                      ? "text-[#EF4D44]"
                      : ""
                  }`}
                >
                  {cell}
                </span>
              );

              return (
                <div
                  key={colIndex}
                  ref={(el) => {
                    if (!cellRefs.current[rowIndex]) return;
                    cellRefs.current[rowIndex][colIndex] = el;
                  }}
                  contentEditable={isEditing}
                  tabIndex={0}
                  className={`truncate overflow-hidden whitespace-nowrap text-[12px] w-full border border-gray-300 flex items-center min-h-[30px] h-[30px] px-1 py-0.5 outline-none ${
                    isEditing ? "border-green-700" : ""
                  }`}
                  onClick={() => setEditingCell([rowIndex, colIndex])}
                  onKeyDown={(e) => ArrowMovements(e, rowIndex, colIndex)}
                  suppressContentEditableWarning
                  onInput={(e) => {
                    const newValue =
                      (e.currentTarget as HTMLDivElement).textContent || "";
                    const colName = columns[colIndex]?.headerName || `Column ${colIndex + 1}`;
                    console.log(`Row: ${rowIndex + 1}, Column: ${colName}, Value: ${newValue}`);
                  }}
                >
                  {badge || cell}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
