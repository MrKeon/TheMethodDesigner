import NavList from "./NavList";
import './Sitemap.css';

export default function Sitemap() {
    return (
      <div className="Sitemap">
        <h1>Site Map</h1>
        <NavList ascendingOrder={ true } />
      </div>
    );
  }
  