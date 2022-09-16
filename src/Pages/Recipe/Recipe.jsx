import React from 'react';
import { Outlet, useParams, Link, NavLink } from 'react-router-dom';
import { ENDPOINTS } from '../../api/endpoints';
import { useFetch } from '../../api/use-fetch';
import styles from './index.module.scss'

export const Recipe = (props) => {
  const { categoryName, recipeName, id } = useParams();// eslint-disable-next-line
  const { data, loading, error } = useFetch(`${ENDPOINTS.DETEAIL}?i=${id}`);
  const recipe = data?.meals?.at(0) ?? null;

  const tabs = [
    { label: 'Ricetta', path: './istruzioni' },
    { label: 'Ingredienti', path: './ingredienti' },
    { label: 'YouTube', path: './youtube' },
  ];

  if (!data || loading) {
    return 'loading...';
  }

  console.log(data);

  return (
    <>
      <div className={styles.SingleRecipe}>
        <header>
          <div className="row">
            <div className="col-auto"> 
             <h2 className={styles.linkcategory}>
                <Link to={`/catalogo/${categoryName}`}>{categoryName}</Link>
              </h2>
             <h1 className={styles.titleRecipe}>{recipeName}</h1>
              <figure>
                <img width={100} src={recipe.strMealThumb} alt={recipeName} />
              </figure>
            </div>
            <div className="col">
             
            
            </div>
          </div>
        </header>

        <ul className="links">
          {tabs.map(({ label, path }) => (
            <li className="nav-item" key={path}>
              <NavLink
                className={({ isActive }) =>
                  `link ${isActive ? 'active' : 'not-active'}`
                }
                style={({ isActive}) => {
                return {
                  color: isActive ? 'rgb(153, 82, 6)' : 'gray',
                  pointerEvents: isActive ? 'none' : 'auto',
                  opacity: isActive ? 0.4 : 1,
                
                };
              }}
                to={path}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Outlet context={recipe} />

        {/* {} */}
      </div>
    </>
  );
};

export default Recipe;