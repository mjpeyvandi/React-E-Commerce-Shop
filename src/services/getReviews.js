import supabase from "./supabase";

export async function getReviews() {
  let { data, error } = await supabase
    .from("Reviews")
    .select("*")
    // Filter
    .eq("rate", 5)
    .limit(15)

    if(error){
        console.log(error)
    }

    return data
}
