import React from "react";
import Sushi from "./Sushi/Sushi";
import classes from "./SushiKit.module.css";

export default ({ price, ingredients }) => {
  let ingredientsOutput = [];

  Object.keys(ingredients).forEach((type) => {
    for (let i = 0; i < ingredients[type]; i++) {
      ingredientsOutput.push(<Sushi key={type + i} type={type} />);
    }
  });

  return (
    <div className={classes.SushiKit}>
      <div className={classes.bento}>{ingredientsOutput}</div>
      <div className={classes.price}>Total price: {price} som</div>
    </div>
  );
};
