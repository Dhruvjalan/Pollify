import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4000/getuserdata")
      .then(response => {
        console.log("Data in Home:", response.data);
        setData(response.data);
        // setIsPending(false)
      })
      .catch(error => {
        console.error("Error fetching polls:", error);
      });
  }, []);





  //   useEffect(() => {
//     const source = axios.CancelToken.source();

//     axios
//       .get(url, { cancelToken: source.token })
//       .then(response => {
//         // Axios already parses the JSON response, so no need to call .json()
//         const data = response.data;
//         console.log(data);
//         setData(data);
//         setIsPending(false);
//       })
//       .catch(err => {
//         // Use axios.isCancel to check if the error is due to cancellation
//         if (axios.isCancel(err)) {
//           console.log("Fetch cancelled");
//         } else {
//           console.log(err.message);
//           console.log(err);
//           setError(err.message);
//           setIsPending(false);
//         }
//       });

//     // Cleanup function to cancel the request on component unmount
//     return () => {
//       source.cancel("Operation canceled by the user.");
//     };
//   }, [url]);

  // Return an empty array if data is null, or the data if it exists
  console.log(data, isPending, error)
  return { data: data, isPending, error };
};

export default useFetch;
