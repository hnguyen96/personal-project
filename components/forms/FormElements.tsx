import Loading from "../Loading";


type SubmitButtonProps = {
  label: string;
  disabled?: boolean;
  width?: number;
  loading?: boolean;
};

export function SubmitButton({ label, disabled, width, loading }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled || loading}
      className={`h-[44px] rounded-lg bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 text-sm text-white font-semibold flex items-center justify-center px-8 py-2 w-[${width}px]`}
    >
      {loading?<Loading/>:label}
    </button>
  );
}

type FormInputProps = {
  type: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  errors?: FormInputError | null;
};

export function FormInput({ type, label, placeholder, disabled, errors, ...rest }: FormInputProps) {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <span className="text-sm font-bold mb-1">{label}</span>
      <input
        className="bg-input-base h-[38px] rounded-lg pl-4"
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        {...rest}
      />
      {errors && <p className="font-medium tracking-wide text-xs text-red-500 mt-1 ml-1">{errors?.message}</p>}
    </div>
  );
}