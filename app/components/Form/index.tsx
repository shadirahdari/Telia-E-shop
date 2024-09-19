"use client";

import { FormEvent, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";


const schema = z.object({
  name: z.string().min(3, {message: 'Name must be at least 3 characters.'}),
  email: z.string().email({ message: "Email address is not valid." }),
  phone: z.string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .max(15, { message: "Phone number must be at most 15 digits." })
    .regex(/^\d+$/, { message: "Phone number can only contain digits." }),
});
type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register ,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValues) => console.log(data);

  
return (
     
    <div className="d-flex justify-content-center align-items-center" style={{ width: "100vw", height: "100vh" }}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-100" style={{ maxWidth: "375px", padding: "24px 16px", gap: "48px", display: "flex", flexDirection: "column" }}>
      <h1> Finalise Your Order </h1> 
      <p> Please leave your contact deatailes below. we'll contact you very shortly to finalise your order.</p>
       
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            *Name and surname
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          />
          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            *Email address
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            *Phone number
          </label>
          <input
            {...register("phone")}
            id="phone"
            type="tel"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
        </div>

        <button disabled={!isValid} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
