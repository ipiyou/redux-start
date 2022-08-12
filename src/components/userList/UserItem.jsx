import ButtonElement from "./ButtonElement";
import React from "react";

const UserItem = React.memo(({ List, remove, toggle, index }) => {
  return (
    <>
      <div
        style={{ color: `${List.toggle ? "red" : "black"}` }}
        onClick={() => toggle(index)}
      >
        {List.Text}
      </div>
      <ButtonElement
        display="삭제"
        ClickEvent={() => remove(index)}
        info={{ id: index }}
      />
    </>
  );
});

export default UserItem;
