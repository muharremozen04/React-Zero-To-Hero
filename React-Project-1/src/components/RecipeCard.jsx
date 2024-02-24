import styles from "./styles/RecipeCard.module.css";

function RecipeCard(props) {
  const {
    additionalTime,
    cookTime,
    directions,
    id,
    imgUrl,
    ingredients,
    prepTime,
    servings,
    title,
    totalTime,
  } = props.recipies;

  return (
    <div className={styles.Main}>
      <div className={styles.MainContainer}>
        <div className={styles.imgUrl}>
          <img src={imgUrl} alt="image" />

          <div className={styles.id}>
            <h3>
              {id} // Title : {title}
            </h3>
          </div>

          <div className={styles.prepTime}>
            <p>prepTime = {prepTime}</p>
            <p> cookTime = {cookTime}</p>
          </div>

          <div className={styles.additionalTime}>
            <p>additionalTime = {additionalTime}</p>
          </div>

          <div className={styles.totalTime}>
            <p>totalTime = {totalTime}</p>
          </div>

          <div className={styles.servings}>
            <p>servings = {servings}</p>
          </div>

          <div className={styles.directions}>
            <strong>Directions</strong>
            <p> {directions}</p>
          </div>

          <div className={styles.ingredients}>
            <strong>ingredients</strong>
            <p>{ingredients}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
