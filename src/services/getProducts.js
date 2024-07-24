import supabase from './supabase'

export async function getProducts(){
  let { data , error } = await supabase
  .from('products')
  .select('*')
  .range(0, 8)

  if(error){
    console.log(error)
  }
  return data
}