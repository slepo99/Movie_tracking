
// try {
//     const responses = [];
//     for (let i = 0; i < totalPages; i++) {
//       const response = await axios.get("https://api.themoviedb.org/3/movie/popular", {
//         params: {
//           page: (i + 1).toString(),
//         },
//         headers: {
//           accept: 'application/json',
//           Authorization: apiKey
//         }
//       });
//       responses.push(response);
//     }
    
    
//     const data = [];
//     for (const response of responses) {
//       data.push(...response.data.results);
//     }

//     this.count = data;

//     console.log(this.count);
//   } catch (error) {
//     console.error(error);
//   }