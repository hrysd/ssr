var BoardList = React.createClass({
  propTypes: {
    boards: React.PropTypes.array.isRequired
  },

  render: function() {
    var boardNodes = this.props.boards.map(function(board) {
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
});
