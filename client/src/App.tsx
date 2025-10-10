import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ImagePreloader from "@/components/image-preloader";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ImagePreloader onComplete={() => setImagesLoaded(true)}>
          <Toaster />
          <Router />
        </ImagePreloader>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
