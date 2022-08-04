import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/foods.jpeg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>里艾特點餐機</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="meals" />
      </div>
      ;
    </>
  );
};

export default Header;
