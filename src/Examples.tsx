import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import Accordion from './components/Accordion';
import { AssetPickerMultiExample } from './components/AssetPickerMulti';
import { AssetPickerSingleExample } from './components/AssetPickerSingle';
import { AutofillExample } from './components/Autofill';
import { BackendSelectExample } from './components/BackendSelect';
import { ButtonExample } from './components/Button';
import { CalendarInputExample, DateInputExample } from './components/CalendarInput';
import { CardExample } from './components/Card';
import { ChipExample } from './components/Chip';
import { ColorPickerExample } from './components/ColorPicker';
import { ConfirmDeleteExample } from './components/ConfirmDelete';
import { CopyLinkExample } from './components/CopyLink';
import { DataListExample } from './components/DataList';
import { DraggableExample } from './components/Draggable';
import { DropdownExample } from './components/Dropdown';
import { EmptyListExample } from './components/EmptyList';
import { FormExample } from './components/Form';
import { JSONInputExample } from './components/JSONInput';
import Layout from './components/Layout';
import { ModalExample } from './components/Modal';
import { OptionsMenuExample } from './components/OptionsMenu';
import { PageErrorExample } from './components/PageError';
import { SearchbarExample } from './components/Searchbar';
import Section, { SectionExample } from './components/Section';
import { SidebarExample } from './components/Sidebar';
import { SimpleSelectExample } from './components/SimpleSelect';
import { SnippetExample } from './components/Snippet';
import { StyledTabExample } from './components/StyledTab';
import { TableExample } from './components/Table';
import Tailbite from './components/Tailbite';
import { TimePaginationExample } from './components/TimePagination';
import { ToggleExample } from './components/Toggle';
import { ToolyExample } from './components/Tooly';
import Home from './demo/Home';
import Sidenav from './demo/Sidenav';
import Topnav from './demo/Topnav';
import { UseSetExample } from './hooks/useSet';

export const routes = [
  { path: '', element: <Home /> },
  { path: 'Autofill', element: <AutofillExample /> },
  { path: 'BackendSelect', element: <BackendSelectExample /> },
  { path: 'AssetPickerSingle', element: <AssetPickerSingleExample /> },
  { path: 'AssetPickerMulti', element: <AssetPickerMultiExample /> },
  { path: 'Accordion', element: <Accordion.Example /> },
  { path: 'Button', element: <ButtonExample /> },
  { path: 'Card', element: <CardExample /> },
  { path: 'Chip', element: <ChipExample /> },
  { path: 'ColorPicker', element: <ColorPickerExample /> },
  { path: 'Form', element: <FormExample /> },
  { path: 'Toggle', element: <ToggleExample /> },
  { path: 'CalendarInput', element: <CalendarInputExample /> },
  { path: 'DateInput', element: <DateInputExample /> },
  { path: 'ConfirmDelete', element: <ConfirmDeleteExample /> },
  { path: 'CopyLink', element: <CopyLinkExample /> },
  { path: 'DataList', element: <DataListExample /> },
  { path: 'Draggable', element: <DraggableExample /> },
  { path: 'Dropdown', element: <DropdownExample /> },
  { path: 'EmptyList', element: <EmptyListExample /> },
  // { path: 'EntryModal', element: <EntryModalExample /> },
  { path: 'JSONInput', element: <JSONInputExample /> },
  { path: 'Modal', element: <ModalExample /> },
  { path: 'OptionsMenu', element: <OptionsMenuExample /> },
  { path: 'PageError', element: <PageErrorExample /> },
  { path: 'Searchbar', element: <SearchbarExample /> },
  { path: 'Section', element: <SectionExample /> },
  { path: 'Sidebar', element: <SidebarExample /> },
  { path: 'SimpleSelect', element: <SimpleSelectExample /> },
  { path: 'Snippet', element: <SnippetExample /> },
  { path: 'StyledTab', element: <StyledTabExample /> },
  { path: 'Table', element: <TableExample /> },
  { path: 'TimePagination', element: <TimePaginationExample /> },
  { path: 'Tooly', element: <ToolyExample /> },
  { path: 'useSet', element: <UseSetExample /> },
].sort((a, b) => a.path.localeCompare(b.path));

const router = createBrowserRouter(
  routes.map((r) => ({
    ...r,
    element: <Demo heading={r.path || 'README'}>{r.element}</Demo>,
  })),
);

export function Demo({ children, heading }) {
  return (
    <Tailbite
      environment={{
        theme: 'dark',
        colors: {
          primary: '#ba443c',
        },
      }}
    >
      <Layout top={<Topnav />} left={<Sidenav />}>
        <Section>
          <Section.Sticky>
            <Section.Container className="max-w-4xl flex justify-between items-center">
              <Section.Heading>{heading}</Section.Heading>
            </Section.Container>
            <Section.Divider />
          </Section.Sticky>
          <Section.Container className="max-w-4xl">{children}</Section.Container>
        </Section>
      </Layout>
    </Tailbite>
  );
}

function Examples() {
  return (
    <DndProvider backend={HTML5Backend}>
      <RouterProvider router={router} />
    </DndProvider>
  );
}

export default Examples;
