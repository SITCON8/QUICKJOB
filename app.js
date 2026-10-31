const SUPABASE_URL = "https://khpnrnvairjryhgwkdef.supabase.co";
const SUPABASE_KEY = "sb_publishable_w24EpyUG0Q6njg9eaSE43Q_hcVluBUA";

async function chargerOffres() {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/offres?select=*`, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`
      }
    });

    if (!response.ok) {
      throw new Error("Impossible de récupérer les offres");
    }

    const offres = await response.json();
    console.log("Offres récupérées :", offres);
  } catch (erreur) {
    console.error("Erreur Supabase :", erreur);
  }
}

chargerOffres();
