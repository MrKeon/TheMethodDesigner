import { Container, Nav, Navbar } from "react-bootstrap";

interface INavProps {
  ascendingOrder: Boolean
}

interface INavListProps {
  ascendingOrder: Boolean
}

interface IPage {
  endpoint: string
  name: string
}

let pages: IPage[] = [
  {
      endpoint: '/',
      name: 'Home'
  },
  {
      endpoint: '/about',
      name: 'About'
  },
  {
      endpoint: '/portfolio',
      name: 'Portfolio'
  },
  {
      endpoint: '/gallery',
      name: 'Gallery'
  },
  {
      endpoint: '/contact',
      name: 'Contact'
  }
]

function Navigationbar({ ascendingOrder }: INavProps) {
  return (
    <div>
      <Navbar expand="sm">
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>{
             NavList({ascendingOrder})
            }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

interface IPage {
    endpoint: string
    name: string
}

const NavList = ({ ascendingOrder }: INavListProps) => {
  let list = ascendingOrder ? pages : pages.slice().reverse();
  let index = 0;
  return  list.map(item => (
              <Nav.Link key={index++} href={item.endpoint}>{item.name}</Nav.Link>
          ));
}

export default Navigationbar;