import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';


const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <Fragment>
      <h1>Страница информации</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Animi assumenda atque autem illum laborum minus neque
        nobis officia rem repellat!</p>
      <button onClick={() => history.push('/')} className="btn">Вернуться на предыдущую страницу</button>
    </Fragment>
  )
}

export default AboutPage;
