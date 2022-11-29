const Field = ({ placeholder, maxLenght, style, type }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      maxLength={maxLenght}
      style={style}
    />
  );
};

export { Field };
