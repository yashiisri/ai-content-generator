


import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
interface props {
  aiOutput?: string;
}

function OutputSection({aiOutput}:props) {
  const editorRef = useRef<Editor>(null);

  useEffect(()=>{
    const editorInstance=editorRef.current?.getInstance()
    editorInstance.setMarkdown(aiOutput);
  },[aiOutput])

  return (
    <div className="bg-white shadow-lg border">
      <div className="flex justify-between items-center p-5 rounded-lg">
        <h2 className='font-medium text-lg'>Your Result</h2>
        <Button
          onClick={() => {
            const content = editorRef.current?.getInstance().getMarkdown();
            navigator.clipboard.writeText(content);
          }}
        >
          <Copy className="mr-2" /> Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here!"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() =>
          console.log(editorRef.current?.getInstance().getMarkdown())
        }
      />
    </div>
  );
}

export default OutputSection;
