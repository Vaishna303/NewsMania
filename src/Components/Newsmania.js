import React, { useState, useEffect } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners"; // Import a spinner component
import Cards from "./Cards";

const Newsmania = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const api = "a2154f3ce08a4dc79780ae42d5299f39";

  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${api}`
        );
        setArticles(response.data.articles);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchHeadlines();
  }, [category]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${api}`
      );
      setArticles(response.data.articles);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };


  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="font-serif">
      <Cards />
      <div className="px-9 mb-10 mt-5">
        <form onSubmit={handleSearch} className="flex justify-center mb-8">
          <input
            type="text" value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for news..."
            className="p-2 w-1/2 border border-gray-300 rounded-l-lg focus:outline-none"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600">
            Search
          </button>
        </form>
        
        <div className="flex justify-center mb-8">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none"
          >
            <option value="">All Categories</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </select>
        </div>

        {loading ? (
          <div className="flex justify-center items-center">
            <ClipLoader size={50} color={"#123abc"} loading={loading} />
          </div>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl shadow-zinc-700 transition-shadow duration-30">
              <p className="text-gray-500 text-sm mb-2">{new Date(article.publishedAt).toLocaleDateString()}</p>
              <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-700 mb-4">{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default Newsmania;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { ClipLoader } from "react-spinners"; // Import a spinner component

// const Newsmania = () => {
//   const [newsHindu, setnewsHindu] = useState([]);
//   const [newsTII, setnewsTII] = useState([]);
//   const [newsTIC, setnewsTIC] = useState([]);

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const api = "a2154f3ce08a4dc79780ae42d5299f39";

//   const [articles, setArticles] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [category, setCategory] = useState("");

//   useEffect(() => {
//     const fetchHeadlines = async () => {
//       try {
//         const response1 = await axios.get(
//           `https://newsapi.org/v2/top-headlines?sources=the-hindu&apiKey=${api}`
//         );
//         setnewsHindu(response1.data.articles);

//         const response2 = await axios.get(
//           `https://newsapi.org/v2/top-headlines?country=in&apiKey=${api}`
//         );
//         setnewsTII(response2.data.articles);

//         const response3 = await axios.get(
//           `https://newsapi.org/v2/everything?q=cricket&apiKey=${api}`
//         );
//         setnewsTIC(response3.data.articles);

//         const response = await axios.get(
//           `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${api}`
//         );
//         setArticles(response.data.articles);

//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchHeadlines();
//   }, [category]);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${api}`
//       );
//       setArticles(response.data.articles);
//       setLoading(false);
//     } catch (error) {
//       setError(error);
//       setLoading(false);
//     }
//   };


//   // if (loading) return <p>Loading...</p>;
//   // if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div className="font-serif  bg-gradient-to-r from-green-100 via-green-400 to-green-900">

//       <div className=" mt-4 flex flex-row justify-center items-center space-x-4 mb-10">
//         <div className="py-6 w-80 h-96 bg-purple-950 rounded-3xl hover:shadow-purple-950 shadow-2xl">
//           <p className="bg-white text-gray-900 font-bold text-2xl py-2 text-center rounded-t-lg">
//             THE HINDU
//           </p>
//           <div className="overflow-y-auto h-64 px-4 mt-4">
//             <ol className="text-white px-4 space-y-2 list-disc auto-scroll">
//               {newsHindu.map((article, index) => (
//                 <li key={index}>
//                   <a
//                     href={article.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:underline"
//                   >
//                     {article.title}
//                   </a>
//                 </li>
//               ))}
//             </ol>
//           </div>
//         </div>

//         <div className="py-6 w-80 h-96 bg-red-900 rounded-3xl hover:shadow-red-900 shadow-2xl">
//           <p className="bg-white text-gray-900 font-bold text-2xl py-2 text-center rounded-t-lg">
//             Top In INDIA
//           </p>
//           <div className="overflow-y-auto h-64 px-4 mt-4">
//             <ol className="text-white px-4 space-y-2 list-disc auto-scroll">
//               {newsTII.map((article, index) => (
//                 <li key={index}>
//                   <a
//                     href={article.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:underline"
//                   >
//                     {article.title}
//                   </a>
//                 </li>
//               ))}
//             </ol>
//           </div>
//         </div>

//         <div className="py-6 w-80 h-96 bg-purple-950 rounded-3xl hover:shadow-purple-950 shadow-2xl">
//           <p className="bg-white text-gray-900 font-bold text-2xl py-2 text-center rounded-t-lg">
//             Top In Cricket
//           </p>
//           <div className="overflow-y-auto h-64 px-4 mt-4">
//             <ol className="text-white px-4 space-y-2 list-disc auto-scroll">
//               {newsTIC.map((article, index) => (
//                 <li key={index}>
//                   <a
//                     href={article.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:underline"
//                   >
//                     {article.title}
//                   </a>
//                 </li>
//               ))}
//             </ol>
//           </div>
//         </div>
//       </div>

//       <div className="px-9 mb-10 mt-5">
//         <form onSubmit={handleSearch} className="flex justify-center mb-8">
//           <input
//             type="text" value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search for news..."
//             className="p-2 w-1/2 border border-gray-300 rounded-l-lg focus:outline-none"
//           />
//           <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600">
//             Search
//           </button>
//         </form>
        
//         <div className="flex justify-center mb-8">
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="p-2 border border-gray-300 rounded-lg focus:outline-none"
//           >
//             <option value="">All Categories</option>
//             <option value="business">Business</option>
//             <option value="entertainment">Entertainment</option>
//             <option value="health">Health</option>
//             <option value="science">Science</option>
//             <option value="sports">Sports</option>
//             <option value="technology">Technology</option>
//           </select>
//         </div>

//         {loading ? (
//           <div className="flex justify-center items-center">
//             <ClipLoader size={50} color={"#123abc"} loading={loading} />
//           </div>
//         ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {articles.map((article, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl shadow-zinc-700 transition-shadow duration-30">
//               <p className="text-gray-500 text-sm mb-2">{new Date(article.publishedAt).toLocaleDateString()}</p>
//               <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
//               <p className="text-gray-700 mb-4">{article.description}</p>
//               <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
//                 Read more
//               </a>
//             </div>
//           ))}
//         </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Newsmania;
