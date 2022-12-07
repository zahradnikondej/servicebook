const Field = ({ placeholder, maxLenght, style, type, name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      maxLength={maxLenght}
      style={style}
      name={name}
    />
  );
};

export { Field };
