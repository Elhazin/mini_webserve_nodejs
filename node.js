
var serv = require('http');
var fi = require('fs');
 paths = require('path')

const map_extansion = {};

map_extansion['.html'] = 'text/html';
map_extansion['.css'] = 'text/css';
map_extansion['.js'] = 'application/javascript';
map_extansion['.json'] = 'application/json';
map_extansion['.png'] = 'image/png';
map_extansion['.jpg'] = 'image/jpg';
map_extansion['.ico'] = 'image/x-icon';
map_extansion['.svg'] = 'image/svg+xml';
map_extansion['.mp3'] = 'audio/mpeg';
map_extansion['.mp4'] = 'video/mp4';





function handle_many_equestes(res, req, s)
{

}


var s = serv.createServer((function(req, res){
	var root_path = "/nfs/homes/abouzanb/Desktop/chat/server_one";
	fi.stat(root_path + req.url , function(err, stats)
	{
		if (err)
		{
			res.writeHead(404, {'Content-Type' : 'text/html'});
			fi.createReadStream("./server_one/errors/error403.html").pipe(res);
			return ;
		}
		if (stats.isDirectory())
		{
			res.writeHead(200, {'Content-Type' : 'text/html'});
			fi.createReadStream("./server_one/errors/error403.html").pipe(res);
		}
		if (stats.isFile())
		{
			var s = map_extansion[paths.extname(req.url)];
			
			
				res.writeHead(200, {'Content-Type' : s});
				fi.createReadStream("./server_one" + req.url).pipe(res);
			
			res.end();
		}

	})

}
))

s.listen(8000, '127.0.0.1');
