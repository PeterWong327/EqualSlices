import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: { email: ""}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    return e => {
      this.setState({search: {email: e.target.value}} )
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createFriend(this.state.email).then(this.props.closeModal);
  }

  render() {
    return (
      <div className="add-friend-form-container">
        <form onSubmit={this.handleSubmit} className="add-friend-form-box">
          <label>Invite Friends
            <input
              className="add-friend-email-input"
              type="text"
              onChange={this.update('email')}
            ></input>
          </label>
          <input
            className="add-friend-submit"
            type="submit"
            value="Send invite and add friend">
          </input>
        </form>
      </div>
    )
  };
};

export default Search;
