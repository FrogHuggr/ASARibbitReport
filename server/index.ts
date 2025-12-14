import express from 'express';
import cors from 'cors';
import pg from 'pg';

const { Pool } = pg;

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.post('/api/analytics/event', async (req, res) => {
  try {
    const { eventType, pagePath, pageTitle, referrer } = req.body;
    
    if (!eventType || !pagePath) {
      return res.status(400).json({ error: 'eventType and pagePath are required' });
    }

    await pool.query(
      `INSERT INTO analytics_events (event_type, page_path, page_title, referrer) 
       VALUES ($1, $2, $3, $4)`,
      [eventType, pagePath, pageTitle || null, referrer || null]
    );

    res.json({ success: true });
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ error: 'Failed to record event' });
  }
});

app.get('/api/analytics/stats', async (req, res) => {
  try {
    const totalViews = await pool.query(
      `SELECT COUNT(*) as total FROM analytics_events WHERE event_type = 'page_view'`
    );

    const todayViews = await pool.query(
      `SELECT COUNT(*) as today FROM analytics_events 
       WHERE event_type = 'page_view' 
       AND created_at >= CURRENT_DATE`
    );

    const weekViews = await pool.query(
      `SELECT COUNT(*) as week FROM analytics_events 
       WHERE event_type = 'page_view' 
       AND created_at >= CURRENT_DATE - INTERVAL '7 days'`
    );

    const popularPages = await pool.query(
      `SELECT page_path, page_title, COUNT(*) as views 
       FROM analytics_events 
       WHERE event_type = 'page_view' 
       GROUP BY page_path, page_title 
       ORDER BY views DESC 
       LIMIT 10`
    );

    const dailyStats = await pool.query(
      `SELECT DATE(created_at) as date, COUNT(*) as views 
       FROM analytics_events 
       WHERE event_type = 'page_view' 
       AND created_at >= CURRENT_DATE - INTERVAL '30 days'
       GROUP BY DATE(created_at) 
       ORDER BY date DESC`
    );

    res.json({
      totalViews: parseInt(totalViews.rows[0].total),
      todayViews: parseInt(todayViews.rows[0].today),
      weekViews: parseInt(weekViews.rows[0].week),
      popularPages: popularPages.rows,
      dailyStats: dailyStats.rows,
    });
  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Analytics API running on port ${port}`);
});
