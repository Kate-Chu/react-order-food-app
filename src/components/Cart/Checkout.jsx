import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const confirmHandler = event =>{
    event.preventDefault()
  }

  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">姓名</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">路/街</label>
        <input type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">郵遞區號</label>
        <input type="text" id="postal" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">縣市</label>
        <input type="text" id="city" />
      </div>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
