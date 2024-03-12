// <!-- <script> async function fetchUserData(userId) {
//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch user data');
//       }
//       const userData = await response.json();
//       return userData;
//     } catch (error) {
//       console.error('Error:', error.message);
//       return null;
//     }
//   }

const { url } = require("inspector");

//   fetchUserData(1)
//     .then((userData) => {
//       if (userData) {
//         console.log('User Data:', userData);
//       } else {
//         console.log('User data not available');
//       }
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
//   </script> -->

// Make a GET request to a random quotes API
// fetch('https://api.quotable.io/random')
//   .then(response => response.json())
//   .then(data => {
//     // Extract the quote and author from the response
//     const { content, author } = data;

//     // Display the quote and author
//     console.log(`"${content}" - ${author}`);
//   })
//   .catch(error => {
//     console.error('Error fetching quote:', error);
//   });

// fetch("https://api.quotable.io/quotes?limit=5")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     const quotes = data.results.map((quote) =>  quote.content);
//     // const quotes = data.results;

//     console.log("Quote List:", quotes);
//   })
//   .catch((error) => {
//     console.error("Error fetching quote list:", error);
//   });

// function myFunction() {
//   const url = "https://api.quotable.io/random";

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(`Work:`);
//       console.log(`Text: ${data.content}`);
//       console.log(`Author: ${data.author}`);
//       console.log(`Date: ${data.dateModified}`);
//     })
//     .catch((error) => {
//       console.error("There was a problem fetching the random quote:", error);
//     });
// }
// myFunction();

// function good() {
//   const url = (`https://api.quotable.io/random`)
//   fetch (url)
//   .then((response) => response.json())
//   .then(data => {
//     console.log(`Working:`);
//     console.log(`Text: ${data.content}`);
//   })
// }
// good();
function look() {
  const url = `https://api.quotable.io/quotes?limit=5`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const quotes = data.results;
      quotes.forEach((item) => {
        console.log(`Text: ${item.content}`);
        console.log(`Author: ${item.author}`);
        console.log(`Date: ${item.dateModified}`);
        console.log(`length: ${item.length}`);
      });
    })
    .catch((error) => {
      console.error("Error fetching quote list:", error);
    });
}
look();
