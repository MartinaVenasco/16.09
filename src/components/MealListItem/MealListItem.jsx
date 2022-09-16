import React from 'react';
import {Link} from 'react-router-dom';
import styles from './meal-list-item.module.scss';

 const MealListItem = (props) => {
  const {meal = {}, categoryName = ''} = props;

  return (
      <li className={styles['MealListItem']}>
        <div className={styles['thumbnail-wrapper']}>
          <img
              className={styles.thumbnail}
              src={meal.strMealThumb}
              alt={`preview of ${meal.strCategory} recipe`}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{meal.strMeal}</h3>
        </div>
        <Link  to={`/catalogo/${categoryName}/${meal.strMeal}/${meal.idMeal}`}
              title={`naviga sul catalogo ${meal.strMeal}`}
              className={styles.link}
              state={{ meal, categoryName }}
        >
          {meal.strMeal}
        </Link>
      </li>
  );
};


export default MealListItem