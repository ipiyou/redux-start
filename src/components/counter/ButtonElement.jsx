function ButtonElement({ display, ClickEvent }) {
  return (
    <button  onClick={ClickEvent}>
      {display}
    </button>
  );
}

export default ButtonElement;
