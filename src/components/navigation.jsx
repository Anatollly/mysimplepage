export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Пиов Плюс
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                О нас
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                Наши магазины
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Галерея
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Мы на карте
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Социальные сети
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Отзывы
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
