import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import style from './Random.module.scss';

export default function Random() {
  const [iconsArr, setIconsArr] = useState<Array<any>>(Object.entries(fas));
  const [randInd, setRandInd] = useState<number>(0);
  useEffect(() => {
    console.log(iconsArr);
  }, []);
  function getRand() {
    setRandInd(Math.floor(Math.random() * iconsArr.length));
  }
  return (
    <div className={style.rand}>
      <FontAwesomeIcon
        icon={iconsArr[randInd][1]}
        className={style.rand__display}
      />
      <button
        className={style.rand__btn}
        onClick={() => setTimeout(getRand, 3000)}
      >
        Get random icon
      </button>
    </div>
  );
}
