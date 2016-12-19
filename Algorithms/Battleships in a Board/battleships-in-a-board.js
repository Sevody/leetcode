/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let count = 0
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == 'X') {
                count++;
                let tmp_i = i
                let tmp_j = j
                while(board[tmp_i+1] && board[tmp_i+1][j] == 'X') {
                    board[++tmp_i][j] = '.'
                }
                while(board[i][tmp_j+1] && board[i][tmp_j+1] == 'X') {
                    board[i][++tmp_j] = '.'
                }
            }
        }
    }
    return count
};

// improve solution with runtime O(n) and space O(1)
var countBattleships = function(board) {
    let count = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            count += board[i][j] === 'X' && (i === 0 || board[i-1][j] !== 'X') && (j === 0 || board[i][j-1] !== 'X')
        }
    }
    return count
}
