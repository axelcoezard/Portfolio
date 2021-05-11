(() => {

	let parentId;
	let parent;
	let parentChildren;
	let intervalIndex;
	let intervalMaximum;
	let intervalDelay;

	parentId = "Header-Subtitles"
	parent = document.getElementById(parentId)
	parentChildren = [...parent.children]

	intervalIndex = 0
	intervalMaximum = parentChildren.length
	intervalDelay = 5000

	setInterval(() => {
		if (intervalIndex >=intervalMaximum)
			intervalIndex = 0;

		parentChildren.forEach((child) => {
			child.classList.remove("current");
		})
		parentChildren[intervalIndex].classList.add("current");

		intervalIndex++;
	}, intervalDelay);
})();
