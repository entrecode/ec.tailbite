import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import AssetPickerSingle from './components/AssetPickerSingle';
import Button from './components/Button';
import Card from './components/Card';
import { ModalExample } from './components/Modal';
import Section from './components/Section';
import Tailbite from './components/Tailbite';

function App() {
  const [asset, setAsset] = useState();
  return (
    <Section>
      <Section.Sticky>
        <Section.Container className="max-w-4xl flex justify-between items-center">
          <Section.Heading>Section</Section.Heading>
          <Button $primary onClick={() => console.log('action')}>
            action
          </Button>
        </Section.Container>
        <Section.Divider />
      </Section.Sticky>
      <Section.Container className="max-w-4xl">
        <Card>
          <Card.Body>
            This Section uses Container / Sticky / Divider instead of Head / Body. This enables setting max-w but
            keeping the line full width.
          </Card.Body>
        </Card>
      </Section.Container>
      <ModalExample />
      <DndProvider backend={HTML5Backend}>
        <Tailbite environment={{ shortID: '83cc6374', env: 'stage' }}>
          <AssetPickerSingle group="test" value={asset} onChange={setAsset} />
        </Tailbite>
      </DndProvider>
    </Section>
  );
}

export default App;
