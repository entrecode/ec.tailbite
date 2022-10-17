import React from 'react';
import Form from '../components/Form';
import Input from '../components/Input';

function ConversionForm({ form, id = '' }) {
  const register = (prop) => form.register(`${id ? `config.tracking.${id}.` : ''}${prop}`);
  return (
    <Form>
      <Form.Item $first>
        <Form.Item.Label>{!id ? 'Globale ' : ''}Google Ads ID</Form.Item.Label>
        <Form.Item.Body>
          <Input type="text" {...register(`googleAdsID`)} />
        </Form.Item.Body>
      </Form.Item>
      <Form.Item>
        <Form.Item.Label>
          {!id ? 'Globale ' : ''}Google Conversion-ID für <em>Mitglied werden</em>
        </Form.Item.Label>
        <Form.Item.Body>
          <Input type="text" {...register('googleConversionIDs.membership')} />
        </Form.Item.Body>
      </Form.Item>
      <Form.Item>
        <Form.Item.Label>{!id ? 'Globale ' : ''}Google Tag ID</Form.Item.Label>
        <Form.Item.Body>
          <Input type="text" {...register('googleTagID')} />
        </Form.Item.Body>
      </Form.Item>
      <Form.Item>
        <Form.Item.Label>{!id ? 'Globale ' : ''}Facebook Marketing ID</Form.Item.Label>
        <Form.Item.Body>
          <Input type="text" {...register('facebookMarketingID')} />
        </Form.Item.Body>
      </Form.Item>
    </Form>
  );
}
export default ConversionForm;
