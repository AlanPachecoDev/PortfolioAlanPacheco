

const ProjectsSection = () => {
    return(
        <section className="projectsContent" id="projectsContent" >

            <h2 className="h2Titles">Projects</h2>

            {/* <!-- COWID PROJECT --> */}
            <div className="projectContainer">

                <div className="projectDescription">
                <div className="projectDescriptionText" id="cowIdText">
                    <h2>CowID</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, vero. Dolorem in ratione amet. Debitis neque quaerat labore amet odit nam ad vel impedit placeat porro, ullam omnis cupiditate possimus?</p>
                </div>
                </div>
                <div className="projectImageContainerMovil" id="cowIdImageContainer" >
                <img id="cowIdImage" src={require("../Utils/Images/CowIDProject.jpg")}></img>
                </div>
            </div>

            {/* <!-- MIKHUNA ECUADOR PROJECT --> */}
            <div className="projectContainer">

                <div className="projectDescription">
                <div className="projectDescriptionText" id="mikhunaText">
                    <h2>Mikhuna Ecuador</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, vero. Dolorem in ratione amet. Debitis neque quaerat labore amet odit nam ad vel impedit placeat porro, ullam omnis cupiditate possimus?</p>
                </div>
                </div>
                <div className="projectImageContainerWeb" id="mikhunaImageContainer" >
                <img id="mikhunaImage" src={require("../Utils/Images/MikhunaEcuador.png")}></img>
                </div>
            </div>

            {/* <!-- Bunny Bar PROJECT --> */}
            <div className="projectContainer">

                <div className="projectDescription">
                <div className="projectDescriptionText" id="bunnyText">
                    <h2>Bunny Bar</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, vero. Dolorem in ratione amet. Debitis neque quaerat labore amet odit nam ad vel impedit placeat porro, ullam omnis cupiditate possimus?</p>
                </div>
                </div>
                <div className="projectImageContainerMovil" id="bunnyImageContainer" >
                <img id="bunnyImage" src={require("../Utils/Images/BunnyBar.png")}></img>
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;