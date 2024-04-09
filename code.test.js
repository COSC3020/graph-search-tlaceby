const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

const wheeleGraph = [
    [1, 2, 3, 4],
    [0],
    [0],
    [0],
    [0],
    []   // 5 is not connected to graph
]

const superEpicGraph = [
    [1, 3, 5], // 0
    [0],       // 1
    [3],       // 2
    [0, 2],    // 3
    [5],       // 4
    [0, 4, 6], // 5
    [5],       // 6
    // These two nodes are in their own graph and are not connected to the main ones.
    [8],       // 7
    [7]        // 8
]

assert(JSON.stringify(depthFirstSearch(wheeleGraph, 0, 4)) == JSON.stringify([0, 4]))
assert(JSON.stringify(depthFirstSearch(wheeleGraph, 0, 0)) == JSON.stringify([0]))
assert(JSON.stringify(depthFirstSearch(wheeleGraph, 0, 5)) == JSON.stringify([]))
assert(JSON.stringify(depthFirstSearch(superEpicGraph, 0, 4)) == JSON.stringify([0, 5, 4]))
assert(JSON.stringify(depthFirstSearch(superEpicGraph, 0, 2)) == JSON.stringify([0, 3, 2]))
assert(JSON.stringify(depthFirstSearch(superEpicGraph, 5, 1)) == JSON.stringify([5, 0, 1]))
assert(JSON.stringify(depthFirstSearch(superEpicGraph, 7, 1)) == JSON.stringify([]))
assert(JSON.stringify(depthFirstSearch(superEpicGraph, 7, 8)) == JSON.stringify([7, 8]))