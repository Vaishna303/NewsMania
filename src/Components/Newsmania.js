import React, { useState, useEffect } from "react";
import axios from "axios";

const Newsmania = () => {
  const [newsHindu, setnewsHindu] = useState([]);
  const [newsTOI, setnewsTOI] = useState([]);
  const [newsTET, setnewsTET] = useState([]);
  const [newsTIE, setnewsTIE] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const api = "c5137eab8306496abc9492afbe4a3f29";

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const response1 = await axios.get(
          `https://newsapi.org/v2/top-headlines?sources=the-hindu&apiKey=${api}`
        );
        setnewsHindu(response1.data.articles);

        const response2 = await axios.get(
          `https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=${api}`
        );
        setnewsTOI(response2.data.articles);

        // const response3 = await axios.get(
        //   `https://newsapi.org/v2/top-headlines?sources=the-economic-times&apiKey=${api}`
        // );
        // setnewsTET(response3.data.articles);

        //Instead of Economic times it will display all the top headlines from all papers in India.
        const response3 = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=${api}`
        );
        setnewsTET(response3.data.articles);

        // const response4 = await axios.get(
        //   `https://newsapi.org/v2/top-headlines?sources=the-indian-express&apiKey=${api}`
        // );
        // setnewsTIE(response4.data.articles);

        const response4 = await axios.get(
          `https://newsapi.org/v2/everything?q=cricket&apiKey=${api}`
        );
        setnewsTIE(response4.data.articles);

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

  return (
    <div className="font-serif h-screen bg-gradient-to-r from-green-100 via-green-400 to-green-900">
      <div className="font-bold font-poppins text-center text-4xl">
        {/* <p className="py-4 bg-white">WELCOME TO NEWSMANIA !!!</p> */}
        <p className="welcome_message border-gray-800 text-center bg-slate-800 text-white font-extrabold text-4xl text-pretty rounded-b-full py-3 font-serif">
          THE NEWSMANIA
        </p>
      </div>

      <div className=" mt-4 flex flex-row justify-center items-center space-x-4">
        <div className="py-6 w-80 h-96 bg-red-900 rounded-3xl hover:shadow-red-900 shadow-2xl">
          <p className="bg-white text-gray-900 font-bold text-2xl py-2 text-center rounded-t-lg">
            THE HINDU
          </p>
          <div className="overflow-y-auto h-64 px-4 mt-4">
            <ol className="text-white px-4 space-y-2 list-disc auto-scroll">
              {newsHindu.map((article, index) => (
                <li key={index}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {article.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="py-6 w-80 h-96 bg-purple-950 rounded-3xl hover:shadow-purple-950 shadow-2xl">
          <p className="bg-white text-gray-900 font-bold text-2xl py-2 text-center rounded-t-lg">
            THE TIMES OF INDIA
          </p>
          <div className="overflow-y-auto h-64 px-4 mt-4">
            <ol className="text-white px-4 space-y-2 list-disc auto-scroll">
              {newsTOI.map((article, index) => (
                <li key={index}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {article.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* <div className="py-6 w-80 h-96 bg-purple-950 rounded-3xl hover:shadow-purple-950 shadow-2xl">
          <p className="bg-white text-gray-900 font-bold text-2xl py-2 text-center rounded-t-lg">
            THE ECONOMIC TIMES
          </p>
          <div className="overflow-y-auto h-64 px-4 mt-4">
            <ol className="text-white px-4 space-y-2 list-decimal auto-scroll">
              {newsTET.map((article, index) => (
                <li key={index}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {article.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div> */}

        <div className="py-6 w-80 h-96 bg-purple-950 rounded-3xl hover:shadow-purple-950 shadow-2xl">
          <p className="bg-white text-gray-900 font-bold text-2xl py-2 text-center rounded-t-lg">
            Top In INDIA
          </p>
          <div className="overflow-y-auto h-64 px-4 mt-4">
            <ol className="text-white px-4 space-y-2 list-decimal auto-scroll">
              {newsTET.map((article, index) => (
                <li key={index}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {article.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* <div className="py-6 w-80 h-96 bg-purple-950 rounded-3xl hover:shadow-purple-950 shadow-2xl">
          <p className="bg-white text-gray-900 font-bold text-2xl py-2 text-center rounded-t-lg">
            THE INDIAN EXPRESS
          </p>
          <div className="overflow-y-auto h-64 px-4 mt-4">
            <ol className="text-white px-4 space-y-2 list-decimal auto-scroll">
              {newsTIE.map((article, index) => (
                <li key={index}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {article.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div> */}
        <div className="py-6 w-80 h-96 bg-purple-950 rounded-3xl hover:shadow-purple-950 shadow-2xl">
          <p className="bg-white text-gray-900 font-bold text-2xl py-2 text-center rounded-t-lg">
            Top In Cricket
          </p>
          <div className="overflow-y-auto h-64 px-4 mt-4">
            <ol className="text-white px-4 space-y-2 list-decimal auto-scroll">
              {newsTIE.map((article, index) => (
                <li key={index}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {article.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsmania;
