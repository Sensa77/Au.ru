import React from 'react';
import './User.scss';

const User = () => {
  return (
    <div className='user'>
      <div className='wrapper'>
      <p className='user__title'>Здравствуйте, <span className='user__title--name'>Человек №3596941</span></p>
      <button type='button' className='user__button'>Сменить статус</button>
      </div>
      <div className='user__status'>Прежде чем действовать, надо понять</div>
    </div>
  )
}

export default User;