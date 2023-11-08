"use client";

import React from "react";
import { useSearchParams, notFound } from "next/navigation";

import CreateForm from "@/components/registration/CreateForm";
import JoinForm from "@/components/registration/JoinForm";

function RegistrationForm() {
  const searchParams = useSearchParams();

  if (searchParams.get("create") === "true") {
    return <CreateForm />;
  } else if (searchParams.get("create") === "false") {
    return <JoinForm />;
  } else {
    notFound();
  }
}

export default RegistrationForm;
