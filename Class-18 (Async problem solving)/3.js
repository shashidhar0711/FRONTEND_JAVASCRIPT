// Task
// Create a random user generator using the "https://randomuser.me/api/" API. 
// When a user clicks the "Get Random User" button, fetch user details and display them on the page, including:
//     Full Name
//     Email
//     Country
// Handle API errors and provide appropriate feedback if the fetch fails.

let button = document.getElementById('fetchUserBtn')
button.addEventListener('click', function() {
    console.log("Button clicked")
})

// async function fetchRandomUser() {
//    console.log("Button clicked")
// } 