class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
// more difficult than I thought, still chewing on it.
  // remove(val) {
  //   if (val > this.val) {
  //     if (this.right.val === val) {
  //       const returned = this.right;
  //       this.right = this.right.left;
  //       this.right.insert(returned.left)
  //       return returned;
  //     } else {
  //       return this.right ? this.right.remove(val) : undefined;
  //     }
  //   } else {
  //       if (this.left.val === val) {
  //         const returned = this.left;
  //         this.left = this.left.right;
  //         this.left.insert(returned.left)
  //         return returned;
  //       } else {
  //         return this.left ? this.left.remove(val) : undefined;
  //       }
  //   }
  // }

  dfsPreOrder() {
    const res = [];
    res.push(this.val);
    if (this.left) res.push(...this.left.dfsPreOrder());
    if (this.right) res.push(...this.right.dfsPreOrder());
    return res;
  }

  dfsInOrder() {
    const res = [];
    if (this.left) res.push(...this.left.dfsInOrder());
    res.push(this.val);
    if (this.right) res.push(...this.right.dfsInOrder());
    return res;
  }

  dfsPostOrder() {
    const res = [];
    if (this.left) res.push(...this.left.dfsPostOrder());
    if (this.right) res.push(...this.right.dfsPostOrder());
    res.push(this.val);
    return res;
  }

  find(val) {
    if (val === this.val) return this;
    else if(val > this.val) return this.right ? this.right.find(val) : undefined;
    else return this.left ? this.left.find(val) : undefined;
  }

  insert(node) {
    if(node.val > this.val){
      if(this.right)
        this.right.insert(node);
      else
        this.right = node;
    } 
    else {
      if (this.left)
        this.left.insert(node);
      else
        this.left = node;
    }
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const node = new Node(val);
    let curr = this.root;
    if(curr === null) {
      this.root = node;
      return this;
    }
    while(true) {
      if (node.val > curr.val) {
        if(!curr.right){
          curr.right = node;
          return this;
        } else
          curr = curr.right;
      } else {
        if (!curr.left) {
          curr.left = node;
          return this;
        } else
          curr = curr.left;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const node = new Node(val);
    if (this.root === null) {
      this.root = node;
    } else {
      this.root.insert(node);
    }
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let curr = this.root;
    if(!curr) return;
    while(curr.val !== val) {
      if(val > curr.val){
        if(!curr.right) return;
        else curr = curr.right;
      }
      else {
        if (!curr.left) return;
        else curr = curr.left;
      }
    }
    return curr;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    return this.root ? this.root.find(val) : undefined;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    if(!this.root) return [];
    else return this.root.dfsPreOrder();

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    if (!this.root) return [];
    else return this.root.dfsInOrder();
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    if (!this.root) return [];
    else return this.root.dfsPostOrder();
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if(!this.root) return [];
    const queue = [this.root];
    const visited = [];
    while(queue.length) {
      const curr = queue.shift();
      if(curr.left) queue.push(curr.left);
      if(curr.right) queue.push(curr.right);
      visited.push(curr.val);
    }
    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */
  // still chewing on this one. it would be nice if I had a way to integrate 
  //two binary trees together efficiently, but don't have the time to devote to writing that func right now
  // remove(val) {
  //   if(!this.root) return undefined;
  //   if(this.root.val === val){
  //     const returned = this.root;
  //     this.root = returned.right;
  //     this.root.left.insert(returned.left);
  //     return returned;
  //   } 
  //   else {
  //     return this.root.remove(val);
  //   }
  // }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
