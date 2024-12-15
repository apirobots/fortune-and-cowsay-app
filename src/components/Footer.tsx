export default function Footer() {
    return (
      <footer className="w-full py-4 mt-auto text-center text-sm text-gray-600">
        Powered by{' '}
        <a 
          href="https://apirobots.pro" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          APIRobots
        </a>
      </footer>
    );
  }