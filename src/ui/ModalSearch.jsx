import React, { useEffect, useState } from "react";
import { Rating } from "../components/home/Rating";
import { Link } from "react-router-dom";

export const ModalSearch = ({ items, loading, length, allItems }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setSearchResults(items);
    console.log(allItems);
  }, [allItems, items]);

  return (
    <div
      className={`${
        !showModal ? "hidden" : ""
      } absolute top-full left-0 max-h-80 w-full flex flex-col justify-start items-center gap-3 overflow-auto mt-1 rounded-3xl pb-2 scrollbar-hidden bg-gray-200 z-[100] shadow-2xl`}
    >
      {loading ? (
        <div className="w-full h-16 flex justify-center items-center gap-4">
          <svg
            aria-hidden="true"
            class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <p className="font-satoshi text-xl">Searching for Product...</p>
        </div>
      ) : searchResults && searchResults.length > 0 ? (
        <>
          <div className="sticky top-0 w-full h-10 z-[100] bg-slate-200 flex justify-between items-center px-4 py-2">
            <p className="font-satoshi-l">{`Showing ${items.length} of ${length} Results`}</p>
            <Link
              to={`/products`}
              onClick={() => setShowModal(false)}
              state={{ allItems }}
              className=" h-full font-satoshi-l font-semibold tracking-wide transition-all hover:text-cyan-600"
            >
              See All
            </Link>
          </div>
          {searchResults.map((item) => (
            <Link
              to={`/products/product/${item.product_name}/${item.id}`}
              className="w-full h-20 px-4"
              key={item.id}
            >
              <div className="w-full h-full flex justify-between items-center align-baseline cursor-pointer">
                <div className="w-auto h-full flex justify-start items-center align-baseline gap-3">
                  <div className="h-full w-24">
                    <img
                      src={item.image}
                      className="w-full h-full object-cover object-center bg-gray-200"
                      alt="img"
                    />
                  </div>
                  <div className="h-full flex flex-col justify-center items-start gap-3">
                    <p className="font-satoshi text-xl">{item.product_name}</p>
                    <Rating
                      rate_Product={item.rate}
                      showNumber={true}
                      sizeStar={5}
                    />
                  </div>
                </div>
                <span className="font-satoshi-b text-lg">${item.price}</span>
              </div>
            </Link>
          ))}
        </>
      ) : (
        <p className="font-satoshi text-xl">No Products Found.</p>
      )}
    </div>
  );
};
