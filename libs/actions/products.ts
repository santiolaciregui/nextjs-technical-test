import { supabase } from "../supabase/client";


export async function getProducts(search: string, page: number, limit = 5) {
  const offset = (page - 1) * limit;
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .ilike('name', `%${search}%`)
    .range(offset, offset + limit - 1);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
