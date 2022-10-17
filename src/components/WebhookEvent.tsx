import { Tab } from '@headlessui/react';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Button from '../components/Button';
import DataList from '../components/DataList';
import Snippet from '../components/Snippet';
import StyledTab from '../components/StyledTab';

export default function WebhookEvent({ event, onRerun }) {
  return (
    <div className="relative">
      <Tab.Group>
        <StyledTab.List>
          <StyledTab>Request</StyledTab>
          <StyledTab>Response</StyledTab>
        </StyledTab.List>
        <Tab.Panels>
          <StyledTab.Panel>
            <DataList>
              <DataList.Item>
                <DataList.Header>Body</DataList.Header>
                <DataList.Body>
                  <Snippet value={JSON.stringify(event.request?.body, null, 2)} />
                </DataList.Body>
              </DataList.Item>
              <DataList.Item>
                <DataList.Header>Header</DataList.Header>
                <DataList.Body>
                  <Snippet value={JSON.stringify(event.request?.header, null, 2)} />
                </DataList.Body>
              </DataList.Item>
            </DataList>
          </StyledTab.Panel>
          <StyledTab.Panel>
            <DataList>
              <DataList.Item>
                <DataList.Header>Preview</DataList.Header>
                <DataList.Body>
                  <Snippet value={JSON.stringify(event.response, null, 2)} />
                </DataList.Body>
              </DataList.Item>
              <DataList.Item>
                <DataList.Header>Header</DataList.Header>
                <DataList.Body>
                  <Snippet value={JSON.stringify(event.responseHeader, null, 2)} />
                </DataList.Body>
              </DataList.Item>
            </DataList>
          </StyledTab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <Button $primary type="button" onClick={onRerun} className="absolute right-0 top-3">
        <ArrowPathIcon className="-ml-0.5 h-4 w-4" aria-hidden="true" />
        rerun
      </Button>
    </div>
  );
}
