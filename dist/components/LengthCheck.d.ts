import { FieldValues, UseFormWatch } from 'react-hook-form';
/**
 * Checks the length of the value of the given field.
 */
declare function LengthCheck({ max, name, watch }: {
    max: number;
    name: string;
    watch: (sting: any) => UseFormWatch<FieldValues>;
}): JSX.Element;
export default LengthCheck;
