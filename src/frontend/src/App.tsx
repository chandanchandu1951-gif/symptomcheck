import { Layout } from "@/components/Layout";
import { Skeleton } from "@/components/ui/skeleton";
import { AssessmentProvider } from "@/store/assessmentStore";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("@/pages/Home"));
const AssessPage = lazy(() => import("@/pages/Assess"));
const InterviewPage = lazy(() => import("@/pages/Interview"));
const ResultsPage = lazy(() => import("@/pages/Results"));

function PageLoader() {
  return (
    <div className="container max-w-3xl mx-auto px-4 py-16 space-y-4">
      <Skeleton className="h-10 w-64 mx-auto" />
      <Skeleton className="h-4 w-96 mx-auto" />
      <Skeleton className="h-48 w-full mt-8" />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <AssessmentProvider>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </Layout>
    </AssessmentProvider>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <HomePage />,
});

const assessRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/assess",
  component: () => <AssessPage />,
});

const interviewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/interview",
  component: () => <InterviewPage />,
});

const resultsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/results",
  component: () => <ResultsPage />,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  assessRoute,
  interviewRoute,
  resultsRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
