import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tbmkwckxojsoiofkgykq.supabase.co'
const supabaseKey = 'sb_publishable_RwbUqiaUeM2Xlymb0hUDQA_Q4v4OBZ0'

export const supabase = createClient(supabaseUrl, supabaseKey)