import supabase from "./supabase";

export async function getId() {
  let { data , error } = await supabase.from("products").select("id");

  if(error){
    console.log(error)
  }

  return data
}
