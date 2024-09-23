"use client";

import { FormEvent, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "./style.css";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Email address is not valid." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .max(15, { message: "Phone number must be at most 15 digits." })
    .regex(/^\d+$/, { message: "Phone number can only contain digits." }),
});
type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <div
      className="d-flex justify-content-center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-100"
        style={{
          padding: "24px 16px",
          gap: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1 className="header"> Finalise Your Order </h1>
        <p className="leadText">
          Please leave your contact deatailes below. we'll contact you very
          shortly to finalise your order.
        </p>

        <div>
          <label htmlFor="name" className="form-label">
            *Name and surname
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className={`custom-input form-control ${
              errors.name ? "is-invalid" : ""
            }`}
          />
          <ErrorInput error={errors.name} />
        </div>

        <div>
          <label htmlFor="email" className="form-label">
            *Email address
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            className={`custom-input form-control ${
              errors.email ? "is-invalid" : ""
            }`}
          />
          <ErrorInput error={errors.email} />
        </div>

        <div>
          <label htmlFor="phone" className="form-label">
            *Phone number
          </label>
          <input
            {...register("phone")}
            id="phone"
            type="tel"
            className={`custom-input form-control ${
              errors.phone ? "is-invalid" : ""
            }`}
          />
          <ErrorInput error={errors.phone} />
        </div>

        <button type="submit" className="custom-submit-btn">
          Place order
        </button>
      </form>
    </div>
  );
};

const ErrorInput = ({ error = undefined }) => {
  return (
    error && (
      <div className="invalid-feedback error-message">
        <svg
          width="16"
          height="20"
          viewBox="0 3 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.5653 14.9717L9.71444 6.88745C9.35322 6.28486 8.70223 5.91607 7.99967 5.91602C7.2971 5.91596 6.64606 6.28466 6.28475 6.8872L1.43392 14.9717C1.06324 15.5895 1.05352 16.359 1.40849 16.986C1.76346 17.613 2.42825 18.0007 3.14877 18.0007H12.8504C13.5709 18.0007 14.2357 17.613 14.5907 16.986C14.9457 16.359 14.936 15.5895 14.5653 14.9717ZM7.4996 13.245V10.29C7.49938 10.1557 7.52622 10.0227 7.57851 9.89902C7.62133 9.78814 7.68808 9.68807 7.77401 9.60596C7.83457 9.54334 7.91647 9.50577 8.00344 9.50074C8.12884 9.50074 8.25414 9.59587 8.37936 9.78614C8.44734 9.87002 8.48915 9.97204 8.4996 10.0795V13.0346C8.4996 13.1447 8.42312 13.25 8.27017 13.3503C8.12468 13.4482 7.95332 13.5004 7.77798 13.5005C7.59261 13.5005 7.49982 13.4153 7.4996 13.245ZM8.56002 14.9816C8.54307 14.8582 8.49375 14.7414 8.41708 14.6431C8.2767 14.4375 8.14132 14.3346 8.01092 14.3346C7.90973 14.3392 7.81414 14.3824 7.74374 14.4552C7.64806 14.547 7.57367 14.6587 7.52578 14.7824C7.46831 14.9193 7.43886 15.0664 7.43917 15.2149C7.43917 15.4054 7.54446 15.5007 7.75503 15.5007C7.95037 15.5008 8.14137 15.4432 8.30413 15.3351C8.47472 15.2247 8.56002 15.1068 8.56002 14.9816Z"
            fill="#BE0040"
          />
        </svg>
        {error.message}
      </div>
    )
  );
};

export default Form;
