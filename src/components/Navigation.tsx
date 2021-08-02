import {
    Link
  } from "react-router-dom";
import NavList from "./NavList";

interface INavProps {
    ascendingOrder: Boolean
}

  function Navigation({ ascendingOrder }: INavProps) {
    return (
            <div>
            <nav>
                <ul>
                    <NavList ascendingOrder={ ascendingOrder } />
                </ul>
            </nav>
            </div>
      );
}

export default Navigation;