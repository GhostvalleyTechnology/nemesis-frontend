export default function isNumeric(value: string) {
    return /^\d+$/.test(value);
}
export function isFloat(value: string) {
    return /^[0-9]*([,.][0-9]{1,2})?$/.test(value);
}