const React = require('react');

class BoardList extends React.Component {
  static propTypes = {
    boards: React.PropTypes.array.isRequired
  }

  render() {
    const boardNodes = this.props.boards.map((board) => {
      return (
        <tr key={board.id}>
          <td>{board.id}</td>
          <td>{board.title}</td>
        </tr>
      );
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
