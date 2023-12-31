"use client";
import React from "react";
import { UserType } from "@/src/types/global";

interface UserFormProps {
  entity?: UserType;
  create?: boolean;
}

const UserForm = ({ entity }: UserFormProps) => {
  return <div>UserForm</div>;
};

export default UserForm;
