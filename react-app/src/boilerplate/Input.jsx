import { useFormContext } from "react-hook-form"


export const Input = ({ label, type, id, placeholder, validation }) => {
    const {
        register,
        formState: { errors } } = useFormContext()

    const iError = InputError(errors, id);


    return (
        <div className="flex flex-col w-full gap-2  " >
            <div >
                <label htmlFor={id} className="font-semibold capitalize ">
                    {label}
                </label>
            </div>
            <div className="d-flex justify-content-center  ">
                <input
                    {...register(id, validation)}
                    id={id}
                    type={type}
                    className=" flex-fill w-full p-1 font-medium placeholder:opacity-60 rounded"
                    placeholder={placeholder}
                    aria-invalid={errors.id ? "true" : "false"}
                    style={{ border: 'none', borderBottom: '1rem', backgroundColor: ' #F6F5F5' }}
                />


            </div>
            <p>{iError.error?.message}</p>
        </div>
    )
}

function InputError(error, id) {
    const filtered = Object.keys(error)
        .filter(key => key.includes(id.charAt(0).toUpperCase() + id.slice(1)))
        .reduce((cur, key) => {
            return Object.assign(cur, { error: error[key] })
        }, {})



    return filtered
}