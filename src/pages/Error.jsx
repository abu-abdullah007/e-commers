import err from "../assets/sad.svg"
import '../assets/Error.css'

const Error = () => {
    return (
        <>
            <div className="error-div">
                <div className="eror-center-main">
                    <div className="error-message">
                        <img src={err} alt="" />
                        <h1>404 Error</h1>
                        <h2>Page Not Found ! </h2>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Error;