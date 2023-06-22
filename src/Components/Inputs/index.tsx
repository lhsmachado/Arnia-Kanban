type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input = (props: Props): JSX.Element => (
    <>
        <label>{props.title}</label>
        <input {...props}/>
    </>
)