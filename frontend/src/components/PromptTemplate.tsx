import React, { useState } from 'react';

interface PromptTemplateProps {
  title: string;
  description?: string;
  prompt: string;
  tool?: string;
  category?: string;
}

const PromptTemplate: React.FC<PromptTemplateProps> = ({ 
  title, 
  description, 
  prompt, 
  tool,
  category 
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = prompt;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <span className="text-2xl mr-2">📋</span>
          <h4 className="text-lg font-bold text-gray-800">{title}</h4>
        </div>
        <button
          onClick={copyToClipboard}
          className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 flex items-center"
        >
          {copied ? '✓ 已复制' : '复制'}
        </button>
      </div>
      
      {description && (
        <p className="text-sm text-gray-600 mb-3">{description}</p>
      )}
      
      {(tool || category) && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tool && (
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
              {tool}
            </span>
          )}
          {category && (
            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
          )}
        </div>
      )}
      
      <div className="bg-white border border-gray-300 rounded-lg p-4 overflow-x-auto">
        <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">
          {prompt}
        </pre>
      </div>
    </div>
  );
};

export default PromptTemplate;