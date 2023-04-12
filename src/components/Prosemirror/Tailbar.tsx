import { useActive, useCommands } from '@remirror/react';
import Button from '../Button';
import {
  h1,
  h2,
  h3,
  listOrdered,
  listUnordered,
  underline,
  strikethrough,
  italic,
  bold,
  arrowGoBackFill,
  arrowGoForwardFill,
  imageAddLine,
} from '@remirror/icons';
import { useState, createElement } from 'react';
import ImageAddModal, { WithSrc } from '../ImageAddModal';

function Icon({ data, ...rest }) {
  return (
    <svg {...rest} viewBox="0 0 22 22">
      {data.map(({ tag, attr }, i) => createElement(tag, { ...attr, key: i }))}
    </svg>
  );
}

function Tailbar({ onImageAdd }: { onImageAdd?: (files: File[]) => Promise<WithSrc[]> }) {
  const {
    focus,
    toggleBold,
    toggleItalic,
    toggleUnderline,
    toggleStrike,
    toggleBulletList,
    toggleOrderedList,
    toggleHeading,
    undo,
    redo,
    insertImage,
  } = useCommands();
  const active = useActive();
  const [showImageModal, setShowImageModal] = useState(false);
  return (
    <>
      <div className="sm:flex space-y-1 sm:space-y-0 sm:space-x-4">
        <div className="whitespace-nowrap">
          <Button
            $disabled={!undo.enabled()}
            className="rounded-r-none"
            onClick={() => {
              undo();
              focus();
            }}
          >
            <Icon data={arrowGoBackFill} className="w-4 h-4 fill-inherit" />
          </Button>
          <Button
            $disabled={!redo.enabled()}
            className="rounded-l-none"
            onClick={() => {
              redo();
              focus();
            }}
          >
            <Icon data={arrowGoForwardFill} className="w-4 h-4 fill-inherit" />
          </Button>
        </div>
        <div className="whitespace-nowrap">
          <Button
            $disabled={!toggleBold.enabled()}
            $primary={active.bold()}
            className="rounded-r-none bold"
            onClick={() => {
              toggleBold();
              focus();
            }}
          >
            <Icon data={bold} className="w-4 h-4 fill-inherit" />
          </Button>
          <Button
            $disabled={!toggleItalic.enabled()}
            $primary={active.italic()}
            className="rounded-none italic"
            onClick={() => {
              toggleItalic();
              focus();
            }}
          >
            <Icon data={italic} className="w-4 h-4 fill-inherit" />
          </Button>
          <Button
            $disabled={!toggleStrike.enabled()}
            $primary={active.strike()}
            className="rounded-none line-through"
            onClick={() => {
              toggleStrike();
              focus();
            }}
          >
            <Icon data={strikethrough} className="w-4 h-4 fill-inherit" />
          </Button>
          <Button
            $disabled={!toggleUnderline.enabled()}
            $primary={active.underline()}
            className="rounded-l-none underline"
            onClick={() => {
              toggleUnderline();
              focus();
            }}
          >
            <Icon data={underline} className="w-4 h-4 fill-inherit" />
          </Button>
        </div>
        <div className="whitespace-nowrap">
          <Button
            $disabled={!toggleHeading.enabled({ level: 1 })}
            $primary={active.heading({ level: 1 })}
            className="rounded-r-none"
            onClick={() => {
              toggleHeading({ level: 1 });
              focus();
            }}
          >
            <Icon data={h1} className="w-4 h-4 fill-inherit" />
          </Button>
          <Button
            $disabled={!toggleHeading.enabled({ level: 2 })}
            $primary={active.heading({ level: 2 })}
            className="rounded-none"
            onClick={() => {
              toggleHeading({ level: 2 });
              focus();
            }}
          >
            <Icon data={h2} className="w-4 h-4 fill-inherit" />
          </Button>
          <Button
            $disabled={!toggleHeading.enabled({ level: 3 })}
            $primary={active.heading({ level: 3 })}
            className="rounded-l-none"
            onClick={() => {
              toggleHeading({ level: 3 });
              focus();
            }}
          >
            <Icon data={h3} className="w-4 h-4 fill-inherit" />
          </Button>
        </div>
        <div className="whitespace-nowrap">
          <Button
            $disabled={!toggleBulletList.enabled()}
            $primary={active.bulletList()}
            className="rounded-r-none"
            onClick={() => {
              toggleBulletList();
              focus();
            }}
          >
            <Icon data={listUnordered} className="w-4 h-4 fill-inherit" />
          </Button>
          <Button
            $disabled={!toggleOrderedList.enabled()}
            $primary={active.orderedList()}
            className="rounded-l-none"
            onClick={() => {
              toggleOrderedList();
              focus();
            }}
          >
            <Icon data={listOrdered} className="w-4 h-4 fill-inherit" />
          </Button>
        </div>
        {!!onImageAdd && (
          <div className="">
            <Button className="rounded-r-none" onClick={() => setShowImageModal(true)}>
              <Icon data={imageAddLine} className="w-4 h-4 fill-inherit" />
            </Button>
          </div>
        )}

        {/* <Button
        $disabled={!toggleBulletList.enabled()}
        $primary={active.bulletList()}
        className="rounded-md"
        onClick={() => {
          toggleBulletList();
          focus();
        }}
      >
        <PhotoIcon className="w-4 h-4 fill-inherit" />
      </Button>
      <Button
        $disabled={!toggleLink.enabled()}
        $primary={active.link()}
        className="rounded-md"
        onClick={() => {
          toggleLink();
          focus();
        }}
      >
        <LinkIcon className="w-4 h-4 fill-inherit" />
      </Button> */}
      </div>
      {onImageAdd && (
        <ImageAddModal
          open={showImageModal}
          onClose={() => setShowImageModal(false)}
          onImageAdd={async (files) => {
            const images = await onImageAdd(files);
            images.forEach((image) => insertImage(image));
            focus();
          }}
        />
      )}
    </>
  );
}

export default Tailbar;
