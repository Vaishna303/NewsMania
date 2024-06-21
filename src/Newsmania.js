import React, {useState, useEffect} from "react";
import axios from 'axios';

const Newsmania = ()=>{
  const [newsHindu, setnewsHindu] = useState([]);
//   const [newsTOI, setnewsTOI] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const api = 'c5137eab8306496abc9492afbe4a3f29'

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
          const response1 = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=in&apiKey=${api}`
          );
        setnewsHindu(response1.data.articles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchHeadlines();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

    return <div className="font-serif h-screen bg-gradient-to-r from-green-100 via-green-400 to-green-900">
         
        <div className="font-bold font-poppins text-center text-4xl">
            {/* <p className="py-4 bg-white">WELCOME TO NEWSMANIA !!!</p> */}
            <p className="welcome_message border-gray-800 text-center bg-slate-800 text-white font-extrabold text-4xl text-pretty rounded-b-full py-3 font-serif">THE NEWSMANIA</p>
        </div>
           <div className=" mt-4 flex flex-row justify-center items-center space-x-4">        
            <div className="py-6 w-80 h-96 bg-red-900 rounded-3xl hover:shadow-red-900 shadow-2xl">
                <p className="bg-white text-gray-900 font-bold text-2xl py-2 text-center rounded-t-lg">THE HINDU 1</p>
                <div className="overflow-y-auto h-64 px-4 mt-4">
                    <ol className="text-white px-4 space-y-2 list-decimal auto-scroll">
                        {newsHindu.map((article, index) => (
                            <li key={index}>
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                {article.title}
                            </a>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        
        <div className="py-6 w-80 h-96 bg-purple-950 rounded-3xl hover:shadow-purple-950 shadow-2xl">
          <p className="bg-white text-gray-900 font-bold text-2xl py-2 text-center rounded-t-lg">THE TIMES OF INDIA</p>
          <div className="overflow-y-auto h-64 px-4 mt-4">
            <ol className="text-white px-4 space-y-2 list-decimal auto-scroll">
              {newsHindu.map((article, index) => (
                <li key={index}>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {article.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
        

           </div>
        
        
    </div>
}

export default Newsmania;

// import React, {useState, useEffect} from "react";
// import axios from 'axios';

// const Newsmania = ()=>{
//   const [newsHindu, setnewsHindu] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const api = 'c5137eab8306496abc9492afbe4a3f29'

//   useEffect(() => {
//     const fetchHeadlines = async () => {
//       try {
//           const response1 = await axios.get(
//             `https://newsapi.org/v2/top-headlines?country=in&apiKey=${api}`
//           );
//         setnewsHindu(response1.data.articles);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchHeadlines();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//     return <div className="font-serif h-screen bg-gradient-to-r from-green-100 via-green-400 to-green-900">
         
//         <div className="font-bold font-poppins text-center text-4xl">
//              {/* <p className="py-4 bg-white">WELCOME TO NEWSMANIA !!!</p>  */}
//             <p className="welcome_message border-gray-800 text-center bg-slate-800 text-white font-extrabold text-4xl text-pretty rounded-b-full py-3 font-serif">THE NEWSMANIA</p>
//         </div>
//         <div className="bg-gradient-to-r from-green-100 via-green-400 to-green-900 h-96 flex flex-col justify-center">
//            <div className="flex flex-row justify-center items-center space-x-2">
                
//                 <div className="py-3 w-80 h-80 bg-red-900 rounded-3xl hover:shadow-red-900 shadow-2xl">
//                     <p className="bg-white font-bold text-2xl py-1 font-mono text-center rounded-t-lg">THE HINDU</p>
//                     <div className="py-2">
//                         <ol className="text-black px-9 space-y-2 list-decimal">
//                         {newsHindu.map((article, index) => (
//                             <li key={index}>
//                                 <a href={article.url} target="_blank" rel="noopener noreferrer">
//                                 {article.title}
//                                 </a>
//                             </li>
//                         ))}
//                         </ol>
//                     </div>
//                 </div>

//                 <div className="py-3 w-80 h-80 bg-red-900 rounded-3xl hover:shadow-red-900 shadow-2xl">
//   <p className="bg-white font-bold text-2xl py-1 font-mono text-center rounded-t-lg">THE HINDU</p>
//   <div className="py-2 h-64 overflow-y-auto">
//     <ol className="text-black px-9 space-y-2 list-decimal">
//       {newsHindu.map((article, index) => (
//         <li key={index}>
//           <a href={article.url} target="_blank" rel="noopener noreferrer">
//             {article.title}
//           </a>
//         </li>
//       ))}
//     </ol>
//   </div>
// </div>
                
//            </div>
        
//         </div>

//     </div>
// }

// export default Newsmania;