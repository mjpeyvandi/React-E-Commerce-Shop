import supabase from "./supabase";

export async function getProductData(id) {
  let { data: product, error } = await supabase
    .from("products")
    .select(
      `*,
        inventory (
        SizeID (size_name),
        ColorID (color_name),
        inventory 
        )
        `
    )
    .eq("id", id);

  if (error) {
    console.log(error);
  }

  return product;
}
