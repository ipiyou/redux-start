import FloatButton from "../components/routeButton/FloatButton";
import ButtonElement from "../components/userList/ButtonElement";
import InputElement from "../components/userList/InputElement";
import UserItem from "../components/userList/UserItem";
import useSelect from "../hook/user/useSelect";
import useUser from "../hook/user/useUser";

function UserListContainer() {
  const { userList, input } = useSelect();
  const { add, remove, toggle, change } = useUser();

  return (
    <>
      <InputElement value={input} ChangeEvent={change} />
      <ButtonElement
        display="추가"
        ClickEvent={add}
        info={{ Text: input, id: userList.length + 1 }}
      />
      <FloatButton float="right" Route="Count" />
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

export default UserListContainer;
