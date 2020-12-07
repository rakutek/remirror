import React from 'react'
import { BoldExtension } from 'remirror/extension/bold'
import { RemirrorProvider, useManager, useRemirror } from 'remirror/react'

const Button = () => {
  const { active, commands } = useRemirror({ autoUpdate: true })

  return (
    <>
      <button
        onClick={() => commands.toggleBold()}
        style={{ fontWeight: active.bold() ? 'bold' : undefined }}
      >
        Bold
      </button>
    </>
  )
}

const Editor = () => {
  const { getRootProps } = useRemirror()

  return <div {...getRootProps()} />
}

const EditorWrapper = () => {
  const manager = useManager(() => [new BoldExtension()])

  return (
    <RemirrorProvider manager={manager}>
      <Editor />
      <Button />
    </RemirrorProvider>
  )
}

export default function Top() {
  return <EditorWrapper />
}
