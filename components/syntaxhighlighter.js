import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "packages/prism-react-renderer/src/themes/nightOwlLight";

const SyntaxHighlighter = ({ children }) => {
  const code = children.props.children;

  return (
    <Highlight {...defaultProps} code={code}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {tokens.slice(0, -1).map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default SyntaxHighlighter;