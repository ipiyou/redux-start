function ButtonElement({ display, ClickEvent, info }) {
  return (
    <button onClick={() => ClickEvent(info)}>
      {display}
    </button>
  );
}

export default ButtonElement;
