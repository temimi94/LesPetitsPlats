/**
 *
 * @param {Array | Objects} recipes
 */
const listenOnInputs = (recipes) => {
	const { ingredients, ustensils, apparatus } = generateFilters(recipes);

	/**
	 * Affichage des ustensils au clique sur le toggle
	 */
	ustensilsForm.addEventListener("click", () => {
		if (ustensilsWrapper.classList.contains("ustensils__results__undisplayed")) {
			apparatusChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
			apparatusWrapper.classList.replace("apparatus__results__displayed", "apparatus__results__undisplayed")
			apparatusWrapper.innerHTML = "";
			ingredientChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
			ingredientWrapper.classList.replace("ingredient__results__displayed", "ingredient__results__undisplayed")
			ingredientWrapper.innerHTML = "";
			ustensilsChevron.classList.replace("fa-chevron-down", "fa-chevron-up");
			ustensilsWrapper.classList.replace("ustensils__results__undisplayed","ustensils__results__displayed")
			ustensils.forEach((ustensil) => {
				return ustensilsWrapper.append(createDom("li", `${ustensil}`, { class: "ustensil__item" }));
			});
		} else {
			ustensilsChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
			ustensilsWrapper.classList.replace("ustensils__results__displayed","ustensils__results__undisplayed")
			ustensilsWrapper.innerHTML = "";
		}
		listenOnUstensilsInput();
	});

	ustensilsInput.addEventListener("keyup", (e) => {
		ustensilsWrapper.innerHTML = "";
		if (e.target.value.length > 3) {
			const query = e.target.value.toLowerCase();
			const results = ustensils.filter((ustensil) => {
				return ustensil.toLowerCase().includes(query);
			});
			results.forEach((result) => {
				return ustensilsWrapper.append(createDom("li", `${result}`, { class: "ustensil__item" }));
			});
		}
		listenOnUstensilsInput();
	});

	const listenOnUstensilsInput = () => {
		const ustensilsItems = document.querySelectorAll(".ustensil__item");
		ustensilsItems.forEach((item) => {
			item.addEventListener("click", () => {
				selectedFilters.push(item.textContent);
				const selectedFiltersUnduplicated = [...new Set(selectedFilters)];
				createFiltersBar(selectedFiltersUnduplicated, recipes);
			});
		});
	};

	/**
	 * Affichage des ingredients au clique sur le toggle
	 */
	ingredientForm.addEventListener("click", () => {
		if (ingredientWrapper.classList.contains("ingredient__results__undisplayed")) {
			ingredientChevron.classList.replace("fa-chevron-down", "fa-chevron-up");
			ingredientWrapper.classList.replace("ingredient__results__undisplayed","ingredient__results__displayed")
			apparatusChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
			ustensilsChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
			ustensilsWrapper.classList.replace("ustensils__results__displayed", "ustensils__results__undisplayed")
			apparatusWrapper.classList.replace("apparatus__results__displayed", "apparatus__results__undisplayed")
			apparatusWrapper.innerHTML = "";
			ingredients.forEach((ingredient) => {
				return ingredientWrapper.append(
					createDom("li", `${ingredient}`, { class: "ingredient__item" })
				);
			});
		} else {
			ingredientChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
			ingredientWrapper.classList.replace("ingredient__results__displayed", "ingredient__results__undisplayed")
			ingredientWrapper.innerHTML = "";
		}
		listenOnIngredientsItems();
	});

	ingredientInput.addEventListener("keyup", (e) => {
		ingredientWrapper.innerHTML = "";
		if (e.target.value.length >= 3) {
			const query = e.target.value.toLowerCase();
			const results = ingredients.filter((ingredient) => {
				return ingredient.toLowerCase().includes(query);
			});
			results.forEach((result) => {
				return ingredientWrapper.append(createDom("li", `${result}`, { class: "ingredient__item" }));
			});
		}
		listenOnIngredientsItems();
	});

	const listenOnIngredientsItems = () => {
		const ingredientsItems = document.querySelectorAll(".ingredient__item");
		ingredientsItems.forEach((item) => {
			item.addEventListener("click", () => {
				selectedFilters.push(item.textContent);
				const selectedFiltersUnduplicated = [...new Set(selectedFilters)];
				createFiltersBar(selectedFiltersUnduplicated, recipes);
			});
		});
	};

	/**
	 * Affichage des appareils au clique sur le toggle
	 */
	apparatusForm.addEventListener("click", () => {
		if (apparatusWrapper.classList.contains("apparatus__results__undisplayed")) {
			apparatusChevron.classList.replace("fa-chevron-down", "fa-chevron-up");
			ingredientChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
			ustensilsChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
			apparatusWrapper.classList.replace("apparatus__results__undisplayed", "apparatus__results__displayed")
			ingredientWrapper.classList.replace("ingredient__results__displayed", "ingredient__results__undisplayed")
			ustensilsWrapper.classList.replace("ustensils__results__displayed", "ustensils__results__undisplayed")
			apparatus.forEach((apparatus) => {
				apparatusWrapper.innerHTML += `<li class="apparatus__item">${apparatus}</li>`;
				ustensilsWrapper.innerHTML = "";
				ingredientWrapper.innerHTML = "";
			});
		} else {
			apparatusChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
			apparatusWrapper.classList.replace("apparatus__results__displayed", "apparatus__results__undisplayed")
			apparatusWrapper.innerHTML = "";
		}
		listenOnApparatusItems();
	});

	apparatusInput.addEventListener("keyup", (e) => {
		apparatusWrapper.innerHTML = "";
		if (e.target.value.length > 3) {
			const query = e.target.value.toLowerCase();
			const results = apparatus.filter((item) => {
				return item.toLowerCase().includes(query);
			});
			results.forEach((result) => {
				return apparatusWrapper.append(createDom("li", `${result}`, { class: "apparatus__item" }));
			});
		}
		listenOnApparatusItems();
	});

	const listenOnApparatusItems = () => {
		const apparatusItems = document.querySelectorAll(".apparatus__item");
		apparatusItems.forEach((item) => {
			item.addEventListener("click", () => {
				selectedFilters.push(item.textContent);
				const selectedFiltersUnduplicated = [...new Set(selectedFilters)];
				createFiltersBar(selectedFiltersUnduplicated, recipes);
			});
		});
	};
};
