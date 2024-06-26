import { Avatar, Dropdown, Navbar as FlowbiteNavbar } from "flowbite-react";
import aquaChileLogoDark from "../../assets/img/aquachile-logo-dark.webp";
import aquaChileLogoOrange from "../../assets/img/aquachile-logo-orange.webp";
import { homePath } from "../router/routes-paths";
import useUserInformation from "../../auth/hooks/useUserInformation";
import useLogout from "../../auth/hooks/useLogout";

const navbarOptions = [
  {
    path: homePath,
    title: "Inicio",
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
  const { role: roleName } = useUserInformation();
  const logout = useLogout();

  const handleLogout = () => {
    logout();
  };

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
            <span className="font-bold uppercase text-wrap">{roleName}</span>
          </Dropdown.Header>
          <Dropdown.Item onClick={handleLogout}>{signOutText}</Dropdown.Item>
        </Dropdown>
        <FlowbiteNavbar.Toggle />
      </div>
      <FlowbiteNavbar.Collapse>
        {navbarOptions.map(({ path, title }) => (
          <FlowbiteNavbar.Link
            key={path + title}
            href={path}
            className="text-lg text-white hover:!text-aqclOrange-600 uppercase"
          >
            {title}
          </FlowbiteNavbar.Link>
        ))}
      </FlowbiteNavbar.Collapse>
    </FlowbiteNavbar>
  );
};

export default Navbar;
