import React from 'react';

// this.props.closeModal(); <for handleSubmit>

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: { email: ""}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    document.addEventListener("click", this.props.clearErrors)
  }


  cancelClearErrors(e) {
    e.stopPropagation()
  }

  update(e) {
    return e => {
      this.setState({search: {email: e.target.value}} )
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createFriend(this.state.search.email);
    e.target.reset();

  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="add-friend-form-container" onClick={this.cancelClearErrors}>
        <form onSubmit={this.handleSubmit} className="add-friend-form-box">
          <label className="invite-friends">Invite Friends
            <br/>
            <br/>
            <input
              className="add-friend-email-input"
              placeholder="Email address"
              type="text"
              onChange={this.update('email')} />
          </label>
          <input
            className="add-friend-submit"
            type="submit"
            value="Send invite">
          </input>
          <div className="add-friend-errors">
            {this.renderErrors()}

          </div>
        </form>
      </div>
    )
  };
};

export default Search;
