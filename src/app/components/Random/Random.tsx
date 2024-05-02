import React, { Profiler, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import style from './Random.module.scss';

export default function Random() {
  const [iconsArr, setIconsArr] = useState<Array<any>>(Object.entries(fas));
  const [randInd, setRandInd] = useState<number>(0);
  function getRand() {
    setRandInd(Math.floor(Math.random() * iconsArr.length));
  }
  function onRender(
    id: string,
    phase: 'mount' | 'apdate',
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number
  ) {
    console.log(`Actual duralation time: ${actualDuration}`);
    console.log(`Base duralation time: ${baseDuration}`);
  }
  return (
    <div className={style.rand}>
      <Profiler id="random" onRender={onRender}>
        <FontAwesomeIcon
          icon={iconsArr[randInd][1]}
          className={style.rand__display}
          data-testid="iconBox"
        />
        <button
          className={style.rand__btn}
          onClick={() => setTimeout(getRand, 3000)}
        >
          Get random icon
        </button>
      </Profiler>
    </div>
  );
}
