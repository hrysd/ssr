const {Component} = require('react');

class Board extends Component {
  onClick = () => {
    console.log(this, this.props.title);
  }

  render() {
    return (
      <tr onClick={this.onClick}>
        <td>{this.props.id}</td>
        <td>{this.props.title}</td>
      </tr>
    );
  }
}

class BoardList extends Component {
  render() {
    const boardNodes = this.props.boards.map((board) => {
      return <Board {...board} key={board.id} />;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>

        <tbody>
          {boardNodes}
        </tbody>
      </table>
    );
  }
}

module.exports = BoardList;
