/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var perimeter = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                petimeter += 4;
                grid[i][j-1] && grid[i][j-1] == 1 && petimeter--;
                grid[i][j+1] && grid[i][j+1] == 1 && petimeter--;
                grid[i-1] && grid[i-1][j] == 1 && petimeter--;
                grid[i+1] && grid[i+1][j] == 1 && petimeter--;
            }
        }
    }
    return perimeter;
};
