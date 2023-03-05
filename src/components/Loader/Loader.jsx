import { ProgressBar } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <ProgressBar
      height="80"
      width="80"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass={css.center}
      borderColor="#f4a52e"
      barColor="#069f03"
    />
  );
}
