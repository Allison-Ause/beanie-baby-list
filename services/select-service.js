const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


export async function getBeanies(title, astroSign) {

    let query = client
        .from('beanie_babies')
        .select(`
            id,
            title,
            image,
            astroSign
        `);

    if (title) {
        query = query.ilike('title', `%${title}%`);
    }

    if (astroSign) {
        query = query.ilike('astroSign', `%${astroSign}%`);
    }

    const response = await query;

    return response.data;
}

export async function getBeanie(id) {

    const response = await client
        .from('beanie_babies')
        .select()
        .match({ id })
        .single();

    return response.data;
}