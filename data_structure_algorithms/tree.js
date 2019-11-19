function BinarySearchTree() {
	let Node  = function ( key ) {
		this.key = key;
		this.left = null;
		this.right = null;
	}
	let root = null;
	const insertNode = function ( node, newNode ) {
		if( newNode.key < node.key ){
			if( node.left === null ){
				node.left = newNode;
			}else{
				insertNode( node.left, newNode );
			}
		}else{
			if( node.right ===null){
				node.right = newNode;
			}else{
				insertNode( node.right, newNode );
			}
		}
	}
	this.insert = function ( key ) {
		let newNode = new Node( key );
		if( root === null ){
			root = newNode;
		}else{
			insertNode( root, newNode );
		}
	}
	this.getRoot = function () {
		return root;
	}
	//中序遍历
	const  inOrderTraverseNode = function ( node ,callback ) {
		if( node !== null ){
			inOrderTraverseNode( node.left, callback );
			callback( node.key );
			inOrderTraverseNode( node.right, callback );
		}
	};
	this.inOrderTraverse = function ( callback ) {
		inOrderTraverseNode( root, callback );
	}
	//先序遍历
	const preOrderTraverseNode = function ( node ,callback ) {
		if( node !==null ){
			callback( node.key );
			preOrderTraverseNode( node.left, callback );
			preOrderTraverseNode( node.right, callback );
		}
	}
	this.preOrderTraverse = function ( callback ) {
		preOrderTraverseNode( root, callback );
	}
	//后序遍历
	const postOrderTraverseNode = function ( node, callback ) {
		if( node !==null ){
			postOrderTraverseNode( node.left, callback );
			postOrderTraverseNode( node.right, callback );
			callback( node.key );
		}
	}
	this.postOrderTraverse = function ( callback ) {
		postOrderTraverseNode( root, callback );
	}
	//最小值
	const minNode = function ( node ) {
		if( node ){
			while ( node && node.left !== null ){
				node = node.left;
			}
			return node.key;
		}
		return null;
	}
	this.min = function () {
		return minNode( root );
	}
	//最大值
	const maxNode = function ( node ) {
		if( node ){
			while ( node && node.right !== null ){
				node = node.right;
			}
			return node.key;
		}
		return null;
	}
	this.max = function () {
		return maxNode( root );
	}
	//查找特定值
	const searchNode = function ( node, key) {
		if( node === null ){
			return false;
		}
		if( key< node.key ){
			return searchNode( node.left, key );
		}else if( key > node.key ){
			return searchNode( node.right, key );
		}else{
			return true;
		}
	}
	this.search = function ( key) {
		return searchNode( root, key );
	}
	
	//最小值节点
	const findMinNode = function ( node ) {
		if( node ){
			while ( node && node.left !== null ){
				node = node.left;
			}
			return node;
		}
		return null;
	}
	//移除一个节点
	const removeNode = function ( node,key ) {
		if( node === null ){
			return null;
		}
		if( key < node.key ){
			node.left = removeNode( node.left, key );
			return node;
		}else if( key > node.key ){
			node.right = removeNode( node.right, key );
			return node;
		}else{
			if( node.left === null && node.right === null ){
				node = null;
				return node;
			}
			if( node.left === null ){
				node = node.right;
				return node;
			}else if( node.right ===null){
				node = node.left;
				return node;
			}
			let aux = findMinNode( node.right );
			node.key = aux.key;
			node.right = removeNode(node.right, aux.key );
			return node;
		}
	};
	this.remove = function ( key) {
		root = removeNode( root, key );
	}
}

let tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(15);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

function printNode( value ) {
	console.log( value );
}
 //tree.postOrderTraverse( printNode );
// console.log( tree.min() );
// console.log( tree.max() );
console.log( tree.search(1) )
console.log( tree.search(8) )