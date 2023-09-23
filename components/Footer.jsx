import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-blue-800 mt-7 text-white py-6">
      <div className="flex flex-row justify-center text-center gap-4 items-center">
        <div className='text-center'>
        <h3 className="text-sm lg:text-lg font-mono">Developed by Abdul Malik 👍</h3>
        </div>
        <div className="flex space-x-4">
          <a href="https://twitter.com/abdul_malik900" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-gray-300 hover:text-gray-400" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100023679276773" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-gray-300 hover:text-gray-400" />
          </a>
          <a href="https://www.linkedin.com/in/abdul-malik-8304b8221/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-300 hover:text-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
