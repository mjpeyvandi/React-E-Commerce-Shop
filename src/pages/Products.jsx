import React, { useEffect, useState } from "react";
import useFilters from "../context/FiltersContext";

import { FilterSection } from "../components/products/FilterSection";
import { Card } from "../components/products/Card";
import { ButtonPage } from "../components/products/ButtonPage";
import { Button } from "../components/products/Button";

import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight";
import { IoIosArrowRoundBack } from "@react-icons/all-files/io/IoIosArrowRoundBack";
import { IoIosArrowRoundForward } from "@react-icons/all-files/io/IoIosArrowRoundForward";

import { getProducts } from "../services/getProducts";
import { getId } from "../services/getId";
import { BarLoader } from "react-spinners";

export const Products = () => {
  const [Products, setProducts] = useState([]);
  const [Page, setPage] = useState(1);
  const [TotalPage, setTotalPage] = useState(0);
  const [Loading, setLoading] = useState(true);

  const {Filters} = useFilters()

  useEffect(() => {
    const fetchTotalPage = async () => {
      const data = await getId(Filters);
      if (data) {
        const totalPages = Math.ceil(data.length / 10);
        setTotalPage(totalPages);
        setPage(1)
      }
      setLoading(false);
    };

    fetchTotalPage();
  }, [Filters]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (Page === 1) {
        const data = await getProducts(Filters ,0, 8);
        setProducts(data);
      } else {
        const data = await getProducts(Filters ,Page * 10 - 10 - 1, Page * 10 - 3);
        setProducts(data);
      }
    };
    fetchProducts();
  }, [Filters, Page]);


  const NextPage = (Page) => {
    if (Page <= TotalPage) {
      setPage(Page + 1);
    }
  };

  const PreviousPage = (Page) => {
    if (Page > 1) {
      setPage(Page - 1);
    }
  };

  const pageHandler = (page) => {
    setPage(page);
    console.log(page);
  };

  const ButtonRender = () => {
    const Buttons = [];

    if (TotalPage <= 8 && TotalPage > 0) {
      for (let i = 1; i <= TotalPage; i++) {
        Buttons.push(
          <Button key={i} onClick={() => pageHandler(i)}>
            {i}
          </Button>
        );
      }
    } else if (TotalPage > 8) {
      let leftButtons = [1, 2, 3];
      let rightButtons = [TotalPage - 3, TotalPage - 2, TotalPage];

      if (Page >= 3 && Page < TotalPage - 3) {
        leftButtons = [Page - 1, Page, Page + 1];
      }

      leftButtons.forEach((item) => {
        Buttons.push(
          <Button key={item} onClick={() => pageHandler(item)}>
            {item}
          </Button>
        );
      });

      Buttons.push(
        <Button key={"ellipsis"} clickable={false}>
          {`...`}
        </Button>
      );

      rightButtons.forEach((item) => {
        Buttons.push(
          <Button key={item} onClick={() => pageHandler(item)}>
            {item}
          </Button>
        );
      });
    }

    return Buttons;
  };

  return (
    <div className="w-full h-[80rem]">
      <div className="container mx-auto h-full border-t-[0.2px] border-t-gray-300">
        <div className="h-full w-full flex flex-col justify-start items-center">
          {/* Route section */}
          <div className="w-full h-[5%] flex flex-row justify-start items-center font-satoshi-l gap-2">
            <p className="text-gray-500">{`Home`}</p>{" "}
            <MdKeyboardArrowRight className="size-5 opacity-45" />{" "}
            <p>Products</p>
          </div>

          {/* content Section */}
          <div className="w-full h-full flex flex-row justify-between items-start gap-5">
            {/*filter section*/}
            <div className="w-[23%] h-[1140px]">
              <FilterSection />
            </div>
            {/*products section*/}
            <div className="w-[77%] h-full flex flex-col justify-start items-center">
              {/*sorting section*/}
              <div className="w-full h-[5%] flex flex-row justify-between items-center">
                <p className="font-satoshi-b text-3xl">Casual</p>
                <div className="w-2/5 flex flex-row justify-between items-center">
                  <p className="font-satoshi-l text-gray-500">{`Showing 1-10 of ${Products.length} Products`}</p>
                  <p className="font-satoshi-l text-gray-500">{`Sort by: Most Popular`}</p>
                </div>
              </div>
              {Loading ? (
                <BarLoader color="#000000" size={30} />
              ) : (
                <div className="w-full h-[90%] border-b-[0.2px] border-b-gray-300">
                  <div className="w-full h-full grid grid-cols-3 gap-4">
                    {Products.map((item) => (
                      <Card
                        name={item.product_name}
                        img={item.image}
                        price={item.price}
                        rate={item.rate}
                        key={item.id}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/*pagination*/}
              <div className="w-full h-[5%] flex flex-row justify-between items-center">
                <ButtonPage onClick={() => PreviousPage(Page)} key={1}>
                  <IoIosArrowRoundBack className="size-8" /> Previous
                </ButtonPage>

                <div className="h-12 flex flex-row justify-around items-center gap-1">
                  {ButtonRender()}
                </div>

                <ButtonPage onClick={() => NextPage(Page)}>
                  Next <IoIosArrowRoundForward className="size-8" />
                </ButtonPage>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
