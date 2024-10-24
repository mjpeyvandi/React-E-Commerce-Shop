import supabase from "./supabase";

export async function getReviewsProduct(limit) {
  let { data, error } = await supabase
    .from("Reviews")
    .select("*")
    // Filter
    .limit(limit);

  if (error) {
    console.log(error);
  }

  return data;
}
