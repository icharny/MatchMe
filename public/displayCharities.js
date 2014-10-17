function toggle_expand(id1, id2, type) {
  id1.style.display = type;
  id2.style.display = type;
}

function displayCharity(charity, charitiesDiv, closeButtonTag, descriptionTextTag) {
	var charityDiv = document.createElement('div');
	charityDiv.innerHTML=charity.charityName;
	charitiesDiv.appendChild(charityDiv)
	var detailsButton = document.createElement('a');
	detailsButton.innerHTML = 'Details';
	detailsButton.setAttribute("class", "right");
	detailsButton.setAttribute("href", "javascript:toggle_expand("+closeButtonTag+", "+descriptionTextTag+",'inline')");
	charityDiv.appendChild(detailsButton);
	charityDiv.appendChild(document.createElement('br'));
	var closeButton = document.createElement('a');
	closeButton.innerHTML = '(close)';
	closeButton.setAttribute("class", "right hide");
	closeButton.setAttribute("href", "javascript:toggle_expand("+closeButtonTag+", "+descriptionTextTag+",'none')");
	closeButton.setAttribute("id", closeButtonTag);
	charityDiv.appendChild(closeButton);
	var details = document.createElement('div');
	details.innerHTML = charity.description+'<br>';
	details.setAttribute("class", "hide");
	details.setAttribute("id", descriptionTextTag);
	charityDiv.appendChild(details);
	charityDiv.appendChild(document.createElement('br'));
}