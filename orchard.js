/* Capture click events and delegate down */
document.addEventListener("click", (e) => {
    /* Right now, we have no targets - do not do anything */
    e.preventDefault();

    /* Capture the closest anchor to the click */
	const origin = e.target.closest("a");

    /* If there's no origin, send it back */
	if (!origin) return;

    /* Otherwise, log it */
	console.log(origin);
});
