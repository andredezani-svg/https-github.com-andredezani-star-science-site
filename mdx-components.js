const components = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-dark mb-6 mt-8">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold text-dark mb-4 mt-8">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-bold text-dark mb-3 mt-6">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-gray-600 leading-relaxed mb-4">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="space-y-2 mb-4 list-disc list-inside text-gray-600">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="space-y-2 mb-4 list-decimal list-inside text-gray-600">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="text-gray-600">{children}</li>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-dark">{children}</strong>
  ),
  a: ({ children, href }) => (
    <a href={href} className="text-turquoise font-medium hover:underline">{children}</a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-turquoise pl-4 italic text-gray-600 mb-4">{children}</blockquote>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto mb-6">
      <table className="w-full border-collapse border border-gray-border">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-gray-border bg-gray-light px-4 py-3 text-left font-bold text-dark text-sm">{children}</th>
  ),
  td: ({ children }) => (
    <td className="border border-gray-border px-4 py-3 text-gray-600 text-sm">{children}</td>
  ),
  code: ({ children }) => (
    <code className="bg-gray-light text-sm px-1.5 py-0.5 rounded text-dark font-mono">{children}</code>
  ),
  pre: ({ children }) => (
    <pre className="bg-dark text-gray-200 rounded-xl p-4 overflow-x-auto mb-6 text-sm">{children}</pre>
  ),
  hr: () => <hr className="border-gray-border my-8" />,
}

export function useMDXComponents() {
  return components
}
