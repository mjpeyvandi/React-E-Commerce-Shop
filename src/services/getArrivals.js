import supabase from "./supabase";

export async function getArrivals() {
  let { data, error } = await supabase
    .from("products")
    .select("*")
    // Filter
    .gt("created", "2024-01-01 00:00:00")
    .gt("rate", "3.8")
    .limit(4)

    if(error){
        console.log(error)
    }

    return data
}
