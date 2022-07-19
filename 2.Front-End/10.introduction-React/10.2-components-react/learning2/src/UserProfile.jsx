// arquivo UserProfile.js
import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    const { name, email, avatar, id } = this.props.user
    return (
      <div key={id}>
        <p> {name} </p>
        <p> {email} </p>
        <Image source={avatar} alternativeText="User avatar" />
      </div>
    );
  }
}

export default UserProfile;