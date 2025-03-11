import  'https://unpkg.com/@supabase/supabase-js@2';
const { createClient } = supabase
var _supabaseTemp = createClient('https://zycrlpopiqgzvwyxrvpv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5Y3JscG9waXFnenZ3eXhydnB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNDg4NzgsImV4cCI6MjA1NjgyNDg3OH0.pALWiHHBF3Ge9tREPbITkElvj3Mrk7CHsuY2fUt9C5k')
window._supabase = _supabaseTemp;
export const _supabase = _supabaseTemp;