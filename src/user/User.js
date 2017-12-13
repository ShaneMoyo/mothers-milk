import React, { Component } from 'react';

class User extends Component {
 
  render() {
    const { name='Awesome stranger donor' } = this.props.users;
    return(
      <section className="section hero is-light">
        <div className="container">
          <h1 className="title">Home</h1>
          <h2 className="subtitle">
                    Dear <strong>{name}</strong>, <br />
                    You have donated <span>$thisMuch🍼🍼🍼🍼</span> breast milk,
                    and saved <span>$thisMany</span> lives.
                     Thank you for being a part of <span>Northwest Mothers Milk Bank</span>.
          </h2>
        </div>
      </section>
    );
  }
}

export default User;
