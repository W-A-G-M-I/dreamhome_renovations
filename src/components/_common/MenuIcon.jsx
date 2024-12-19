const MenuIcon = ({ toggleShow, show }) => {
  return (
    <div className="btn__menu" onClick={toggleShow}>
      <span
        className={`btn__stroke ${show && "btn__stroke--active -rotate-45"}`}
      />
      <span className={`btn__stroke ${show && "opacity-0"}`} />
      <span
        className={`btn__stroke ${show && "btn__stroke--active rotate-45"}`}
      />
    </div>
  );
};

export default MenuIcon;
