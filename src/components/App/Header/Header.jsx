import React from 'react';
import './Style.css';
import Logo from '../../../assets/image/logo_dogFood.svg';
import Search from '../../../assets/image/ic-search.svg';
import Like from '../../../assets/image/save.svg'


export function Header({ changeInput, user, onUpdateUser }, params) {

  const handleClickButtonEdit = (e) => {
    e.preventDefault()
    onUpdateUser({ about: 'писатель', name: 'jon' })

  }

  return (
    <header className='header'>
      <div className='header__container'>
        {/* {user&& <span>{user.email}</span>}
              {user&& <span>{user.name}</span>} */}

        {/* <span>{user?.email}</span>
        <span>{user?.name}</span>
        <button className='btn' onClick={handleClickButtonEdit}>change</button> */}
        <div className='logo__conteiner'>
          <a href='#'><img className='logo' src={Logo}></img></a>
          <div className='user__info'>  
          <span>email: {user?.email}</span><br/>
          <span>name: {user?.name}</span>
          <button className='btn' onClick={handleClickButtonEdit}>change</button>
        </div>
        </div>
        <form className='search__container'>
          <input className='search__input' placeholder='Поиск' onInput={changeInput}></input>
          <img className='search__icon' src={Search}></img>
        </form>
        <div className='navi'>
          <div className='navi__container'>
            <a href='#'><img src={Like}></img></a>
            <a href='#'><img src={Like}></img></a>
            <a href='#'><img src={Like}></img></a>
          </div>
        </div>
      </div>
    </header>
  )
}