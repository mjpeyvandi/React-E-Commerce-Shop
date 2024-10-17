import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [Filters, setFilter] = useState({
    category: [],
    lowPrice: 0,
    maxPrice: 500,
    colors: [],
    sizes: [],
    style: {
      casual: [],
      party: [],
      gym: [],
    },
  });

  const handleCategoryChange = (event, item) => {
    const isChecked = event.target.checked;

    setFilter((prevFilter) => {
      const updateCategory = isChecked
        ? [...prevFilter.category, item]
        : prevFilter.category.filter((i) => i !== item);

      return {
        ...prevFilter,
        category: updateCategory,
      };
    });
  };

  const handlePriceChange = (minPrice, maxPrice) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      lowPrice: minPrice,
      maxPrice: maxPrice,
    }));
  };

  const handleColorChange = (color) => {
    const isColor = Filters.colors.includes(color);
    setFilter((prevFilter) => {
      const updateColor = !isColor
        ? [...prevFilter.colors, color]
        : prevFilter.colors.filter((i) => i !== color);

      return {
        ...prevFilter,
        colors: updateColor,
      };
    });
  };

  const handleSizeChange = (size) => {
    const isSize = Filters.sizes.includes(size);
    setFilter((prevFilter) => {
      const updateSize = !isSize
        ? [...prevFilter.sizes, size]
        : prevFilter.sizes.filter((i) => i !== size);

      return {
        ...prevFilter,
        sizes: updateSize,
      };
    });
  };

  const handleStyleCasualChange = (event, item) => {
    const isChecked = event.target.checked;
    setFilter((prevFilter) => {
      const updateStyleCasual = isChecked
        ? [...prevFilter.style.casual, item]
        : prevFilter.style.casual.filter((i) => i !== item);

      return {
        ...prevFilter,
        style: {
          ...prevFilter.style,
          casual: updateStyleCasual,
        },
      };
    });
  };

  const handleStylePartyChange = (event, item) => {
    const isChecked = event.target.checked;
    setFilter((prevFilter) => {
      const updateStyleParty = isChecked
        ? [...prevFilter.style.party, item]
        : prevFilter.style.party.filter((i) => i !== item);

      return {
        ...prevFilter,
        style: {
          ...prevFilter.style,
          party: updateStyleParty,
        },
      };
    });
  };

  const handleStyleGymChange = (event, item) => {
    const isChecked = event.target.checked;
    setFilter((prevFilter) => {
      const updateStyleGym = isChecked
        ? [...prevFilter.style.gym, item]
        : prevFilter.style.gym.filter((i) => i !== item);

      return {
        ...prevFilter,
        style: {
          ...prevFilter.style,
          gym: updateStyleGym,
        },
      };
    });
  };

  //   const handleStyleFormalChange = (event) => {
  //   const isChecked = event.target.checked;
  //   setFilter((prevFilter) => {
  //     return {
  //       ...prevFilter,
  //       style: {
  //         ...prevFilter.style,
  //         formal: isChecked,
  //       },
  //     };
  //   });
  // };

  return (
    <FilterContext.Provider
      value={{
        Filters: Filters,
        setFilter : setFilter,
        handleCategoryChange: handleCategoryChange,
        handlePriceChange:  handlePriceChange,
        handleColorChange: handleColorChange,
        handleSizeChange: handleSizeChange,
        handleStyleCasualChange: handleStyleCasualChange,
        handleStylePartyChange: handleStylePartyChange,
        handleStyleGymChange: handleStyleGymChange
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

function useFilters(){
    const Filters = useContext(FilterContext)
     if(Filters === undefined) throw new Error('context was outside provider')
    
    return Filters
}

export default useFilters;
