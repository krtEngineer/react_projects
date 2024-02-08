import { links } from "../data";

const Links = () => {
  return (
    <ul className="links">
      {links.map((link) => {
        return (
          <li key={link.id}>
            <a href="#" id={link.id}>
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default Links;
