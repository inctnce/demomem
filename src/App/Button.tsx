import React from "react";
import style from "./style.module.css";

type Props = {
  title: string;
  textStyle?: string;
};

const Button = (props: Props) => {
  const [shake, setShake] = React.useState<boolean>(false);

  const animate = () => {
    setShake(true);
    const timeout = setTimeout(() => setShake(false), 2000);
    return () => clearTimeout(timeout);
  };

  return (
    <button className={shake ? style.shake : undefined} onClick={animate}>
      <div className={style.variant + " " + props.textStyle}>{props.title}</div>
    </button>
  );
};

export default Button;
