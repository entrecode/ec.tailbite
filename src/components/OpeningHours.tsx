import React from 'react';
import Button from './Button';
import Card from './Card';
import { EntryFieldProps } from './EntryField';
import Form from './Form';
import Input from './Input';
import InputMaskController from './InputMaskController';

function OpeningHours(props: EntryFieldProps) {
  const {
    field,
    form: { watch, register, setValue, control },
  } = props;

  const openingHours = watch(`${field}.openingHours`);

  return (
    <div>
      {openingHours?.map((definition, i) => {
        return (
          <div key={i} className="mb-2">
            <Form.Item $dense $first={!i}>
              <Form.Item.Label className="flex justify-between items-center">
                <span>Titel</span>
                <button
                  onClick={() => {
                    openingHours.splice(i, 1);
                    setValue(`${field}.openingHours`, openingHours, { shouldDirty: true });
                  }}
                >
                  Gruppe löschen
                </button>
              </Form.Item.Label>
              <Form.Item.Body>
                <Input type="text" {...register(`${field}.openingHours.${i}.title`)} />
                <br />
                <label className="flex items-center space-x-2">
                  <Form.Checkbox
                    onChange={(e) => {
                      if (e.target.checked) {
                        setValue(
                          `${field}.openingHours`,
                          openingHours.map(({ ['default']: _, ...o }, n) => ({
                            ...o,
                            ...(i === n ? { ['default']: true } : {}),
                          })),
                          { shouldDirty: true },
                        );
                      } else {
                        console.log('uncheck??');
                      }
                    }}
                    checked={!!definition.default}
                  />
                  <span>Wird verwendet für 'geöffnet bis'-Anzeige</span>
                </label>
              </Form.Item.Body>
            </Form.Item>
            {definition.hours?.map(({ daysOfWeek }, j) => (
              <Card key={j} className="mt-2 flex">
                <Card.Body>
                  <div className="flex items-center space-x-4 justify-between">
                    <div className="w-full relative">
                      <div className="grow flex space-x-2 items-center">
                        <Form.Item $dense $first>
                          <Form.Item.Label>geöffnet von</Form.Item.Label>
                          <Form.Item.Body>
                            <InputMaskController
                              mask="99:99"
                              control={control}
                              name={`${field}.openingHours.${i}.hours.${j}.opens`}
                              placeholder="__:__"
                              rules={{ required: 'Pflichtfeld' }}
                            />
                          </Form.Item.Body>
                        </Form.Item>
                        <Form.Item $dense $first>
                          <Form.Item.Label>bis</Form.Item.Label>
                          <Form.Item.Body>
                            {/* <Input type="text" {...register(`${field}.openingHours.${i}.hours.${j}.opens`)} /> */}{' '}
                            <InputMaskController
                              mask="99:99"
                              control={control}
                              name={`${field}.openingHours.${i}.hours.${j}.closes`}
                              placeholder="__:__"
                              rules={{ required: 'Pflichtfeld' }}
                            />
                          </Form.Item.Body>
                        </Form.Item>
                        {/* <Input type="text" {...register(`${field}.openingHours.${i}.hours.${j}.closes`)} /> */}
                      </div>
                      <Form.Item $dense $first>
                        <Form.Item.Label>an folgenden Tagen</Form.Item.Label>
                        <Form.Item.Body>
                          <div className="flex space-x-3">
                            {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map((day) => (
                              <label className="flex space-x-2" key={day}>
                                {/* <Form.Checkbox {...register(`${field}.openingHours.${i}.daysOfWeek.${day}`)} /> */}
                                <Form.Checkbox
                                  checked={daysOfWeek?.includes(day)}
                                  onChange={(e) => {
                                    setValue(
                                      `${field}.openingHours.${i}.hours.${j}.daysOfWeek`,
                                      e.target.checked ? daysOfWeek.concat([day]) : daysOfWeek.filter((d) => d !== day),
                                      { shouldDirty: true },
                                    );
                                  }}
                                />
                                <span>{day}</span>
                              </label>
                            ))}
                          </div>
                        </Form.Item.Body>
                      </Form.Item>
                    </div>
                    <div className="absolute top-2 right-2">
                      <button
                        onClick={() => {
                          setValue(
                            `${field}.openingHours.${i}.hours`,
                            openingHours[i].hours.filter((_, n) => n !== j),
                            { shouldDirty: true },
                          );
                        }}
                      >
                        - entfernen
                      </button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
            <div className="pt-2 text-right">
              <button
                onClick={() => {
                  definition.hours.push({ opens: '', closes: '', daysOfWeek: [] });
                  setValue(`${field}.openingHours`, openingHours);
                }}
              >
                + Neuer Timeslot
              </button>
            </div>
          </div>
        );
      })}
      <Button
        onClick={() => {
          (openingHours || []).push({ label: '', hours: [] });
          setValue(`${field}.openingHours`, openingHours);
        }}
      >
        Neue Gruppe anlegen
      </Button>
    </div>
  );
}

export default OpeningHours;
