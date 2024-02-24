import { recipies } from "../../recipies.js";
import RecipeCard from "./RecipeCard";
import styles from "./styles/RecipeList.module.css";
function RecipeList() {
  return (
    <div className={styles.recipeList}>
      {recipies.map((recipe) => (
        <RecipeCard recipies={recipe}></RecipeCard>
      ))}
    </div>
  );
}

export default RecipeList;
