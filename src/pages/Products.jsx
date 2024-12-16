import React, { useEffect, useState } from "react";
import useFilters from "../context/FiltersContext";

import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import { FilterSection } from "../components/products/FilterSection";
import { Card } from "../components/products/Card";
import { ButtonPage } from "../components/products/ButtonPage";
import { Button } from "../components/products/Button";
import { SkeltonCard } from "../components/products/SkeltonCard";

import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight";
import { IoIosArrowRoundBack } from "@react-icons/all-files/io/IoIosArrowRoundBack";
import { IoIosArrowRoundForward } from "@react-icons/all-files/io/IoIosArrowRoundForward";
import filter from "../assets/images/filter.png";

import { getProducts } from "../services/getProducts";
import { getId } from "../services/getId";

export const Products = () => {
  const [Products, setProducts] = useState([]);
  const [Page, setPage] = useState(1);
  const [TotalPage, setTotalPage] = useState(0);
  const [Loading, setLoading] = useState(true);
  const [CountAllProduct, setCountAllProduct] = useState();
  const [StartProduct, setStartProduct] = useState();
  const [EndProduct, setEndProduct] = useState();
  const [CountProduct, setCountProduct] = useState(6);
  const [showFilter, setShowFilter] = useState(false);
  const [showAnimate, setShowAnimate] = useState(false);

  const { Filters, setFilter } = useFilters();

  const location = useLocation();

  useEffect(() => {
    const ResualtSearched = location.state?.allItems || [];
    if (ResualtSearched.length > 0) {
      setLoading(true);
      // ورود از دکمه "See All"
      const pageSize = window.innerWidth >= 768 ? 9 : 6;
      setCountProduct(pageSize);
      const start = (Page - 1) * pageSize;
      setStartProduct(start);
      const end = Page * pageSize;
      setEndProduct(end);
      const totalPages = Math.ceil(ResualtSearched.length / pageSize);
      setCountAllProduct(ResualtSearched.length);
      setTotalPage(totalPages);
      setPage(1); // شروع از صفحه اول
      setProducts(ResualtSearched.slice(0, pageSize)); // فقط محصولات صفحه اول
      setLoading(false);
    }
  }, [location.state]);

  // جایگزین useEffect فعلی با این کد
  useEffect(() => {
    if (!location.state?.allItems) {
      // در صورت استفاده از فیلترها یا ورود مستقیم
      const fetchProducts = async () => {
        setLoading(true);
        const pageSize = window.innerWidth >= 768 ? 9 : 6;
        setCountProduct(pageSize);
        const start = (Page - 1) * pageSize;
        setStartProduct(start);
        const end = Page * pageSize;
        setEndProduct(end);
        const data = await getProducts(Filters, start, end - 1);
        setProducts(data);
        setLoading(false);
      };

      fetchProducts();
    } else {
      // مدیریت پیجینیشن برای "See All"
      const pageSize = window.innerWidth >= 768 ? 9 : 6;
      setCountProduct(pageSize);

      const start = (Page - 1) * pageSize;
      const end = Page * pageSize;
      setProducts(location.state.allItems.slice(start, end));
    }
  }, [Filters, Page, location.state]);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const updateUrl = () => {
      const params = new URLSearchParams();

      if (Filters.category.length > 0) {
        params.set("category", Filters.category.join(","));
      }

      if (Filters.style.casual.length > 0) {
        params.set("casual", Filters.style.casual.join(","));
      }

      if (Filters.style.party.length > 0) {
        params.set("party", Filters.style.party.join(","));
      }

      if (Filters.style.gym.length > 0) {
        params.set("gym", Filters.style.gym.join(","));
      }

      const currentParams = searchParams.toString();
      const newParams = params.toString();

      if (currentParams !== newParams) {
        setLoading(true);
        navigate({
          pathname: "/products",
          search: newParams,
        });
      }
    };

    updateUrl();
  }, [Filters, navigate, searchParams]);

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    if (params.category) {
      const categoryList = params.category.split(",");
      setFilter((preFilters) => ({
        ...preFilters,
        category: categoryList,
      }));
    }
    if (params.casual) {
      const allCasual = params.casual.split(",");
      setFilter((prevFilter) => ({
        ...prevFilter,
        style: {
          ...prevFilter.style,
          casual: allCasual,
        },
      }));
    }
    if (params.party) {
      const allPartys = params.party.split(",");
      setFilter((prevFilter) => ({
        ...prevFilter,
        style: {
          ...prevFilter.style,
          party: allPartys,
        },
      }));
    }
    if (params.gym) {
      const allGyms = params.gym.split(",");
      setFilter((prevFilter) => ({
        ...prevFilter,
        style: {
          ...prevFilter.style,
          gym: allGyms,
        },
      }));
    }
  }, [searchParams, setFilter]);

  useEffect(() => {
    const fetchTotalPage = async () => {
      setLoading(true);
      const data = await getId(Filters);
      if (data) {
        const totalPages = Math.ceil(data.length / 10);
        setCountAllProduct(data.length);
        setTotalPage(totalPages);
        setPage(1);
      }
      setLoading(false);
    };

    fetchTotalPage();
  }, [Filters]);

  useEffect(() => {
    if (!location.state?.allItems) {
      // در صورت استفاده از فیلترها یا ورود مستقیم
      const fetchProducts = async () => {
        setLoading(true);
        const pageSize = window.innerWidth >= 768 ? 9 : 6;
        const start = (Page - 1) * pageSize;
        const end = Page * pageSize - 1;

        const data = await getProducts(Filters, start, end);
        setProducts(data);
        setLoading(false);
      };

      fetchProducts();
    }
  }, [Filters, Page, location.state]);

  useEffect(() => {
    if (showFilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

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
  };

  const ButtonRender = () => {
    const Buttons = [];

    if (TotalPage <= 8 && TotalPage > 0 && window.screen.width >= 768) {
      for (let i = 1; i <= TotalPage; i++) {
        Buttons.push(
          <Button key={i} onClick={() => pageHandler(i)}>
            {i}
          </Button>
        );
      }
    } else if (TotalPage > 8) {
      let leftButtons = [];
      let rightButtons = [];

      if (window.screen.width > 768) {
        leftButtons = [1, 2, 3];
        rightButtons = [TotalPage - 2, TotalPage - 1, TotalPage];
        if (Page >= 3 && Page < TotalPage - 3) {
          leftButtons = [Page - 1, Page, Page + 1];
        }
      } else {
        leftButtons = [1, 2];
        rightButtons = [TotalPage - 1, TotalPage];
        if (Page >= 2 && Page < TotalPage - 3) {
          leftButtons = [Page, Page + 1];
        }
      }

      leftButtons.forEach((item) => {
        Buttons.push(
          <Button
            key={item}
            onClick={() => pageHandler(item)}
            clickable={true}
            checked={Page === item ? true : false}
          >
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
          <Button key={item} onClick={() => pageHandler(item)} clickable={true}>
            {item}
          </Button>
        );
      });
    }

    return Buttons;
  };

  const openFilter = () => {
    setShowFilter(true);
    setTimeout(() => setShowAnimate(true), 50);
  };

  const closeFilter = () => {
    setShowAnimate(false);
    setTimeout(() => {
      setShowFilter(false);
    }, 1000);
  };

  return (
    <div className="w-full h-[66rem] md:h-[80rem]">
      <div className="container mx-auto h-full border-t-[0.2px] border-t-gray-300">
        <div className="h-full w-full flex flex-col justify-start items-center">
          {/* Route section */}
          <div className="w-full h-[5%] flex flex-row justify-start items-center font-satoshi-l gap-2">
            <p className="text-gray-500">{`Home`}</p>{" "}
            <MdKeyboardArrowRight className="size-5 opacity-45" />{" "}
            <p>Products</p>
          </div>

          {/* content Section */}
          <div className="w-full h-full block lg:flex flex-row justify-between items-start gap-5">
            {/*filter section*/}
            {showFilter && (
              <div className="fixed inset-0 bg-black opacity-50" onClick={() => closeFilter()}></div>
            )}
            <div
              className={` lg:block lg:w-[23%] lg:h-[1140px] transform transition-transform duration-[1000ms] ${
                showFilter === true
                  ? "fixed inset-0 z-[200] overflow-y-auto w-full h-auto top-12 left-0 shadow-2xl shadow-white"
                  : "hidden transform-none"
              }
              ${showAnimate ? `translate-y-0` : `translate-y-full`} `}
            >
              <FilterSection close={() => closeFilter()} />
            </div>
            {/*products section*/}
            <div
              className={`w-full lg:w-[77%] h-full flex flex-col justify-start items-center`}
            >
              {/*sorting section*/}
              <div className="w-full h-[5%] flex flex-row justify-between items-center">
                <p className="font-satoshi-b text-3xl">Casual</p>
                <div className="w-auto flex flex-row justify-end items-center gap-4 md:gap-6">
                  <p className="hidden md:block font-satoshi-l text-gray-500">{`Showing ${StartProduct}-${EndProduct} of ${CountAllProduct} Products`}</p>
                  <p className="font-satoshi-l text-gray-500">{`Sort by: Most Popular`}</p>
                  <div className="size-8 rounded-full bg-gray-200 flex justify-center items-center md:hidden hover:bg-gray-300 transition-all cursor-pointer">
                    <img
                      src={filter}
                      alt="filter"
                      onClick={() => openFilter()}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full h-[90%] border-b-[0.2px] border-b-gray-300">
                <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Loading
                    ? Array.from({ length: CountProduct }, (_, index) => (
                        <SkeltonCard />
                      ))
                    : Products.map((item) => (
                        <Link
                          to={`/products/product/${item.product_name}/${item.id}`}
                        >
                          <Card
                            name={item.product_name}
                            img={item.image}
                            price={item.price}
                            rate={item.rate}
                            key={item.id}
                          />
                        </Link>
                      ))}
                </div>
              </div>

              {/*pagination*/}
              <div className="w-full h-[5%] flex flex-row justify-between items-center">
                <ButtonPage onClick={() => PreviousPage(Page)} key={1}>
                  <IoIosArrowRoundBack className="size-4 xs:size-6 md:size-8" />{" "}
                  Previous
                </ButtonPage>

                <div className="h-12 mx-3 xs:mx-0 w-full flex flex-row justify-around md:justify-center items-center gap-1 md:gap-5">
                  {ButtonRender()}
                </div>

                <ButtonPage onClick={() => NextPage(Page)}>
                  Next <IoIosArrowRoundForward className="size-4 xs:size-6" />
                </ButtonPage>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
