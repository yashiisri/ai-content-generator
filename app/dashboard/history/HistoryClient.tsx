'use client';

import React from 'react';
import { Copy } from 'lucide-react';

 const templates = [
  { name: 'Blog Title', icon: 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png', slug: 'generate-blog-title' },
  { name: 'Blog Content', icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png', slug: 'blog-content-generation' },
  { name: 'Blog Topic Ideas', icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png', slug: 'blog-topic-idea' },
  { name: 'Youtube SEO Title', icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png', slug: 'youtube-seo-title' },
  { name: 'Youtube Description', icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png', slug: 'youtube-description' },
  { name: 'Youtube Tags', icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png', slug: 'youtube-tag' },
  { name: 'Rewrite Article (Plagiarism Free)', icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png', slug: 'rewrite-article' },
  { name: 'Text Improver', icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png', slug: 'text-improver' },
  { name: 'Add Emojis to Text', icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png', slug: 'add-emoji-to-text' },
  { name: 'Instagram Post Generator', icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png', slug: 'instagram-post-generator' },
  { name: 'Instagram Hash Tag Generator', icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png', slug: 'instagram-hash-tag-generator' },
  { name: 'Instagram Post/Reel Idea', icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png', slug: 'instagram-post-idea-generator' },
  { name: 'English Grammer Check', icon: 'https://cdn-icons-png.flaticon.com/128/12596/12596700.png', slug: 'english-grammer-checker' },
  { name: 'Write Code', icon: 'https://cdn-icons-png.flaticon.com/128/6062/6062646.png', slug: 'write-code' },
  { name: 'Explain Code', icon: 'https://cdn-icons-png.flaticon.com/128/8488/8488751.png', slug: 'explain-code' },
  { name: 'Code Bug Detector', icon: 'https://cdn-icons-png.flaticon.com/128/4426/4426267.png', slug: 'code-bug-detector' },
  { name: 'Tagline Generator', icon: 'https://cdn-icons-png.flaticon.com/128/2178/2178616.png', slug: 'tagline-generator' },
  { name: 'Product Description', icon: 'https://cdn-icons-png.flaticon.com/128/679/679922.png', slug: 'product-description' },
];

export type HISTORY = {
  id: number;
  formData: string;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string;
  createdAt: string | null;
};

const HistoryClient = ({ historyData }: { historyData: HISTORY[] }) => {
  const countWords = (response: string | null) => {
    if (!response) return 0;
    try {
      const parsed = JSON.parse(response);
      const text = JSON.stringify(parsed, null, 0).replace(/[{}\[\]"]/g, '');
      return text.split(/\s+/).filter(Boolean).length;
    } catch {
      return response.split(/\s+/).filter(Boolean).length;
    }
  };

  const formatAIResponse = (response: string | null) => {
    if (!response) return 'No response';
    try {
      const parsed = JSON.parse(response);
      return JSON.stringify(parsed, null, 2);
    } catch {
      return response;
    }
  };

  const getTemplateDetails = (slug: string) => {
    return templates.find((template) => template.slug === slug) || { name: slug, icon: '📄' };
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Copied!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">History</h1>
      <p className="text-gray-600 mb-6">Search your previously generated AI content</p>

      <div className="bg-white rounded-lg shadow overflow-x-auto w-4/5">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-3 text-left text-sm font-bold text-gray-600 w-1/4">TEMPLATE</th>
              <th className="p-3 text-left text-sm font-bold text-gray-600 w-1/3">AI RESP</th>
              <th className="p-3 text-left text-sm font-bold text-gray-600 w-1/6">DATE</th>
              <th className="p-3 text-left text-sm font-bold text-gray-600 w-1/12">WORDS</th>
              <th className="p-3 text-left text-sm font-bold text-gray-600 w-1/12">COPY</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((item) => {
              const templateDetails = getTemplateDetails(item.templateSlug);
              const formattedResponse = formatAIResponse(item.aiResponse);
              return (
                <tr key={item.id} className="border-t">
                  <td className="p-3 w-1/4">
                    <span className="flex items-center">
                      <img src={templateDetails.icon} alt="icon" className="w-5 h-5 mr-2" />
                      <span className="text-blue-600">{templateDetails.name}</span>
                    </span>
                  </td>
                  <td className="p-3 text-gray-800 w-1/3">
                    <pre className="truncate max-w-full whitespace-pre-wrap font-mono text-sm">
                      {formattedResponse}
                    </pre>
                  </td>
                  <td className="p-3 text-gray-600 w-1/6">{item.createdAt}</td>
                  <td className="p-3 text-gray-600 w-1/12">{countWords(item.aiResponse)}</td>
                  <td className="p-3 w-1/12">
                    <button onClick={() => handleCopy(formattedResponse)} className="hover:text-blue-600">
                      <Copy size={18} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryClient;
