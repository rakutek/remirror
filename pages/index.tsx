import React from 'react'
import { BoldExtension } from 'remirror/extension/bold'
import { RemirrorProvider, useManager } from 'remirror/react'

import Editor from './editor'


const EditorWrapper = () => {
  const manager = useManager(() => [new BoldExtension()])

  return (
    <RemirrorProvider manager={manager}>
      <Editor />

    </RemirrorProvider>
  )
}

export default function Top() {
  return <EditorWrapper />
}
