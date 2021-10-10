import React from "react";
import { InputAtom } from "../../atoms/input";
import { ButtonAtom } from "../../atoms/button";
import { LinkAtom } from "../../atoms/link";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Formik } from "formik";
import api from "../../../@shared/services/api/api";

export const LoginFormMolecule: React.FC = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          api.post("/auth", values).then((response) => {
            console.log(response);
            setSubmitting(false);
          });
        }}
      >
        {({ isSubmitting, handleSubmit, handleChange, handleBlur, values }) => (
          <form onSubmit={handleSubmit}>
            <InputAtom
              name="email"
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
              LOGIN
            </ButtonAtom>
            <LinkAtom
              color="#9373ed"
              to={{ pathname: "/register" }}
              spacing={6}
              textAlign="center"
            >
              Create new account
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
