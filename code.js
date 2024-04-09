// deno-lint-ignore-file no-unused-vars
/**
 * @param {number[][]} graph
 * @param {number} startNode
 * @param {number} targetNode
 * @returns {number[]} a path from start to target
 */
function depthFirstSearch(graph, startNode, targetNode) {
    const visited = new Array(graph.length).fill(false);
    const path = [];

    // Accepts an node index as input and traverses it's neighbors until the target is reached
    // Returns a boolean whethher this node can lead to the targetNode.
    function search(node) {
        visited[node] = true;
        path.push(node);

        if (node === targetNode) {
            return true;
        }

        // Foreach unvisited neighnbor, try to search from that node.
        // If it fails then try the next neighbor.
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                if (search(neighbor)) {
                    return true;
                }
            }
        }

        path.pop(); // since it failed in the neighbors checks then make sure to exclude this node from path
        return false;
    }

    search(startNode);
    return path;
}


// Steps:
    // init path and visited arrays
    // call search on startNode
        
        // set visited and add current node to path
        // if node is target then return true
        // foreach neighbor attempt to find the path
        // if a neighbor suceeds then return true back the call stack
        
        // else: since all neighbors could not reach path return false and pop node off path since it cannot be a way to the targetnode.
