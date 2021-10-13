import React from "react";
import { InputAtom } from "../../atoms/input";
import { ButtonAtom } from "../../atoms/button";
import { LinkAtom } from "../../atoms/link";
import { AiOutlineUser, AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Formik } from "formik";
import api from "../../../shared/services/api/api";

export const RegisterFormMolecule: React.FC = () => {
  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          api
            .post("/users/create", values)
            .then((response) => {
              console.log(response);
              setSubmitting(false);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        {({ isSubmitting, handleSubmit, handleChange, handleBlur, values }) => (
          <form onSubmit={handleSubmit}>
            <InputAtom
              name="name"
              width="100%"
              height="24px"
              color="#9373ed"
              placeholderColor="#9373ed"
              placeholder="name"
              borderColor="#9373ed"
              borderSize={3}
              borderType="solid"
              spacing={14}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            >
              <AiOutlineUser color="#9373ed" />
            </InputAtom>

            <InputAtom
              name="email"
              type="email"
              width="100%"
              height="24px"
              color="#9373ed"
              placeholderColor="#9373ed"
              placeholder="email"
              borderColor="#9373ed"
              borderSize={3}
              borderType="solid"
              spacing={14}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            >
              <AiOutlineMail color="#9373ed" />
            </InputAtom>
            <InputAtom
              name="password"
              width="100%"
              height="24px"
              color="#9373ed"
              placeholderColor="#9373ed"
              placeholder="password"
              borderColor="#9373ed"
              borderSize={3}
              borderType="solid"
              spacing={14}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            >
              <AiFillLock color="#9373ed" />
            </InputAtom>
            <ButtonAtom
              color="#fff"
              backgroundColor="#9373ed"
              width="100%"
              height="24px"
              borderSize={3}
              borderType="solid"
              borderColor="#9373ed"
              spacing={14}
              type="submit"
              disabled={isSubmitting}
              isLoading={isSubmitting}
            >
              REGISTER
            </ButtonAtom>
            <LinkAtom
              color="#9373ed"
              to="/login"
              spacing={6}
              textAlign="center"
            >
              I already have an account.
            </LinkAtom>
            <LinkAtom color="#9373ed" to="" spacing={6} textAlign="center">
              OMG, Forgot access?
            </LinkAtom>
          </form>
        )}
      </Formik>
    </div>
  );
};
