import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gazdnqgxpoprrmgpcmgb.supabase.co";
const supabaseKey =
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhemRucWd4cG9wcnJtZ3BjbWdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxNzU2MTYsImV4cCI6MjAyNzc1MTYxNn0.UkPGgrW4gssdYs0ZhtnpjlE5BySrgnAeaEgWtYs0PjM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase
