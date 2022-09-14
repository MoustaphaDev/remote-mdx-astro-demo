import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import ExampleComponent from './ExampleComponent'

const components = { ExampleComponent }

interface Props {
  mdxSource: MDXRemoteSerializeResult
}

export default function ExamplePage({ mdxSource }: Props) {
  return (
    <div>
      <MDXRemote {...mdxSource} components={components} />
    </div>
  )
}
