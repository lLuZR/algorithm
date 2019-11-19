let Dictionary = require('./dictionary.js');
function Graph() {
	let vertices = [];
	let adjList = new Dictionary();
	this.addVertex = function (v) {
		vertices.push(v);
		adjList.set( v, [] );
	}
	this.addEdge =function (v,w) {
		adjList.get(v).push(w);
		adjList.get(w).push(v);
	}
	this.getVertices =function () {
		return vertices;
	}
	this.getAdjList = function () {
		return adjList.getItems();
	}
	let initializeColor = function () {
		let color = [];
		for( let i=0; i<vertices.length;i++ ){
			color[ vertices[i]] ='white';
		}
		return color;
	}
	this.bfs = function ( v,callback ) {
		let color = initializeColor(),
			queue = [];
		queue.push(v);
		while (　queue.length !==0 ){
			let u = queue.shift(),
				neighbors = adjList.get(u);
			color[u] ='grey';
			for( let i=0;i<neighbors.length;i++){
				let w = neighbors[i];
				if( color[w] === 'white'){
					color[w] = 'grey';
					queue.push(w);
				}
				color[u] = 'black';
			}
			if( callback ){
				callback(u);
			}
		}
	}
	this.BFS = function ( v,callback ) {
		let color = initializeColor(),
			queue = [],
			d= [],
			pred = [];
		queue.push(v);
		for( let i =0;i< vertices.length;i++){
			d[ vertices[i]] =0;
			pred[ vertices[i]] = null;
		}
		while (　queue.length !==0 ){
			let u = queue.shift(),
				neighbors = adjList.get(u);
			color[u] ='grey';
			for( let i=0;i<neighbors.length;i++){
				let w = neighbors[i];
				if( color[w] === 'white'){
					color[w] = 'grey';
					d[w] = d[u]+1;
					pred[w] = u;
					queue.push(w);
				}
				color[u] = 'black';
			}
		}
		return {
			distance:d,
			predecessors:pred
		}
	}
	let dfsVisit = function (u, color, callback ) {
		color[u] = 'grey';
		if( callback ) callback(u);
		let neighbors = adjList[u];
		for( let i=0;i<neighbors.length;i++ ){
			let w = neighbors[i];
			if( color[w] ==='white' ){
				dfsVisit( w,color,callback );
			}
		}
		color[u] = 'black';
	};
	this.dfs = function ( callback ) {
		let color = initializeColor();
		for( let i=0; i< vertices.length; i++ ){
			if( color[ vertices[i]] === 'white'){
				dfsVisit( vertices[i], color, callback );
			}
		}
	}
}

let graph = new Graph();
let myVertices = [ 'A','B','C','D','E','F','G', 'H','I'];
for( let i =0,l = myVertices.length;i<l;i++){
	graph.addVertex( myVertices[i] );
}
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('A','D');
graph.addEdge('C','D');
graph.addEdge('C','G');
graph.addEdge('D','G');
graph.addEdge('D','H');
graph.addEdge('B','E');
graph.addEdge('B','F');
graph.addEdge('E','I');

// console.log( graph.getAdjList() )
function printNode( value) {
	console.log('visited vertex:'+ value );
}

// console.log ( graph.BFS( myVertices[0]) )
let shortestpathA = graph.BFS( myVertices[0]);
let fromVertex = myVertices[0];
for( let i=1;i<myVertices.length;i++){
	let toVertex = myVertices[i],
		path = [];
	for( let v = toVertex; v!== fromVertex; v=shortestpathA.predecessors[v]){
		path.push(v);
	}
	path.push( fromVertex );
	let s = path.pop();
	while ( path.length!==0){
		s += '-' + path.pop();
	}
	console.log(s)
}