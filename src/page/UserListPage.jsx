import { useRef } from "react";
import ButtonElement from "../components/userList/ButtonElement";
import InputElement from "../components/userList/InputElement";
import UserItem from "../components/userList/UserItem";
import useSelect from "../hook/user/useSelect";
import useUser from "../hook/user/useUser";

function UserListPage() {
  const { userList, input } = useSelect();
  const { idx, add, remove, toggle, change } = useUser();
  return (
    <>
      <InputElement value={input} ChangeEvent={change} />
      <ButtonElement
        display="추가"
        ClickEvent={add}
        info={{ Text: input, id: idx.current }}
      />
      {userList.map((e) => (
        <UserItem
          key={e.id}
          List={e}
          remove={remove}
          toggle={toggle}
          index={e.id}
        />
      ))}
    </>
  );
}

export default UserListPage;