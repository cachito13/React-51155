import ReactLoading from "react-loading";

export const Loader = () => {

    return (
        
          <div className="spinner-container">
        <ReactLoading type={"bars"} color={"#123abc"} height={50} width={50} />

        </div>
    )
}

export default Loader