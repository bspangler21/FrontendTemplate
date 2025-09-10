import { StrictMode, createContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import Footer from "./pageComponents/Footer.tsx";
import Header from "./pageComponents/Header.tsx";

initializeIcons();

const queryClient = new QueryClient();

function isScrollbarVisible() {
	const isVisible =
		document.documentElement.scrollHeight > window.innerHeight;
	console.log(`Scrollbar visible: ${isVisible}`);
	return isVisible;
	
}

function getScrollbarWidth() {
	const container = document.createElement("div");
	document.body.appendChild(container);
	container.style.overflow = "scroll";
	container.style.width = "50px";
	container.style.height = "50px";
	const inner = document.createElement("div");
	container.appendChild(inner);
	const scrollbarWidth = container.offsetWidth - inner.offsetWidth;
	console.log("scrollbarWidth", scrollbarWidth);
	document.body.removeChild(container);

	console.log(`Scrollbar width: ${scrollbarWidth}px`);

	return scrollbarWidth;
}

function applyScrollbarStyles() {
	if (isScrollbarVisible()) {
		document.documentElement.style.setProperty(
			"--scrollbar-width",
			`${getScrollbarWidth()}px`
		);
	} else {
		document.documentElement.style.setProperty("--scrollbar-width", "0px");
	}
}

// Apply styles after DOM is ready and on resize
function initializeScrollbarHandling() {
    applyScrollbarStyles();
    window.addEventListener('resize', applyScrollbarStyles);
    // Also check after content loads
    window.addEventListener('load', applyScrollbarStyles);
}

// Call after a short delay to ensure content is rendered
setTimeout(initializeScrollbarHandling, 100);

export const UserContext = createContext("");
const currentUser = "Brett Spangler";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<UserContext.Provider value={currentUser}>
				<Header />
				<App />
				<Footer />
			</UserContext.Provider>
		</QueryClientProvider>
	</StrictMode>
);
