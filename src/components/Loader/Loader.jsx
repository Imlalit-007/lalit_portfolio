import "../../styles/Loader.css";
import { WaveSpinner } from "react-spinners-kit";
import { CubeSpinner, SwapSpinner } from "react-spinners-kit";

function Loader({ loading }) {
  return (
    <div className='loader'>
      <SwapSpinner
        size={30}
        color='#176eff'
        loading={loading}
      />
    </div>
  );
}

export default Loader;
