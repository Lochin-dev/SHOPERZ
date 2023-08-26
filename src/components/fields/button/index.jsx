import { memo } from "react";

const index = memo(({ children, type, onClick = () => {}, className }) => {
  return (
    <>
      <button type={type} onClick={onClick} className={className}>
        {children}
      </button>
    </>
  );
});

export default index;
