"use client";
import React from "react";
import { UserFormSchemaType } from "./types/formsTypes";
import { FormProps } from "./Exports";
import { UserType } from "@/src/types/global";

interface UserFormProps {
  entity: UserType;
}

const UserForm = ({ entity }: UserFormProps) => {
  return <div>UserForm</div>;
};

export default UserForm;
