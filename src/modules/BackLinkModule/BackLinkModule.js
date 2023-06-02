import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import './BackLinkModule.scss';

function BackLinkModule(props) {
    return (
        <Link className="btn btn-primary back-btn-link mb-4" to={props.link}>
            <FiArrowLeft className=" back-btn-icon"></FiArrowLeft>
            {props.text}
        </Link>
    );
}

export default BackLinkModule;