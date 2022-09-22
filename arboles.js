/**
 * Arbol binario
 * binary tree
 */


/**
 * Arbol de busqueda binaria
 * binary search tree
 */

/**
 * Busqueda profunda
 * Recursividad
 */

/**
 * INORDER (left, root, right) (1,4,5,6,8,9)
 * PREORDER (root, left, right) (6,4,1,5,8,9)
 * POSTORDER(left, right, root) (1,5,4,9,8,6)
 */


function Node(value){
    this.left = null;
    this.right = null;
    this.value = value;
}

const root = new Node(6);
const node1 = new Node(4);
const node2 = new Node(1);
const node3 = new Node(5);
const node4 = new Node(8);
const node5 = new Node(9);

root.left = node1;
root.right = node4;

node1.left = node2;
node1.right = node3;

node4.right = node5;

function inorder(node){
    if(node === null){
        return;
    }

    inorder(node.left);
    console.log(node.value);
    inorder(node.right);
}

function preorder(node){
    if(node === null){
        return;
    }

    console.log(node.value);
    preorder(node.left);
    preorder(node.right);
}

function postorder(node){
    if(node===null){
        return;
    }

    postorder(node.left);
    postorder(node.right);
    console.log(node.value);
}

function insert(node, value){
    if(node === null) {
        return;
    }
    if (value >= node.value){
        if(node.right === null){
            const newNode = new Node(value);
            node.right = newNode;
        } else {
            insert(node.right, value);
        }
    } else if (value <= node.value ) {
        if(node.left === null) {
            const newNode = new Node(value);
            node.left = newNode;
        } else {
           insert(node.left, value); 
        }
    }
}

function find(node, value) {
    if(node === null) {
        return null;
    }

    if(node.value === value){
        return node;
    }

    const left = find(node.left, value);
    const right = find(node.right, value);

    return left || right;
}


//insert(root, 7);
const res = find(root, 8);
console.log(res.value, res.left.value, res.right.value);

//inorder(root);
//preorder(root);
//postorder(root);