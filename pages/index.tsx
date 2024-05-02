import Random from '@/app/components/Random/Random';
import style from './index.module.scss';
export default function Index() {
  return (
    <div className={style.main}>
      <Random />
    </div>
  );
}
