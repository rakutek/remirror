import React from 'react'
import { BoldExtension } from 'remirror/extension/bold'
import { ItalicExtension } from 'remirror/extension/italic'
import { UnderlineExtension } from 'remirror/extension/underline'
import { CorePreset } from 'remirror/preset/core'
import { RemirrorProvider, useManager, useRemirror } from 'remirror/react'

const Menu = () => {
  const { commands, active } = useRemirror({ autoUpdate: true })

  return (
    <div>
      <button
        onClick={() => commands.toggleBold()}
        style={{ fontWeight: active.bold() ? 'bold' : undefined }}
      >
        B
      </button>
      <button
        onClick={() => commands.toggleItalic()}
        style={{ fontWeight: active.italic() ? 'bold' : undefined }}
      >
        I
      </button>
      <button
        onClick={() => commands.toggleUnderline()}
        style={{ fontWeight: active.underline() ? 'bold' : undefined }}
      >
        U
      </button>
    </div>
  )
}

const TextEditor = () => {
  const { getRootProps } = useRemirror()

  return <div {...getRootProps()} />
}

const EditorWrapper = () => {
  const manager = useManager([
    new CorePreset({}),
    new BoldExtension({}),
    new ItalicExtension({}),
    new UnderlineExtension({})
  ])

  return (
    <RemirrorProvider manager={manager}>
      <div>
        <Menu />
        <TextEditor />
      </div>
    </RemirrorProvider>
  )
}

export default function Editor() {
  return <EditorWrapper />
}
