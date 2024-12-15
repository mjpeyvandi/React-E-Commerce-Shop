import supabase from "./supabase";

export async function getProductSearched(value) {
  let { data: products, error } = await supabase
    .from("products")
    .select("*")
    .ilike("product_name", `%${value}%`);

    if(error){
        console.log(error)
    }

    return products
}
