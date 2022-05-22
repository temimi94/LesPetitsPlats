/**
	* Créer des objets globaux pour toutes les catégories
	* @param {Array | Objects} recipes 
	* @returns {Array}
	*/
const generateFilters = (recipes) => {
	let ingredients = [];
	let apparatus = [];
	let ustensils = [];
	recipes.forEach((recipe) => {
		ingredients = [
			...new Set([...ingredients, ...recipe.ingredients.map((i) => i.ingredient)])].sort();
		ustensils = [...new Set([...ustensils, ...recipe.ustensils.map((u) => u)])].sort();
		apparatus = [...new Set([...apparatus, ...[recipe.appliance]])].sort();
	});
	return { ingredients, ustensils, apparatus };
};

/**
	* Récupérer des données sur un fichier local
	* @returns {Array | Objects}
	*/
const getData = async () =>
	await fetch("./scripts/data/recipes.json", {
		mode: "no-cors",
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	})
		.then((res) => res.json())
		.catch((err) => console.log("Une erreur se produit lors de la récupération des recettes", err));

/**
	* Créer une carte de recettes avec un constructeur
	* @param {Array | Object} recipes 
	*/
const createRecipesCard = (recipes) => {
	recipes.forEach((recipe) => {
		recipesSection.append(new RecipeCard(recipe).recipeCard);
	});
};
/*  */
const init = async () => {
	const { recipes } = await getData();
	generateFilters(recipes);
	listenOnInputs(recipes);
	createRecipesCard(recipes)
	filteredRecipes(recipes, globalSearchBar);
};

init();
