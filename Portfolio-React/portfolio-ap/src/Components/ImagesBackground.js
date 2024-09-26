

const ImagesBackground = () => {
    return(
        <div className="devContainer">

            <div className="lightness"></div>

            <div className="imgDeveloperContainer">
                <img id="imgDeveloper" src={require("../Utils/Images/imgDeveloper.png")}></img>
                
            </div>
            <div className="line" id="projectsRef"></div>
            
        </div>
    );
}

export default ImagesBackground;