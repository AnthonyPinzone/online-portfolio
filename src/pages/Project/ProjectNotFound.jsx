import { Link } from "react-router-dom";
import { FaRegHandPointDown } from "react-icons/fa";
import { MdKeyboardReturn } from "react-icons/md";
import './ProjectNotFound.scss';

export default function ProjectNotFound({ projectSlug }) {

    return (
        <div className="project-not-found-page">
            <div className="container">
                <h1>Sorry!</h1>
                <p>A project by the name of <em className="fancy">{projectSlug}</em> doesn't seem to exist.</p>

                <div className="button-group">
                    <Link to="/" className="button" state={{ scrollTarget: 'projects' }}>
                        <MdKeyboardReturn /> Return to Projects
                    </Link>
                    <span className="button-separator">or</span>
                    <div className="fake-button">Contact Me Below <FaRegHandPointDown /></div>
                </div>
            </div>
        </div>
    )
}