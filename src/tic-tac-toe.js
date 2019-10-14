class TicTacToe {
    constructor() {
      this.currentPlayerSymbol = 'x';
      this.nextPlayerSymbol = 'o';
      this.gameField = Array(3).fill(null).map(() => Array(3).fill(null));
      this.finished = false;
      this.winner = null;
    }

    getCurrentPlayerSymbol() {
      return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
      if (!this.gameField[rowIndex][columnIndex]) {
        this.gameField[rowIndex][columnIndex] = this.currentPlayerSymbol;
        this.currentPlayerSymbol = this.nextPlayerSymbol;
        this.nextPlayerSymbol = this.gameField[rowIndex][columnIndex] ;
      }
    }

    isFinished() {
      return !!this.getWinner() || this.noMoreTurns();
    }

    getWinner() {
      if (this.gameField[0][0] == this.gameField[1][1] && this.gameField[1][1] == this.gameField[2][2] || 
        this.gameField[0][2] == this.gameField[1][1] && this.gameField[1][1] == this.gameField[2][0]) this.winner = this.gameField[1][1];
      else {
        for (let i = 0; i < 3; i++) {
          if (this.gameField[0][i] != null && this.gameField[0][i] == this.gameField[1][i] && this.gameField[2][i] == this.gameField[0][i]) {
            this.winner = this.gameField[0][i];
            break;
          } else if (this.gameField[i][0] != null && this.gameField[i][0] == this.gameField[i][1] && this.gameField[i][1] == this.gameField[i][2]) {
            this.winner = this.gameField[i][0];
            break;
          }  
        }
      }
      return this.winner;
    }

    noMoreTurns() {
      return this.gameField.every(rowIndex => rowIndex.every(columnIndex => columnIndex));
    }

    isDraw() {
      return !(!this.isFinished() || !!this.getWinner());
    }

    getFieldValue(rowIndex, columnIndex) {
      return this.gameField[rowIndex][columnIndex];
    }
}

module.exports = TicTacToe;
