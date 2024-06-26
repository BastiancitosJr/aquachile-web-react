import { Avatar, Dropdown, Navbar as FlowbiteNavbar } from "flowbite-react";
import aquaChileLogoDark from "../../assets/img/aquachile-logo-dark.webp";
import aquaChileLogoOrange from "../../assets/img/aquachile-logo-orange.webp";
import { homePath } from "../router/routes-paths";

const navbarOptions = [
  {
    path: homePath,
    title: "Home",
  },
];

const mainLogo = {
  img: aquaChileLogoDark,
  imgAlt: "Aquachile Logo",
  href: homePath,
};

const userInformation = {
  name: "Linea 1",
  img: aquaChileLogoOrange,
  imgAlt: "Aquachile Logo",
};

const signOutText = "Cerrar Sesión";

const Navbar = () => {
  return (
    <FlowbiteNavbar fluid className="bg-aqcl-500">
      <FlowbiteNavbar.Brand href={mainLogo.href}>
        <img src={mainLogo.img} className="w-28 py-1" alt={mainLogo.imgAlt} />
      </FlowbiteNavbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              className="border-2 p-0.5 border-aqclOrange-700 rounded-full"
              alt={userInformation.imgAlt}
              img={userInformation.img}
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="font-bold uppercase text-wrap">
              {userInformation.name}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>{signOutText}</Dropdown.Item>
        </Dropdown>
        <FlowbiteNavbar.Toggle />
      </div>
      <FlowbiteNavbar.Collapse>
        {navbarOptions.map(({ path, title }) => (
          <FlowbiteNavbar.Link
            key={path + title}
            href={path}
            className="text-lg text-white"
          >
            {title}
          </FlowbiteNavbar.Link>
        ))}
      </FlowbiteNavbar.Collapse>
    </FlowbiteNavbar>
  );
};

export default Navbar;
