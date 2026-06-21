export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { title, category, description } = req.body;

    if (!title || !category) {
      return res.status(400).json({ error: 'Missing required fields', success: false });
    }

    // Return success - files should be manually placed in /public/downloads/
    return res.status(200).json({
      success: true,
      message: 'File metadata registered. Upload file to /public/downloads/ folder.',
      title: title,
      category: category,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server error',
      message: error.message
    });
  }
}
