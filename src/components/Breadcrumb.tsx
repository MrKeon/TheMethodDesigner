import { useRouteMatch } from "react-router"
import { NavLink } from "react-router-dom";
import './Breadcrumb.css';

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
        crumbs.concat(`/${link}`);
        navLinks.push(<NavLink to={crumbs}>{`${link}`}</NavLink>)
        navLinks.push(" / ");
    });

    navLinks.pop();

    return(
        <div>
            { [...navLinks ]}
        </div>    
    )
}