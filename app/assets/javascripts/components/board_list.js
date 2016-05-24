const React = require('react');

class BoardList extends React.Component {
  static propTypes = {
    boards: React.PropTypes.array.isRequired
  }

  render() {
    const boardNodes = this.props.boards.map((board) => {
      return (
        <tr>
          <td>{board.title}</td>
        </tr>
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th colSpan='3'></th>
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
