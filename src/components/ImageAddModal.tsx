import useFileDrag from '../hooks/useFileDrag';
import getFileUrl from '../util/fileUrl';
import Button from './Button';
import Modal from './Modal';
import { useState } from 'react';
import Spinner from './Spinner';

export type WithSrc = {
  src: string;
} & Record<string, unknown>;

function ImageAddModal({
  open,
  onClose,
  onImageAdd,
}: {
  open: boolean;
  onClose: () => void;
  onImageAdd: (files: File[]) => void;
}) {
  const [urls, setUrls] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [pending, setPending] = useState(false);
  async function handleAdd(files: FileList) {
    const _files = Array.from(files);
    const _urls = await Promise.all(_files.map((file) => getFileUrl(file)));
    setUrls(_urls);
    setFiles(_files);
  }
  const { isActive, dragProps } = useFileDrag({
    onDrop: (e) => handleAdd(e.dataTransfer.files),
  });
  return (
    <Modal open={open} className="w-64 space-y-4">
      <div
        {...dragProps}
        className="cursor-pointer h-32 flex justify-center items-center border-2 border-dashed border-gray-500 p-8 hover:opacity-50"
        onClick={() => {
          const input = document.createElement('input');
          input.setAttribute('type', 'file');
          input.addEventListener('change', function handleChange(e: any) {
            input.removeEventListener('change', handleChange);
            if (!e?.target?.files) {
              console.warn('no files selected');
              return;
            }
            handleAdd(e.target.files);
          });
          input.click();
        }}
      >
        <span>{isActive ? 'Jetzt loslassen' : 'Hier klicken oder Datei ablegen'}</span>
      </div>
      <div>
        {urls.map((url, i) => (
          <img src={url} key={i} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-2">
        <Button onClick={() => onClose()}>abbrechen</Button>
        <Button
          className="space-x-2"
          $primary={urls.length}
          $disabled={!urls.length}
          onClick={async () => {
            setPending(true);
            try {
              await onImageAdd(files);
            } catch (err) {
              console.warn('error adding image', err);
            }
            setPending(false);
            setFiles([]);
            setUrls([]);
            onClose();
          }}
        >
          <span>Hochladen</span> {pending && <Spinner />}
        </Button>
      </div>
    </Modal>
  );
}

export default ImageAddModal;

export function ImageAddModalExample() {
  const [open, setOpen] = useState(false);
  const [urls, setUrls] = useState<string[]>([]);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>open</Button>
      {urls.map((url, i) => (
        <img key={i} src={url} className="w-64" />
      ))}
      <ImageAddModal
        open={open}
        onClose={() => setOpen(false)}
        onImageAdd={async (files) => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          const _urls = await Promise.all(files.map((file) => getFileUrl(file)));
          setUrls(_urls);
          return [];
        }}
      />
    </div>
  );
}
