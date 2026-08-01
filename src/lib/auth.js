import { supabase } from './supabaseClient.js'

export async function signUp({ name, email, password, archetypeId }) {
  const { data, error } = await supabase.auth.signUp({
    email: email.trim(),
    password,
    options: { data: { name: name.trim() } },
  })
  if (error) {
    if (error.message.toLowerCase().includes('already registered')) {
      throw new Error('An account with that email already exists.')
    }
    throw error
  }

  const { error: profileError } = await supabase.from('profiles').insert({
    id: data.user.id,
    name: name.trim(),
    archetype_id: archetypeId ?? null,
  })
  if (profileError) {
    throw profileError
  }

  return data
}

export async function signIn({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password,
  })
  if (error) {
    throw new Error('Incorrect email or password.')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('archetype_id')
    .eq('id', data.user.id)
    .maybeSingle()
  if (profile?.archetype_id) {
    localStorage.setItem('pp-archetype', profile.archetype_id)
  }

  return data
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}
