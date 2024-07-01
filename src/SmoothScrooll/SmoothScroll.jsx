
import "./style.css";
import ScrollToTop from "react-scroll-to-top";

const SmoothScroll = () => {
    return (
        <div className="App ">
            {/* <ScrollToTop smooth color="#6f00ff" /> */}
            <div >

                <ScrollToTop className="flex justify-center items-center " smooth color="red"  />

            </div>
            
        </div>
    );
};

export default SmoothScroll;
