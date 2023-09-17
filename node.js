// var fs = require('fs');


// var s = fs.readFileSync('n.py', 'utf8');
// var q = fs.writeFileSync('testi.py', s);
// console.log(s);

// var s = require('http');

// var d = require('fs');

// //server 



// var t = "/nfs/homes/abouzanb/Downloads"
// var server = s.createServer(function (req, res){
//     var m = {
//         name: "anas",
//         age: 445,
//         again: "oooo"
//     }
//     try {
//         // var a = d.readFileSync(t + req.url);
		
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify(m));
//         // var streams = d.createReadStream('/nfs/homes/abouzanb/Downloads/oulad.mp4');
//         // streams.pipe(res);
//     }
//     catch(error)
//     {
//         var a = d.readFileSync('index.html');
//         res.writeHead(404, {'Content-type' : 'text/html'});
//         res.end(a);
//     }    
// });
// server.listen(8050, '10.13.10.5');
// console.log("it is like cpp");

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
			fi.createReadStream("/nfs/homes/abouzanb/Desktop/chat/server_one/errors/error404.html").pipe(res);
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
			if (req.url === '/login')
			{
				res.writeHead(200, {'Content-Type' : s});
				fi.createReadStream("./server_one/login.html").pipe(res);        
			}
			if (req.url === '/signup')
			{
				res.writeHead(200, {'Content-Type' : s});
				fi.createReadStream("./server_one/signup.html").pipe(res);
		
			}
			else
			{
				res.writeHead(200, {'Content-Type' : s});
				fi.createReadStream("./server_one" + req.url).pipe(res);
			}
			res.end();
		}

	})

}
))

s.listen(8000, '127.0.0.1');
