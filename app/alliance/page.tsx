"use client";

import React, { useEffect, useMemo, useState } from "react";
import InviteFriends from "@/features/alliance/components/InviteFriends";
import Management from "@/features/alliance/components/Management";
import Performance from "@/features/alliance/components/Performance";
import Report from "@/features/alliance/components/Report";
import Introduction from "@/features/alliance/components/Introduction";
import AllianceBottomBar from "@/features/alliance/components/AllianceBottomBar";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function AllianceClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tabSlugToName = useMemo(
    () =>
      ({
        invite: "Invite Friends",
        management: "Management",
        performance: "Performance",
        report: "Report",
        introduction: "Introduction",
      } as const),
    []
  );

  const tabNameToSlug = useMemo(
    () =>
      ({
        "Invite Friends": "invite",
        Management: "management",
        Performance: "performance",
        Report: "report",
        Introduction: "introduction",
      } as const),
    []
  );

  const [activeTab, setActiveTab] = useState<string>("Invite Friends");

  useEffect(() => {
    const fromQuery = searchParams.get("tab");
    if (fromQuery && tabSlugToName[fromQuery as keyof typeof tabSlugToName]) {
      setActiveTab(tabSlugToName[fromQuery as keyof typeof tabSlugToName]);
    }
  }, [searchParams, tabSlugToName]);

  const updateQuery = (nextTabName: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tabNameToSlug[nextTabName as keyof typeof tabNameToSlug]);
    router.replace(`${pathname}?${params.toString()}`);
  };

  const navigationItems = [
    { name: "Invite Friends", icon: "/icons/user-plus.svg" },
    { name: "Management", icon: "/icons/group.svg" },
    { name: "Performance", icon: "/icons/chart-network.svg" },
    { name: "Report", icon: "/icons/file-report.svg" },
    { name: "Introduction", icon: "/icons/form.png" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Invite Friends":
        return <InviteFriends />;
      case "Management":
        return <Management />;
      case "Performance":
        return <Performance />;
      case "Report":
        return <Report />;
      case "Introduction":
        return <Introduction />;
      default:
        return <InviteFriends />;
    }
  };

  return (
    <>
      <div className="flex flex-col w-[70%] max-w-[1920px] [@media(max-width:1500px)]:w-[100%] gap-16 py-6 mx-auto justify-between pb-20 lg:pb-8">
        {/* Left Sidebar Navigation */}
        <div className="bg-[#FFFFFF0A] rounded-lg h-full [@media(max-width:660px)]:hidden w-full ">
          <div className="grid grid-cols-5 p-3 gap-3">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActiveTab(item.name);
                  updateQuery(item.name);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 pr-20 rounded-lg transition-all duration-200 ${
                  activeTab === item.name
                    ? "bg-[#FFFFFF14] text-white shadow-lg"
                    : "text-gray-300 hover:bg-[rgba(255,255,255,0.08)]"
                }`}
              >
                <img src={item.icon} alt={item.name} />
                <span className="font-bold text-[14px]">{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 lg:bg-white-4 p-4 rounded-[12px]">{renderContent()}</div>
      </div>
      
      {/* Mobile Bottom Navigation */}
      <AllianceBottomBar />
    </>
  );
}
