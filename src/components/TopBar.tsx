import { Mail, Phone, Github, Network } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-blue-600 text-white px-6 py-3 shadow-md w-full">
      <div className="flex justify-between items-center w-full">
        {/* Left-side title */}
        <div className="text-2xl font-bold text-red-400">RayBestStar</div>

        {/* Right-side links and contact info */}
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/HankChoose/raybeststar"
            target="_blank"
            className="flex items-center space-x-1 text-red-200 hover:text-white hover:underline"
          >
            <Github size={16} />
            <span>Get Code from GitHub</span>
          </a>
          <a
            href="/architecture.html"
            target="_blank"
            className="flex items-center space-x-1 text-red-200 hover:text-white hover:underline"
          >
            <Network size={16} />
            <span>View Program Architecture</span>
          </a>
          <div className="flex items-center space-x-1 text-white">
            <Mail size={16} />
            <span>hankchenv@gmail.com</span>
          </div>
          <div className="flex items-center space-x-1 text-white">
            <Phone size={16} />
            <span>(587)936-1806</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
