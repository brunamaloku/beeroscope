import SyncLoader from 'react-spinners/SyncLoader';

const override = {
    display: 'block',
    margin: '100px auto'
};

const LoadingSpinner = ({loading}) => {
    
  return (
    <div>
      <SyncLoader
        color={"#000000"}
        loading={loading}
        cssOverride={override}
        size={150}
        />
    </div>
  )
}

export default LoadingSpinner;