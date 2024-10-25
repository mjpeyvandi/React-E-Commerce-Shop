import supabase from "./supabase";

export async function getSimilarProducts(category_id) {
  let { data, error } = await supabase
    .from("products")
    .select("*")
    // Filter
    .eq("category_id", category_id)
    .gt("rate", "4")
    .limit(4);

  if (error) {
    console.log(error);
  }

  return data;
}
