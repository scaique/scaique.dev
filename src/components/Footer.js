import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className="bg-gray-900 py-6 text-center text-terciario/50">
            <div>
                {/* <p className="text-md text-terciario/50">Contato</p> */}
                <div className="flex justify-center gap-3">
                    <a href="https://www.linkedin.com/in/sergio-caique-da-silva" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 hover:text-terciario transition-colors duration-200" />
                    </a>
                    <a href="https://github.com/scaique" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} className="w-6 h-6 hover:text-terciario transition-colors duration-200" />
                    </a>
                    <a href="mailto:scaique080@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="E-mail">
                        <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 hover:text-terciario transition-colors duration-200" />
                    </a>
                    {/* <a href="https://x.com/scaique_dev/" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
                        <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6 hover:text-terciario transition-colors duration-200" />
                    </a> */}
                    <a href="https://instagram.com/scaique.blue/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 transition-colors duration-200" />
                    </a>
                </div>
            </div>
            <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Caique Silva</p>
        </footer>
    );
}