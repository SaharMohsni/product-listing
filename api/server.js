const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

var tags = [];

const getAllTags = () => {
	const db = router.db.getState();
	var items = db.items;
 
	items.forEach((element) => {
		element.tags.forEach((tag) => {
			!tags.includes(tag) && tags.push(tag);
		});
	});
};

(function() {
	getAllTags();
})();

server.get('/total-items-count', (req, res, next) => {
	const db = router.db.getState();
	var itemsCount = db.items.length;
	res.jsonp(itemsCount);
});

server.get('/tags', (req, res) => {
	res.jsonp(tags);
});

server.use(router);

server.listen(4000, () => {
	console.log('JSON Server is running');
});
