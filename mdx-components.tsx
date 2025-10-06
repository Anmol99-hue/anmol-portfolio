import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="mt-2 text-3xl font-bold" {...props} />,
    h2: (props) => <h2 className="mt-8 text-xl font-semibold" {...props} />,
    p:  (props) => <p className="mt-3 text-zinc-700" {...props} />,
    ul: (props) => <ul className="mt-3 list-disc pl-5 text-zinc-700" {...props} />,
    code: (props) => (
      <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm" {...props} />
    ),
    ...components,
  };
}