import { ThreeCircles } from 'react-loader-spinner';

export default function Loader() {
  return (
    <ThreeCircles
      height="100"
      width="100"
      color="#4fa94d"
      //   wrapperStyle={{}}
      //   wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      //   outerCircleColor="red"
      //   innerCircleColor="blue"
      //   middleCircleColor="orange"
    />
  );
}
