import { cn } from "@/lib/utils";

export const PageLoader = ({ className }: { className?: string }) => (
  <div className={cn("min-h-screen flex items-center justify-center bg-background", className)}>
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-b-secondary/30 rounded-full animate-spin animation-delay-150" />
      </div>
      <div className="flex gap-1">
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce animation-delay-0" />
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce animation-delay-100" />
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce animation-delay-200" />
      </div>
    </div>
  </div>
);

export const DesktopSkeletonLoader = () => (
  <div className="min-h-screen bg-background hidden lg:block">
    {/* Header Skeleton */}
    <div className="border-b border-border/30">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="w-32 h-8 bg-muted rounded-md animate-pulse" />
        <div className="flex items-center gap-6">
          <div className="flex gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-16 h-4 bg-muted rounded-md animate-pulse" />
            ))}
          </div>
          <div className="w-10 h-10 bg-muted rounded-md animate-pulse" />
        </div>
      </div>
    </div>

    {/* Hero Section Skeleton - Two Column Layout */}
    <div className="container mx-auto px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
        {/* Left Column - Text Content Skeleton */}
        <div className="text-center lg:text-left space-y-6 sm:space-y-8 max-w-3xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
          {/* Badge Skeleton */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-accent/30">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-full animate-pulse" />
            <div className="w-32 h-4 bg-muted rounded-md animate-pulse" />
          </div>

          {/* Headlines Skeleton */}
          <div className="space-y-2 sm:space-y-4 flex flex-col items-center lg:items-start w-full">
            <div className="h-10 sm:h-12 md:h-14 lg:h-16 w-full bg-muted rounded-lg animate-pulse" />
            <div className="h-8 sm:h-10 md:h-12 lg:h-14 w-4/5 bg-muted rounded-lg animate-pulse animation-delay-100" />
          </div>

          {/* Description Skeleton */}
          <div className="w-full max-w-xl space-y-2">
            <div className="h-4 bg-muted/70 rounded-md animate-pulse" />
            <div className="h-4 bg-muted/70 rounded-md animate-pulse animation-delay-100" />
            <div className="h-4 w-3/4 bg-muted/70 rounded-md animate-pulse animation-delay-200" />
          </div>

          {/* CTA Buttons Skeleton */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <div className="h-12 sm:h-14 w-40 sm:w-48 bg-primary/20 rounded-full animate-pulse" />
            <div className="h-12 sm:h-14 w-40 sm:w-48 bg-muted rounded-full animate-pulse animation-delay-100" />
          </div>

          {/* Trust Indicators Skeleton */}
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-2.5">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-background bg-muted animate-pulse"
                />
              ))}
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-background bg-accent animate-pulse" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse" />
                ))}
              </div>
              <div className="h-3 w-32 bg-muted/70 rounded-md animate-pulse" />
            </div>
          </div>
        </div>

        {/* Right Column - Video/Image Skeleton */}
        <div className="relative w-full">
          <div className="relative aspect-video md:aspect-[16/10] lg:aspect-video rounded-2xl sm:rounded-[3rem] overflow-hidden border border-border/40">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse" />
            
            {/* Floating Stats Text - No Card Background */}
            <div className="absolute top-16 left-4">
              <div className="h-8 sm:h-10 lg:h-12 w-16 bg-muted rounded-md animate-pulse mb-2" />
              <div className="h-3 w-20 bg-muted/70 rounded-md animate-pulse" />
            </div>

            {/* Glowing corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/30 to-transparent rounded-[3rem] blur-xl animate-pulse" />
          </div>

          {/* Background decoration */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        </div>
      </div>
    </div>

    {/* Content Sections Skeleton */}
    <div className="space-y-24 pb-16">
      {[1, 2, 3].map((i) => (
        <div key={i} className="container mx-auto px-6 space-y-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="h-8 w-48 mx-auto bg-muted rounded-md animate-pulse" />
            <div className="h-12 w-full bg-muted rounded-lg animate-pulse animation-delay-100" />
            <div className="h-6 w-4/5 mx-auto bg-muted/70 rounded-md animate-pulse animation-delay-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((j) => (
              <div key={j} className="bg-card border border-border/30 rounded-xl p-6 space-y-4">
                <div className="h-24 w-24 bg-muted rounded-lg animate-pulse mx-auto" />
                <div className="space-y-3">
                  <div className="h-5 w-3/4 bg-muted rounded-md animate-pulse" />
                  <div className="h-4 w-full bg-muted/70 rounded-md animate-pulse animation-delay-100" />
                  <div className="h-4 w-2/3 bg-muted/70 rounded-md animate-pulse animation-delay-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Footer Skeleton */}
    <div className="border-t border-border/30 mt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-4">
              <div className="h-5 w-20 bg-muted rounded-md animate-pulse" />
              <div className="space-y-3">
                {[1, 2, 3].map((j) => (
                  <div key={j} className="h-4 w-24 bg-muted/70 rounded animate-pulse animation-delay-100" />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex justify-between items-center">
            <div className="h-4 w-32 bg-muted rounded-md animate-pulse" />
            <div className="flex gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-6 h-6 bg-muted rounded-md animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const MobileSkeletonLoader = () => (
  <div className="min-h-screen bg-background lg:hidden">
    {/* Header Skeleton */}
    <div className="border-b border-border/30">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="w-24 h-6 bg-muted rounded-md animate-pulse" />
        <div className="w-8 h-8 bg-muted rounded-md animate-pulse" />
      </div>
    </div>

    {/* Hero Section Skeleton */}
    <div className="container mx-auto px-4 py-12 space-y-6">
      <div className="space-y-4">
        <div className="h-8 w-full bg-muted rounded-lg animate-pulse" />
        <div className="h-12 w-3/4 bg-muted rounded-lg animate-pulse animation-delay-100" />
        <div className="h-6 w-full bg-muted/70 rounded-lg animate-pulse animation-delay-200" />
      </div>
      <div className="flex gap-3">
        <div className="h-12 w-28 bg-primary/20 rounded-lg animate-pulse" />
        <div className="h-12 w-28 bg-muted rounded-lg animate-pulse animation-delay-100" />
      </div>
    </div>

    {/* Content Sections Skeleton */}
    <div className="space-y-16 pb-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="container mx-auto px-4 space-y-6">
          <div className="space-y-3">
            <div className="h-6 w-32 bg-muted rounded-md animate-pulse" />
            <div className="h-8 w-full bg-muted rounded-lg animate-pulse animation-delay-100" />
            <div className="h-4 w-4/5 bg-muted/70 rounded-md animate-pulse animation-delay-200" />
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[1, 2].map((j) => (
              <div key={j} className="bg-card border border-border/30 rounded-xl p-4 space-y-3">
                <div className="h-20 w-20 bg-muted rounded-lg animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-3/4 bg-muted rounded-md animate-pulse" />
                  <div className="h-3 w-full bg-muted/70 rounded-md animate-pulse animation-delay-100" />
                  <div className="h-3 w-2/3 bg-muted/70 rounded-md animate-pulse animation-delay-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Footer Skeleton */}
    <div className="border-t border-border/30 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-3">
              <div className="h-4 w-16 bg-muted rounded-md animate-pulse" />
              <div className="space-y-2">
                <div className="h-3 w-20 bg-muted/70 rounded animate-pulse animation-delay-100" />
                <div className="h-3 w-16 bg-muted/70 rounded animate-pulse animation-delay-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
