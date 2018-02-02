var bodyParser = require('body-parser');

var cache = require('memory-cache');
var arr = [];

module.exports = {
  getPosts(req, res) {
	res.send(cache.get("posts"));
  },
  addPost(req, res) {
	var data = '';
	req.on('data', function( chunk ) {
    	data += chunk;
  	});
  	req.on('end', function() {
	req.rawBody = data;
    
        if (data && data.indexOf('{') > -1 ) {
	req.body = JSON.parse(data);
	arr.push(data);
	cache.put("posts",arr);	
    }
  });

	res.send("post created successfully");
  },
  updatePost(req, res) {
	//updating the post details
	var data = '';
	req.on('data', function( chunk ) {
    	data += chunk;
  	});
  	req.on('end', function() {
	req.rawBody = data;
    
        if (data && data.indexOf('{') > -1 ) {
	req.body = JSON.parse(data);	
	var arrData = cache.get("posts");	
	arrData.pop(req.params.id);
	arrData.push(data);
	cache.put("posts",arrData);
    }
  });	
	res.send("post udpated successfully");
  },
  removePost(req, res) {
	var arrData = cache.get("posts");	
	arrData.pop(req.params.id);
	cache.put("posts",arrData);
	res.send("post deludpatedccessfully");
  }
}
console.log("posts");