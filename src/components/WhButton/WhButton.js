import "./WhButton.styles.scss";

const WhButton = (props) => {
  const { type, text, ...rest } = props;

  return (
    <button className={`button ${type}`} {...rest}>
      {text.toUpperCase()}
    </button>
  );
};

export default WhButton;
