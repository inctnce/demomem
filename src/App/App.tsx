import React from "react";
import Button from "./Button";
import style from "./style.module.css";

import god from "../assets/images/god.png";

const App = () => {
  const [close, setClose] = React.useState(false);

  return (
    <div className={style.app}>
      <div className={close ? style.closed_wrapper : undefined}>
        <div className={style.question}>
          <span className={style.we}>Мы&nbsp;</span>
          <span className={style.for_sure}>обязательно&nbsp;</span>
          <span className={style.survive}>выживем?</span>
        </div>

        <div className={style.variants}>
          <Button title="Да..." textStyle={style.v1} isAnimate={true} />
          <Button title={`Одному богу известно`} textStyle={style.v2} onClick={() => setClose(true)} />
          <Button title="Нет!11" textStyle={style.v3} isAnimate={true} />
        </div>
      </div>
      <div className={close ? style.show_god : style.god}>
        <img src={god} alt="" />
      </div>
    </div>
  );
};
export default App;
