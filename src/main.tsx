import { StrictMode } from "react";
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
	return document.documentElement.scrollHeight > window.innerHeight;
	console.log(`Scrollbar visible: ${isScrollbarVisible}`);
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



// Call the function to apply styles
applyScrollbarStyles();

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<Header />
			<App />
			<Footer />
		</QueryClientProvider>
	</StrictMode>
);
