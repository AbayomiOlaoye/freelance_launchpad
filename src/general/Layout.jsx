import { ErrorBoundary } from "react-error-boundary";
import Props from "prop-types";
import { ErrorFallback } from "../components/ErrorFallback.jsx";

export const Layout = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};

Layout.propTypes = {
  children: Props.node.isRequired,
};
