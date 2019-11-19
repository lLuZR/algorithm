function  Node( element ){
	this.element = element;
	this.prev = null;
	this.next = null;
}

function DoubleLinkList() {
	let length =0 ,
		head = null,
		tail =null;
	this.insert = function( position, element ){
		if( position <= -1 || position > length ){
			return false;
		}
		let node = new Node(element),
			current = head,
			previous = null,
			index = 0;
		if( position === 0 ){
			if( !head ){
				head = node;
				tail = node;
			}else{
				node.next = current;
				current.prev = node;
				head = node;
			}
		}else if( position ===length ){
			current = tail;
			current.next = node;
			node .prev = current;
			tail = node;
		}else{
			while ( index++< position ){
				previous = current;
				current = current.next;
			}
			node.next = current;
			node.prev = previous;
			previous.next = node;
		}
		length++;
		return true;
	}
	this.append = function ( element ) {
		let node = new Node( element ),
			previous = null,
			current = head,
			index = 0;
		if( !head ){
			head = node;
			tail = node;
		}else{
			tail.next = node;
			node.prev = tail;
			tail = node;
		}
		length++;
	}
	this.removeAt = function ( position ) {
		if( position <=-1 && position >= length ){
			return false;
		}
		let current = head,
			previous,
			index = 0;
		if( position ===0 ){
			head = current.next;
			if( length ===1){
				tail = null;
			}else{
				head.prev = null;
			}
		}else if( position === length -1 ){
			current = tail;
			tail = current.prev;
			tail.next = null;
		}else{
			while ( index++ < position  ){
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
			current.next.prev = previous;
		}
		length--;
		return current.element;
	};
	this.getHead = function(){
		return head;
	};
	this.getTail = function () {
		return tail;
	}
}
let list = new DoubleLinkList();
list.append("这是头");
list.append("这是身体");
list.append("这是尾巴");

 console.log( list.removeAt( 1 ) );
console.log( list.getTail().prev );
