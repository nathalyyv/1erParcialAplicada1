import{createClient} from "@supabase/supabase-js";

const supabaseUrl="https://hzolypkwpjfqxamzskab.supabase.co";
const supabaseKey="sb_publishable_RaVuBxS4cwgJClcKJjrIxw_okVbhYdP";

export const supabase= createClient(supabaseUrl, supabaseKey);