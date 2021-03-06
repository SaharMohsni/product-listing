const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db/db.json');
const middlewares = jsonServer.defaults();



const express = require('express');
const path = require('path');



server.use(middlewares);

server.use(jsonServer.bodyParser);

const db = router.db.getState();
const items = db.items;

var itemsTags = [];
var itemsTypes = [];

const getAllTags = () => {
	items.forEach((element) => {
		element.tags.forEach((tag) => {
			!itemsTags.includes(tag) && itemsTags.push(tag);
		});
	});
};

const getAllTypes = () => {
	items.forEach((element) => {
		!itemsTypes.includes(element.itemType) && itemsTypes.push(element.itemType);
	});
};

(function() {
	getAllTags();
	getAllTypes();
})();



 
server.use(express.static(path.join(__dirname, 'build')));
 

server.get('/market', function (req, res) {
  res.sendFile(path.join(__dirname,   'build',  'index.html'));
});


/*****************************************/

/**** Apis added that we don't need to fetch all products : huge number of products ****/

// Products types count
server.get('/products-types', (req, res) => {
	res.jsonp(itemsTypes);
});

// Products tags count
server.get('/tags', (req, res) => {
	res.jsonp(itemsTags);
});

/**********************************************/


server.use(router);

server.listen(process.env.PORT || 4000)
