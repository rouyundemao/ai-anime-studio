import React from 'react';

interface Update {
  version: string;
  date: string;
  changes: string[];
}

interface UpdateLogProps {
  updates: Update[];
}

const UpdateLog: React.FC<UpdateLogProps> = ({ updates }) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 mb-8">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <span className="text-2xl mr-2">📝</span>
        更新日志
      </h3>
      
      <div className="space-y-4">
        {updates.map((update, index) => (
          <div key={index} className="border-l-4 border-primary-500 pl-4 py-2">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-primary-700">{update.version}</span>
              <span className="text-sm text-gray-600">{update.date}</span>
            </div>
            <ul className="space-y-1">
              {update.changes.map((change, changeIndex) => (
                <li key={changeIndex} className="text-gray-700 text-sm">
                  • {change}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateLog;