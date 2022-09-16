import React from 'react';
import MealListItem from "../MealListItem";
import styles from './index.module.scss'
 const MealList = (props) => {
  const {meals = [], categoryName = ''} = props;

  return (
      <section >
        <ul className={styles.MealList}>
          {meals.map((meal) => (
              <MealListItem key={meal.idMeal}
                            meal={meal}
                            categoryName={categoryName}
              />
          ))}
        </ul>
      </section>
  );
};

export default MealList;