import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import MediumEditor from 'medium-editor';

import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import LocalLoader from './LocalLoader';
import { classNames } from '../util/classNames';

function ReactMediumEditor(props: any) {
  const { className, value, onChange, options, onBlur } = props;
  const editorRef = useRef<any>(null);
  const containerRef = useRef<any>(null);
  const [pending, setPending] = React.useState(true);
  const changeListener = useCallback(() => onChange?.(containerRef.current.innerHTML), [onChange]);
  useEffect(() => {
    editorRef.current?.saveSelection();
    editorRef.current?.setContent(value, 0);
    editorRef.current?.restoreSelection();
  }, [value]);

  useLayoutEffect(() => {
    const el = containerRef.current;
    const editor = new MediumEditor(el, options);
    editor.subscribe('editableInput', changeListener);
    editorRef.current = editor;
    setPending(false);
    return () => {
      editorRef.current.unsubscribe('editableInput', changeListener);
      editorRef.current?.destroy();
      editorRef.current = null;
    };
  }, [options]);

  return (
    <>
      {pending && <LocalLoader />}
      <div
        className={classNames(className, 'prose dark:prose-invert')}
        // dangerouslySetInnerHTML={{ __html: value }}
        onBlur={() => onBlur?.()}
        ref={containerRef}
      />
    </>
  );
}

export default ReactMediumEditor;
