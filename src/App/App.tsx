import React from "react";
import Button from "./Button";
import style from "./style.module.css";

const App = () => {
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    setStart(true);
  });

  return (
    <div className={style.app}>
      <div className={style.question}>
        <span className={style.we}>Мы&nbsp;</span>
        <span className={style.for_sure}>обязательно&nbsp;</span>
        <span className={style.survive}>выживем?</span>
      </div>

      <div className={style.variants}>
        <Button title="Да..." textStyle={style.v1} />
        <Button title={`Одному\n богу\n известно`} textStyle={style.v2} />
        <Button title="Нет!11" textStyle={style.v3} />
      </div>
    </div>
  );
};
export default App;
