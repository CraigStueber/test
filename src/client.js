import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://inoxtkubxynhbuslvgyv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlub3h0a3VieHluaGJ1c2x2Z3l2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzMTc4NjYsImV4cCI6MjAxNzg5Mzg2Nn0.RTqoIe5bT4NJJStlmB0eNC50bZo0C9-w6LdCuRJEDeM";
export const supabase = createClient(supabaseUrl, supabaseKey);
