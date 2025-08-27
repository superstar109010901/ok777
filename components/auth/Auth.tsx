"use client";

import React, { useState } from "react";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Icons } from "../ui";
import { useSidebar } from "../../context/SidebarProvider";
import { UnifiedButton } from "../ui";

const icons = ["Gmail", "Telegram", "MetaMask", "TON", "Trustpilot"];

const Auth: React.FC = () => {
  const { isAuthModalOpen, toggleAuthModal } = useSidebar();
  const [socialOIcons, setSocialOIcons] = useState(icons);
  const [activeTab, setActiveTab] = useState<"login" | "registration">("login");

  const handleTabChange = (tabId: "login" | "registration") => {
    setActiveTab(tabId);
  };

  const AuthModalContentInfo = {
    backImage: "images/auth/auth-back.png",
    CharactorImage: "images/auth/auth-charator.png",
    Title: "WELCOME </br> BONUS </br> UP TO 590%",
    addInfo: "+ 225 Free Spins",
  };

  return (
    <>
      {isAuthModalOpen ? (
        <>
          <div className={`auth-container `}>
            <div className="auth-back"></div>
            <div className="auth-content">
              <div className="auth-modal flex">
                <div className="auth-modal-content">
                  <div className="auth-modal-content-media">
                    <img
                      src={AuthModalContentInfo.backImage}
                      alt="auth-back"
                      className="auth-modal-back"
                    />
                    <img
                      src={AuthModalContentInfo.CharactorImage}
                      alt="auth-charator"
                      className="auth-modal-charator"
                    />
                  </div>
                  <div className="auth-modal-content-content">
                    <span
                      className="auth-modal-content-content-title"
                      dangerouslySetInnerHTML={{
                        __html: AuthModalContentInfo.Title,
                      }}
                    ></span>
                    <span className="auth-modal-content-content-add">
                      {AuthModalContentInfo.addInfo}
                    </span>
                  </div>
                </div>
                <div className="auth-modal-form relative">
                  <div className="auth-modal-form-content ">
                    <UnifiedButton
                      variant="custom"
                      className="absolute top-6.5 right-6.5 w-9 text-[32px] bg-[#434444] hover:bg-[#111923]"
                      onClick={toggleAuthModal}
                    >
                      &times;
                    </UnifiedButton>
                    <div className="auth-options flex">
                      <span
                        data-id="login"
                        className={`auth-option-item ${
                          activeTab === "login" ? "active" : ""
                        }`}
                        onClick={() => handleTabChange("login")}
                      >
                        Log In
                      </span>
                      <span
                        data-id="registration"
                        className={`auth-option-item ${
                          activeTab === "registration" ? "active" : ""
                        }`}
                        onClick={() => handleTabChange("registration")}
                      >
                        Registration
                      </span>
                    </div>
                    <div className="auth-forms">
                      {activeTab === "login" && <LoginForm />}
                      {activeTab === "registration" && <RegisterForm />}
                    </div>
                  </div>
                  <div className="auth-modal-form-social">
                    <div className="auth-with-socials">
                      <div className="social-login-section">
                        <div className="social-login-title">
                          <span className="title-line"></span>
                          Log in using
                          <span className="title-line"></span>
                        </div>
                        <div className="social-buttons-row">
                          {socialOIcons.map((item, index) => (
                            <Icons Type={"icon"} Name={item} key={index} />
                          ))}
                          <Icons Type={"text"} Name={"3"} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Auth;
