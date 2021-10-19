import './Header.css'

const Header = () => {

  let figureSizes = [];
  let cnt = 0;
  for (let i = 0; i < 60; i++) {
    // figureSizes[i] = (Math.pow(i, 0.4));
    if (i < 300) {
      figureSizes[i] = 90;
    } else {
      cnt++;
      // figureSizes[i] = 90 - i - cnt * 5;
    }
  }

  return (
    <div className='wrapper'>
      <div className='header'>
        <div className='header-text'>
          Победителями олимпиад становятся здесь
        </div>
        <div className='header-description'>
          Поступайте в центр олимпиадной подготовки
          и прокачивайте свой уровень до победы в таких олимпиадах, как
          ВСОШ, Эйлера
        </div>
        <button className='header-enroll-button'>
          Записаться на курс
        </button>
        <div className="header-figure">
          {
            figureSizes.map(element => {
              return <span
                className='dot'
                style={{
                  marginTop: `${element}px`,
                  width: `${0.5}vw`,
                  height: `${0.5}vw`,
                }}/>
            })
          }

        </div>
      </div>
    </div>
  );
}

export default Header;