import { social } from "../data";
import SocialIcon from "./SocialIcon";

const SocialLinks = () => {
  return (
    <ul className="social-icons">
      {social.map((socialLink) => {
        return (
          <li key={socialLink.id}>
            <a href={socialLink.url} target="_blank">
              <SocialIcon id={socialLink.id} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default SocialLinks;
