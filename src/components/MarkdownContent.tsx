
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export default function MarkdownContent({ content, className = '' }: MarkdownContentProps) {
  return (
    <div className={`prose prose-lg max-w-none dark:prose-invert ${className}`}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]} 
        rehypePlugins={[rehypeRaw]}
        components={{
          table: ({node, ...props}) => (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full divide-y divide-gray-300 border border-gray-300" {...props} />
            </div>
          ),
          thead: ({node, ...props}) => (
            <thead className="bg-gray-100 dark:bg-gray-700" {...props} />
          ),
          th: ({node, ...props}) => (
            <th className="py-3 px-4 text-sm font-semibold text-left text-gray-900 dark:text-gray-100 border border-gray-300" {...props} />
          ),
          td: ({node, ...props}) => (
            <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300 border border-gray-300" {...props} />
          ),
          a: ({node, ...props}) => (
            <a className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline" {...props} />
          ),
          h1: ({node, ...props}) => (
            <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100" {...props} />
          ),
          h2: ({node, ...props}) => (
            <h2 className="text-3xl font-bold mt-6 mb-3 text-gray-900 dark:text-gray-100 border-b-2 border-blue-500 pb-2" {...props} />
          ),
          h3: ({node, ...props}) => (
            <h3 className="text-2xl font-bold mt-5 mb-2 text-gray-900 dark:text-gray-100" {...props} />
          ),
          h4: ({node, ...props}) => (
            <h4 className="text-xl font-bold mt-4 mb-2 text-gray-800 dark:text-gray-200" {...props} />
          ),
          p: ({node, ...props}) => (
            <p className="my-4 text-gray-700 dark:text-gray-300 leading-relaxed" {...props} />
          ),
          ul: ({node, ...props}) => (
            <ul className="list-disc pl-6 my-4 text-gray-700 dark:text-gray-300" {...props} />
          ),
          ol: ({node, ...props}) => (
            <ol className="list-decimal pl-6 my-4 text-gray-700 dark:text-gray-300" {...props} />
          ),
          li: ({node, ...props}) => (
            <li className="mb-2" {...props} />
          ),
          blockquote: ({node, ...props}) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 py-2 pr-4" {...props} />
          ),
          code: ({node, inline, ...props}: any) => (
            inline 
              ? <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-gray-800 dark:text-gray-200" {...props} />
              : <code className="block bg-gray-900 dark:bg-gray-950 p-4 rounded text-sm font-mono overflow-x-auto my-4 text-gray-100" {...props} />
          ),
          pre: ({node, ...props}) => (
            <pre className="bg-gray-900 dark:bg-gray-950 p-4 rounded text-sm font-mono overflow-x-auto my-4" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
