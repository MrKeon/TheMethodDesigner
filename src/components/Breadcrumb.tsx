import { useRouteMatch } from "react-router"
import { NavLink } from "react-router-dom";
import './Breadcrumb.css';

const BREADCRUMBS: Record<string,string> = {
    "simply-sweet-stems": "Simply Sweet Stems project",
    "pellegrino": "Pellegrino project",
    "doordash": "DoorDash project",
    "designbasics": "Graphic Design project",
    "portfolio": "Portfolio"
}

export default function Breadcrumb() {
    let match = useRouteMatch();
    return (
        <div>
            <div className="Breadcrumb">
                {formatBreadcrumbs(match.url)}
            </div>
        </div>
    )
}

function formatBreadcrumbs(url: string) {
    const links = url.trim().split('/').filter(el => el != '');
    let crumbs = "";
    let navLinks: any = [];

    links.forEach(link => {
        crumbs = crumbs.concat(`/${link}`);
        navLinks.push(<NavLink to={crumbs}>{`${BREADCRUMBS[link]}`}</NavLink>)
        navLinks.push(" / ");
    });

    navLinks.pop();

    return(
        <div>
            { [...navLinks ]}
        </div>    
    )
}