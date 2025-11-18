import RightArrow from "../svgr/RightArrow.svg?react";

function ArrowButton({ direction, onClick, disabled }) {
  const isLeft = direction === "left";

  return disabled ? (
    <> </>
  ) : (
    <button
      onClick={onClick}
      className={`
        absolute top-1/2 cursor-pointer -translate-y-1/2 
        bg-primary text-white flex justify-center items-center h-12 w-12 rounded-full  shadow-md 
        hover:bg-primary/50 transition
        ${isLeft ? "-left-15" : "-right-15"}
      `}
    >
      {isLeft ? (
        <RightArrow className="rotate-180 w-7" />
      ) : (
        <RightArrow className="w-7" />
      )}
    </button>
  );
}

export default ArrowButton;
