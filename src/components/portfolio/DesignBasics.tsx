import './DesignBasics.css';

export default function DesignBasics() {
    const iframeStyle = {
        border: "1px solid rgba(0, 0, 0, 0.1)"
    }
    
    return (
        <div className="container">
            <div className="DesignBasics">
                <div className="content">
                    <h2>Graphic design project</h2>
                    <h3>Objective & final deliverables (solo project)</h3>
                    <ul>
                        <li>Redesign the book titled, “Graphic Design: The New Basics” by Ellen Lupton & Jennifer Cole Phillips</li>
                        <li>Front cover</li>
                        <li>Back cover</li>
                        <li>Table of contents</li>
                        <li>Additional digital views that I could provide to the customer</li>
                    </ul>
                    <h3>Timeline</h3>
                    <ul>
                        <li>4 days</li>
                    </ul>
                    <h3>Tools</h3>
                    <ul>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>Adobe Dimension</li>
                        </ul>
                    <h3>Challenges</h3>
                    <p>I taught myself Adobe Dimension, used the program in conjunction with my project, and then submitted my final project all in the same day. </p>
                    <h3>Final product</h3>
                    <iframe tabIndex={160} style={iframeStyle} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F6xkeHx3M2RkNlSPHUoNSUM%2FGraphic-Design-Final%3Fnode-id%3D0%253A1" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}