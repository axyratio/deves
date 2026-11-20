// component/common/TextField/TextField.tsx
import { forwardRef, useId, type InputHTMLAttributes } from "react";

export type FieldType = "text" | "tel" | "email" | "number" | "password";

type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
    label: string;
    type?: FieldType;
    required?: boolean;
    error?: string;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
    { label, type = "text", required = false, error, className = "", id, ...rest },
    ref
) {
    const autoId = useId();
    const inputId = id ?? autoId;
    const errorId = `${inputId}-error`;

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={inputId} className="text-[15px] font-bold text-primary">
                {label}
                {required && (
                    <span className="ml-1 text-danger" aria-hidden="true">*</span>
                )}
            </label>

            <input
                ref={ref}
                id={inputId}
                type={type}
                required={required}
                aria-required={required}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? errorId : undefined}
                className={`w-full rounded-xl border bg-[#fffbf3] px-4 py-3 text-base text-primary
                            placeholder:text-content-secondary
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-ring
                            ${error ? "border-danger" : "border-border"} ${className}`}
                {...rest}
            />

            {error && (
                <p id={errorId} role="alert" className="text-[13px] text-danger">
                    {error}
                </p>
            )}
        </div>
    );
});