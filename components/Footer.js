import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 left-0 right-0 flex items-center justify-center pb-4 space-x-4">
      <a href="https://www.facebook.com/farrellfitness17/">
        <FontAwesomeIcon
          className="w-6 h-6 cursor-pointer transition-all hover:text-yellow-700"
          icon={["fab", "facebook"]}
        />
      </a>
      <a href="https://www.instagram.com/farrellfitness17/">
        <FontAwesomeIcon
          className="w-6 h-6 cursor-pointer transition-all hover:text-yellow-700"
          icon={["fab", "instagram"]}
        />
      </a>
    </footer>
  );
};

export default Footer;
