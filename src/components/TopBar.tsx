import { Mail, Phone, Github, Network } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-blue-600 text-white px-6 py-3 shadow-md w-full">
      <div className="flex justify-between items-center w-full">
        {/* 左侧标题 */}
        <div className="text-2xl font-bold text-white">RayBestStar</div>

        {/* 右侧链接和联系方式 */}
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/HankChoose/raybeststar"
            target="_blank"
            className="flex items-center space-x-1 text-red-200 hover:underline"
          >
            <Github size={16} />
            <span>Get Code from GitHub</span>
          </a>
          <a
            href="https://github.com/HankChoose/raybeststar#architecture"
            target="_blank"
            className="flex items-center space-x-1 text-red-200 hover:underline"
          >
            <Network size={16} />
            <span>View Source Architecture</span>
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
