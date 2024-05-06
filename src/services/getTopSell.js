import supabase from "./supabase";

export async function getTopSell() {
  let { data, error } = await supabase
    .from("products")
    .select("*")
    // Filter
    .gt("rate", "3.8")
    .limit(4)

    if(error){
        console.log(error)
    }

    return data
}
