import React, { Suspense } from "react";

import RegistrationForm from "@/components/RegistrationForm";

function Register() {
  return (
    <div className="min-h-screen py-2 flex flex-col gap-12 items-center justify-center">
      <Suspense
        fallback={
          <div className="w-screen h-screen flex items-center justify-center">
            Loading Registration Form
          </div>
        }
      >
        <RegistrationForm />
      </Suspense>
    </div>
  );
}

export default Register;
