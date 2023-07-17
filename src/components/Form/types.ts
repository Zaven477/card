export interface ValuesType {
    name: string,
    card: string,
    dateNum: string,
    yearNum: string,
    cvcNum: string
}



export interface FormSubmitProps {
    setValue: (values: ValuesType) => void
    setDelimiter: (delimiter: string) => void
}