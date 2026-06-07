import type { MDXComponents } from 'mdx/types'

const overrides: MDXComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 style={{ color: "var(--text)", fontWeight: 300, fontSize: "1.875rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--border)", paddingBottom: "0.75rem", fontFamily: "inherit" }} {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 style={{ color: "var(--text)", fontWeight: 300, fontSize: "1.25rem", marginTop: "2rem", marginBottom: "0.75rem", fontFamily: "inherit" }} {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 style={{ color: "var(--text)", fontWeight: 500, fontSize: "1rem", marginTop: "1.5rem", marginBottom: "0.5rem", fontFamily: "inherit" }} {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: "1.75rem", marginBottom: "1rem", fontFamily: "inherit" }} {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "4px", transition: "color 0.15s" }} {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul style={{ color: "var(--muted)", fontSize: "0.875rem", marginBottom: "1rem", paddingLeft: "1.25rem", listStyleType: "disc" }} {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol style={{ color: "var(--muted)", fontSize: "0.875rem", marginBottom: "1rem", paddingLeft: "1.25rem", listStyleType: "decimal" }} {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li style={{ lineHeight: "1.75rem", color: "var(--muted)" }} {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote style={{ borderLeft: "2px solid var(--accent)", paddingLeft: "1rem", margin: "1rem 0", color: "var(--muted)", fontStyle: "italic", fontSize: "0.875rem" }} {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code style={{ color: "var(--accent)", background: "var(--surface)", borderRadius: "4px", padding: "2px 6px", fontSize: "0.8em", fontFamily: "monospace" }} {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "6px", padding: "1rem", overflowX: "auto", fontSize: "0.75rem", marginBottom: "1rem", fontFamily: "monospace", color: "var(--text)" }} {...props} />
  ),
  hr: () => (
    <hr style={{ borderColor: "var(--border)", margin: "2rem 0" }} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong style={{ color: "var(--text)", fontWeight: 600 }} {...props} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div style={{ overflowX: "auto", marginBottom: "1rem" }}>
      <table style={{ width: "100%", fontSize: "0.875rem", borderCollapse: "collapse" }} {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th style={{ textAlign: "left", padding: "0.5rem 0.75rem", border: "1px solid var(--border)", color: "var(--accent)", fontFamily: "monospace", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }} {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td style={{ padding: "0.5rem 0.75rem", border: "1px solid var(--border)", color: "var(--muted)", fontSize: "0.75rem" }} {...props} />
  ),
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components, ...overrides }
}
