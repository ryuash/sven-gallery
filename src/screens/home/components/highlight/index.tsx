import React from "react";
import hljs from "highlight.js";
import 'highlight.js/styles/github-dark-dimmed.css';
// import 'highlight.js/styles/tomorrow-night-blue.css';

interface HighlighterProps {
  content: string;
  language?: string;
}

export default function Highlighter({
  content,
  language,
}: HighlighterProps): JSX.Element {
  const highlighted = language
    ? hljs.highlight(language, content)
    : hljs.highlightAuto(content);

  return (
    <pre className="hljs">
      <code dangerouslySetInnerHTML={{ __html: highlighted.value }} />
    </pre>
  );
}

