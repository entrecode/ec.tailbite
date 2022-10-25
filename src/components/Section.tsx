import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import Button from './Button';
import Card from './Card';
import HeaderSettingsToggle from './HeaderSettingsToggle';

const Section: any = tw.section``;

Section.Header = ({ children }: any) => {
  console.warn('Section.Header has been renamed to Section.Head for consistency');
  return (
    <div className="py-5 px-8 border-b border-base-300 flex items-center sm:justify-between sticky top-0 bg-base-100 z-[30]">
      {children}
    </div>
  );
};

Section.Simple = tw.div`py-5 px-8 border-b border-gray-200`;

Section.Caption = tw.div`mt-2 max-w-4xl text-sm text-gray-500 p-0`;

Section.Head = tw.div`py-5 px-8 border-b border-base-300 flex items-center sm:justify-between sticky top-0 bg-base-100 z-[30]`;

Section.Heading = tw.h2`m-0 text-lg leading-6 font-medium text-base-900`;

Section.Center = tw.div`flex justify-center`;

Section.HeadingToggle = ({
  children,
  settingsType,
  depends,
}: {
  children: ReactNode;
  settingsType: string;
  depends?: string;
}) => {
  return (
    <h2 className="m-0 text-lg leading-6 font-medium text-base-900 flex items-center">
      {children}
      <HeaderSettingsToggle type={settingsType} depends={depends} />
    </h2>
  );
};

Section.Body = tw.div`px-6 py-3`;

// alternatives for more flexible styling
Section.Container = tw.div`py-5 px-6 w-full`;
Section.Divider = tw.div`border-b border-base-300`;
Section.Sticky = tw.div`sticky top-0 bg-base-100 z-[30]`;

Section.Menu = tw.div`flex`;

Section.BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <div
        className="flex cursor-pointer items-center gap-3 p-3 hover:bg-slate-200 rounded-lg"
        onClick={() => navigate(-1)}
      >
        <ChevronLeftIcon className="w-4 h-4" /> Zurück
      </div>

      <div className="border-r -my-5 border-gray-200 ml-8 mr-8 "></div>
    </div>
  );
};

Section.Sub = tw.h3`text-lg leading-6 font-medium text-base-900 !m-0 !mb-0`;

export default Section;

export function SectionExample() {
  return (
    <>
      <Section>
        <Section.Head>
          <Section.Heading>Section</Section.Heading>
          <Section.Menu>
            <Button $primary onClick={() => console.log('action')}>
              action
            </Button>
          </Section.Menu>
        </Section.Head>
        <Section.Body className="max-w-3xl">
          <Card>
            <Card.Body>One ore more Sections can be used as the basic skeleton for a page</Card.Body>
          </Card>
        </Section.Body>
      </Section>
    </>
  );
}

export function SectionExample2() {
  return (
    <>
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
      </Section>
    </>
  );
}
