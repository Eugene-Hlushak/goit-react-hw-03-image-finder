import { ThreeCircles } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <ThreeCircles
      height="200"
      width="200"
      color="#4fa94d"
      wrapperClass={css.center}
      visible={true}
      ariaLabel="three-circles-rotating"
    />
  );
}
