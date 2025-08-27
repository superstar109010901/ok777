"use client";

import React from "react";
import CasinoGames from "@/components/ui/CasinoGames";
import { useSidebar } from "@/context/SidebarProvider";
import { useSidebarPosition } from "@/hooks/useSidebarPosition";

const HashHoverLayer: React.FC = () => {
	const { isHashHoverOpen, openHashHover, scheduleCloseHashHover, hashHoverTop } = useSidebar();
	const { leftPosition } = useSidebarPosition();
	
	if (!isHashHoverOpen) return null;
	
	return (
		<div
			className="fixed top-0 z-[120] transition-all duration-300"
			style={{ 
				left: leftPosition,
				top: hashHoverTop 
			}}
			onMouseEnter={openHashHover}
			onMouseLeave={scheduleCloseHashHover}
		>
			<CasinoGames />
		</div>
	);
};

export default HashHoverLayer;



