import React, { useState } from 'react';
import PromptTemplate from './PromptTemplate';

interface Step {
  title: string;
  description: string;
  prompt?: string;
  tool?: string;
  params?: string;
}

interface AITutorialProps {
  moduleName: string;
  capabilityAnchor: string;
  tools: string[];
  steps: Step[];
  validationStandard: string;
}

const AITutorial: React.FC<AITutorialProps> = ({ 
  moduleName,
  capabilityAnchor,
  tools,
  steps,
  validationStandard
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 mb-8">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <span className="text-2xl mr-3">🤖</span>
          <h3 className="text-xl font-bold text-blue-800">AI 落地教学</h3>
        </div>
        <span className="text-gray-600">
          {isExpanded ? '收起 ▲' : '展开 ▼'}
        </span>
      </div>
      
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-blue-200">
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">能力锚点：</h4>
            <p className="text-gray-800">{capabilityAnchor}</p>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold text-gray-700 mb-2">适配工具：</h4>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span 
                  key={index}
                  className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-200">
                <h5 className="font-bold text-gray-800 mb-2">
                  步骤 {index + 1}: {step.title}
                </h5>
                <p className="text-gray-700 mb-3">{step.description}</p>
                
                {step.params && (
                  <div className="bg-gray-50 rounded-lg p-3 mb-3">
                    <h6 className="font-semibold text-gray-700 mb-1">参数预设：</h6>
                    <code className="text-sm text-gray-800 bg-white p-1 rounded">{step.params}</code>
                  </div>
                )}
                
                {step.prompt && (
                  <PromptTemplate
                    title={`${step.title} Prompt`}
                    prompt={step.prompt}
                    tool={step.tool}
                  />
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
            <h4 className="font-bold text-green-800 mb-2 flex items-center">
              <span className="mr-2">✅</span>
              成果校验标准
            </h4>
            <p className="text-green-700">{validationStandard}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AITutorial;