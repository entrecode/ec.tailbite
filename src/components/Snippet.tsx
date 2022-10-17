import React, { useState } from 'react';

export default function Snippet({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div
      className="group cursor-pointer relative"
      onClick={() => {
        navigator.clipboard.writeText(value);
        setCopied(true);
      }}
      onMouseEnter={() => setCopied(false)}
    >
      <span className="hidden group-hover:block absolute text-xs bg-gray-200 p-2 rounded-full">
        {copied ? 'kopiert!' : 'klicken zum kopieren'}
      </span>
      <pre className="overflow-auto">{value}</pre>
    </div>
  );
}

export function SnippetExample() {
  return <Snippet value={`Das ist ein Snippet, es kann einfach kopiert werden!`} />;
}
