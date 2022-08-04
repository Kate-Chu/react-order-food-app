import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "壽司",
    description: "日本料理",
    price: 240,
  },
  {
    id: "m2",
    name: "德國香腸",
    description: "歐洲料理",
    price: 240,
  },
  {
    id: "m3",
    name: "豬肉漢堡",
    description: "美式料理",
    price: 180,
  },
  {
    id: "m4",
    name: "水煮養生餐",
    description: "蔬食料理",
    price: 170,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
