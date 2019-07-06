# Friend Finder
This full-stack site takes in results from a user survey, then compare the user's answers with those from other users. The app will then display the name and picture of the user with the best overall match.

## Technologies used
* Node.js & Express for back-end
* HTML, Bootstrap, and jQuery for front-end

## How it works
* htmlRoutes.js determines which page to display
* User answers from an html form survey are posted to the api/friends route as json.
* The app loops through each answer value and compares it to the answer values of each person in the friends array.
* The person with the least difference is determined as the best match
* The best match name and photo is displayed in a Bootstrap modal.