import React, { useState, useEffect } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners"; // Import a spinner component

const Cards = () => {
  const [newsHindu, setnewsHindu] = useState([]);
  const [newsTII, setnewsTII] = useState([]);
  const [newsTIC, setnewsTIC] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const api = "a2154f3ce08a4dc79780ae42d5299f39";

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const response1 = await axios.get(
          `https://newsapi.org/v2/top-headlines?sources=the-hindu&apiKey=${api}`
        );
        setnewsHindu(response1.data.articles);

        const response2 = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=${api}`
        );
        setnewsTII(response2.data.articles);

        const response3 = await axios.get(
          `https://newsapi.org/v2/everything?q=cricket&apiKey=${api}`
        );
        setnewsTIC(response3.data.articles);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchHeadlines();
  }, []);



  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
      <div className=" mt-4 flex flex-row justify-center items-center space-x-4 mb-10">
       
        <div className="py-6 w-80 h-96 bg-purple-950 rounded-3xl hover:shadow-purple-950 shadow-2xl">
          <p className="bg-white text-gray-900 font-bold text-2xl py-2 text-center rounded-t-lg">
            THE HINDU
          </p>

          
          <div className="overflow-y-auto h-64 px-4 mt-4">
          {loading ? (<div className="flex justify-center items-center">
            <ClipLoader size={30} color={"#123abc"} loading={loading} />
            <span>Loading...</span>
          </div>
          ):
          (
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
          )}
          </div>
          
        </div>

        <div className="py-6 w-80 h-96 bg-red-900 rounded-3xl hover:shadow-red-900 shadow-2xl">
          <p className="bg-white text-gray-900 font-bold text-2xl py-2 text-center rounded-t-lg">
            Top In INDIA
          </p>
          <div className="overflow-y-auto h-64 px-4 mt-4">
            <ol className="text-white px-4 space-y-2 list-disc auto-scroll">
              {newsTII.map((article, index) => (
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
            Top In Cricket
          </p>
          <div className="overflow-y-auto h-64 px-4 mt-4">
            <ol className="text-white px-4 space-y-2 list-disc auto-scroll">
              {newsTIC.map((article, index) => (
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
  );
};

export default Cards;
