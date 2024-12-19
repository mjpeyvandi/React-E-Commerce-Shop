import supabase from "./supabase";

export async function getProducts(Filters, start, end) {
  let query = supabase.from("products").select("*").range(start, end);

  /* filter category */
  if (Filters.category.length > 0) {
    let { data: categories, error: category_err } = await supabase
      .from("categories")
      .select("id")
      .in("category_name", Filters.category);

    if (category_err) {
      console.log(category_err);
      return [];
    }

    const categories_id = categories.map((item) => item.id);

    query = query.in("category_id", categories_id);
  }

  /* filter low price */
  if (Filters.lowPrice > 0) {
    query = query.gte("price", Filters.lowPrice);
  }

  /* filter max price */
  if (Filters.maxPrice < 500) {
    query = query.lte("price", Filters.maxPrice);
  }

  /* filter color */
  if (Filters.colors.length > 0) {
    let { data: colors, error: colors_err } = await supabase
      .from("colors")
      .select("id")
      .in("color_name", Filters.colors);

    if (colors_err) {
      console.log(colors_err);
      return [];
    }

    const colors_id = colors.map((item) => item.id);

    let { data: inventory, error: inventory_err } = await supabase
      .from("inventory")
      .select("ProductID")
      .in("ColorID", colors_id);

    if (inventory_err) {
      console.log(inventory_err);
      return [];
    }

    const products_id = inventory.map((item) => item.ProductID);

    query = query.in("id", products_id);
  }

  /* filter size */
  if (Filters.sizes.length > 0) {
    let { data: sizes, error: size_err } = await supabase
      .from("sizes")
      .select("id")
      .in("size_name", Filters.sizes);

    if (size_err) {
      console.log(size_err);
      return [];
    }

    const sizes_id = sizes.map((item) => item.id);

    let { data: inventory, error: inventory_err } = await supabase
      .from("inventory")
      .select("ProductID")
      .in("SizeID", sizes_id);

    if (inventory_err) {
      console.log(inventory_err);
      return [];
    }

    const products_size_id = inventory.map((item) => item.ProductID);

    query = query.in("id", products_size_id);
  }

  /* filter style casual */
  if (Filters.style.casual.length > 0) {
    let { data: styles, error: styles_err } = await supabase
      .from("styles")
      .select("id")
      .eq("style", "casual")
      .in("style_type", Filters.style.casual);

    if (styles_err) {
      console.log(styles_err);
      return [];
    }

    const styles_id = styles.map((item) => item.id);

    let { data: products_style_casual, error: products_style_casual_err } =
      await supabase.from("products").select("id").in("style_id", styles_id);

    if (products_style_casual_err) {
      console.log(products_style_casual_err);
      return [];
    }

    const products_style_id = products_style_casual.map((item) => item.id);

    query = query.in("id", products_style_id);
  }

  /* filter style party */
  if (Filters.style.party.length > 0) {
    let { data: styles, error: styles_err } = await supabase
      .from("styles")
      .select("id")
      .eq("style", "party")
      .in("style_type", Filters.style.party);

    if (styles_err) {
      console.log(styles_err);
      return [];
    }

    const styles_id = styles.map((item) => item.id);

    let { data: products_style_party, error: products_style_party_err } =
      await supabase.from("products").select("id").in("style_id", styles_id);

    if (products_style_party_err) {
      console.log(products_style_party_err);
      return [];
    }

    const products_style_id = products_style_party.map((item) => item.id);

    query = query.in("id", products_style_id);
  }

  /* filter style party */
  if (Filters.style.gym.length > 0) {
    let { data: styles, error: styles_err } = await supabase
      .from("styles")
      .select("id")
      .eq("style", "gym")
      .in("style_type", Filters.style.gym);

    if (styles_err) {
      console.log(styles_err);
      return [];
    }

    const styles_id = styles.map((item) => item.id);

    let { data: products_style_gym, error: products_style_gym_err } =
      await supabase.from("products").select("id").in("style_id", styles_id);

    if (products_style_gym_err) {
      console.log(products_style_gym_err);
      return [];
    }

    const products_style_id = products_style_gym.map((item) => item.id);

    query = query.in("id", products_style_id);
  }

  let { data: products, eror: products_error } = await query;

  if (products_error) {
    console.log(products_error);
    return [];
  }

  return products;
}
