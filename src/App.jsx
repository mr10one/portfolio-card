import { useState } from 'react';
import profileImage from './assets/profile_me.jfif';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('marouanewakrim05@gmail.com');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  
  const bgMain = isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-gray-200';
  const bgCard = isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100';
  const textMain = isDark ? 'text-white' : 'text-gray-900';
  const textSub = isDark ? 'text-gray-400' : 'text-gray-500';
  const btnToggle = isDark ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200';
  const bgHeader = isDark ? 'bg-gradient-to-r from-blue-800 to-indigo-800' : 'bg-gradient-to-r from-blue-600 to-indigo-600';
  const borderFooter = isDark ? 'border-gray-700' : 'border-gray-100';
  const btnSocial = isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-800 hover:text-white';

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${bgMain}`}>
      
      {showToast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold z-50 animate-bounce">
          ✅ Email copied to clipboard!
        </div>
      )}

      <div className={`rounded-3xl shadow-xl w-full max-w-md p-8 text-center border relative overflow-hidden transition-colors duration-300 ${bgCard}`}>
        
        <button 
            onClick={() => setIsDark(!isDark)}
            className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md hover:bg-purple-700 transition-all z-20"
        >
        {isDark ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
        </button>

        <div className={`absolute top-0 left-0 w-full h-32 ${bgHeader}`}></div>

        <div className="relative w-32 h-32 mx-auto mb-6 z-10">
          <img 
            src={profileImage}
            alt="Profile" 
            className="w-full h-full rounded-full border-4 border-white object-cover shadow-lg bg-white"
          />
          <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-white rounded-full" title="Available for work"></div>
        </div>

        <h1 className={`text-2xl font-bold mb-1 ${textMain}`}>Marouane</h1>
        <p className="text-blue-500 font-semibold mb-2">Full Stack Developer</p>
        <p className={`text-sm mb-6 flex items-center justify-center gap-2 ${textSub}`}>
          📍 Casablanca, Morocco
        </p>

        <div className="space-y-3 mb-6">
          <button 
            onClick={copyEmail}
            className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
          >
            ✉️ Copy Email
          </button>
          
          <a href="https://wa.me/212704699712" className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md active:scale-95">
            📱 WhatsApp
          </a>
        </div>

        <div className={`flex justify-center gap-4 pt-4 border-t ${borderFooter}`}>
          <a href="https://www.linkedin.com/in/marouane-wakrim" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full transition-all duration-200 ${btnSocial}`}>
            in
          </a>
          <a href="https://github.com/mr10one" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full transition-all duration-200 ${btnSocial}`}>
            GH
          </a>
        </div>

      </div>
    </div>
  );
}

export default App;