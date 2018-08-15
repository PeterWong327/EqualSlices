import React from 'react';

// this.props.closeModal(); <for handleSubmit>

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
    this.props.createFriend(this.state.search.email);
  }

  render() {
    return (
      <div className="add-friend-form-container">
        <form onSubmit={this.handleSubmit} className="add-friend-form-box">
          <label className="invite-friends">Invite Friends
            <input
              className="add-friend-email-input"
              placeholder="Email address"
              type="text"
              onChange={this.update('email')}
            ></input>
          </label>
          <br/>
          <br/>
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
