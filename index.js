const http = require('http');

function reqListener(req, res) {
    const url = req.url;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>supabase</title></head>');
        res.write('<body><h1>Hello</p>');
        res.write('</html>');
        res.end();
    } else {
	res.end('404 not found')
    }

}

//import { createClient } from '@supabase/supabase-js';
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://sawufxtvuprvempxvbpd.supabase.co';
const supabaseKey = `Public anon key`
//const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhd3VmeHR2dXBydmVtcHh2YnBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0MzE2NDUsImV4cCI6MjA3NjAwNzY0NX0.Qqx-VoWrg-YkpnFdD4zqAMZcmdTqlCji0R-X12J_17k'

const supabase = createClient(supabaseUrl, supabaseKey)

//const supabaseUrl = 'https://sawufxtvuprvempxvbpd.supabase.co';
//const supabaseKey = process.env.SUPABASE_KEY;
//const supabase = createClient(supabaseUrl, supabaseKey);

const server = http.createServer(reqListener);

server.listen(3000);
