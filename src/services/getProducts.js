import supabase from './supabase'

export async function getProducts(start, end){
  let { data , error } = await supabase
  .from('products')
  .select('*')
  .range(start, end) 
  if(error){
    console.log(error)
  }
  return data
}