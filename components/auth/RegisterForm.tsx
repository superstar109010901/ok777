"use client";

import React, { useState } from "react";

import AuthButton from "../ui/AuthButton";
import { Icons } from "../ui";
import PolicyForm from "./PolicyForm";

const PoclifyFormInfo = [
  {
    content:
      "I agree to the <a href='#'>“User Agreement”</a> and confirm that I am over 18 years old",
  },
  {
    content:
      "I agree to receive promotional notifications from <a href='#'>ok777.casino</a>",
  },
];

const RegisterForm: React.FC = () => {
  const [policy, setPolicy] = useState(PoclifyFormInfo);
  const [showPassword, setShowPassword] = useState(false);
  const [discountCodeState, setDiscountCodeState] = useState(false);

  const changeDiscountCodeState = () => {
    setDiscountCodeState(!discountCodeState);
  };

  return (
    <div className="login-form">
      <div className="input-group">
        <label className="input-label">Username / email</label>
        <input
          type="text"
          placeholder="Enter your username or email"
          className="form-input"
        />
      </div>
      <div className="input-group">
        <label className="input-label">Password</label>
        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="form-input"
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="discount-code-form flex flex-col gap-6">
        <div
          className={`discount-code-form-label gap-4 flex ${
            discountCodeState == true ? "open" : "close"
          }`}
          onClick={changeDiscountCodeState}
        >
          <p>Referral code/discount code</p>
          {discountCodeState == true ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
            >
              <path
                d="M1.70906 7.55994L5.99906 3.25994L10.2891 7.55994L11.7091 6.13994L5.99906 0.439941L0.289062 6.13994L1.70906 7.55994Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
            >
              <path
                d="M5.99906 7.55994L11.7091 1.85994L10.2891 0.439941L5.99906 4.73994L1.70906 0.439941L0.289062 1.85994L5.99906 7.55994Z"
                fill="#2283F6"
              />
            </svg>
          )}
        </div>
        {discountCodeState == true ? (
          <div className="flex flex-col gap-6">
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter your username or email"
                className="form-input"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter your username or email"
                className="form-input"
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <AuthButton type="register" />
      {policy.map((item, index) => (
        <PolicyForm content={item.content} />
      ))}
    </div>
  );
};

export default RegisterForm;
