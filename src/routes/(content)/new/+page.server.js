export const load = async ({ request }) => {
    const origin = request.headers.get('origin') || request.headers.get('host');
    console.log('Request Origin:', origin); // Log the origin
  
    // Use the origin in your logic (e.g., for CORS configuration)
    return { origin };
  };