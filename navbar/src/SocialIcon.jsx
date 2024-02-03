import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
const SocialIcon = ({ id }) => {
  const getSocialIcon = (id) => {
    switch (id) {
      case 1:
        return <FaFacebook />;
      case 2:
        return <FaBehance />;
      case 3:
        return <FaLinkedin />;
      case 4:
        return <FaTwitter />;
    }
  };
  return <>{getSocialIcon(id)}</>;
};
export default SocialIcon;
