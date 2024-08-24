import { createClient } from '@supabase/supabase-js';

const URL = 'https://pyvzlodqbncuiqtmfofi.supabase.co/';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5dnpsb2RxYm5jdWlxdG1mb2ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1Mzc3ODUsImV4cCI6MjA0MDExMzc4NX0.cdkt5J7r4USbHKLrQAu-EWNnDcDgTdgy7Q7c5xAiTsw';
export const supabase = createClient(URL, API_KEY);
