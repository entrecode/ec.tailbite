import { Dayjs } from 'dayjs';
export default function Calendar({ value, onChange }: {
    value: string | null;
    onChange: (value: Dayjs) => void;
}): JSX.Element;
