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
const { createClient } = require('@supabase/supabase-js');
// import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://https://sawufxtvuprvempxvbpd.supabase.co';
const supabaseKey = `Public anon key`
const supabase = createClient(supabaseUrl, supabaseKey)

//const supabaseUrl = 'https://sawufxtvuprvempxvbpd.supabase.co';
//const supabaseKey = process.env.SUPABASE_KEY;
//const supabase = createClient(supabaseUrl, supabaseKey);

const server = http.createServer(reqListener);

server.listen(3000);
