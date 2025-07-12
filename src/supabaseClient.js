// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://haizeuhdoqbreonzcyji.supabase.co"; // 👈 cambia esto
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhaXpldWhkb3FicmVvbnpjeWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyNjk4NTAsImV4cCI6MjA2Nzg0NTg1MH0.WQmKcwMwEcPUKd9bsrKWUqJ6K2GTtzdeP8IBFZieQxg"; // 👈 cambia esto también

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
