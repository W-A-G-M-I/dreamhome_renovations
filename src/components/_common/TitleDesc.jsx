const TitleDesc = ({ title, desc, containerStyle, titleStyle, descStyle }) => {
  return (
    <div className={containerStyle}>
      <h2 className={titleStyle}>{title}</h2>
      <p className={descStyle}>{desc}</p>
    </div>
  );
};

export default TitleDesc;
