import React from "react";

const Test = () => {
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
        <div className="flex flex-col space-y-4 text-center md:text-left md:w-1/2">
          <div className="inline-block rounded-lg bg-red-300 px-3 py-1 text-sm">
            #1 AI Job Platform in India
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            Find Your Perfect Job With{" "}
            <span className="gradient-text">AI-Powered</span> Interviews
          </h1>
          <p className="text-muted-foreground md:text-xl">
            We use cutting-edge AI technology to streamline the hiring process.
            Job seekers get faster responses, and employers find the perfect
            candidates more efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 gradient-bg">
              Find Jobs
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8">
              Post a Job
            </button>
          </div>
          <p className="text-sm text-muted-foreground">
            Join 10,000+ job seekers and 500+ companies already on our platform
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-60 animate-pulse-light"></div>
            <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl opacity-60 animate-pulse-light"></div>
            <div className="rounded-2xl border bg-background/80 backdrop-blur-sm shadow-lg relative z-10 p-6 animate-float">
              <div className="flex flex-col space-y-3">
                <div className="bg-accent p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-semibold">AI Interview Session</div>
                    <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      Live
                    </div>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <div className="bg-background rounded-md p-3">
                      <p className="text-sm">
                        <span className="font-medium">AI Interviewer:</span> Can you
                        explain your approach to problem-solving?
                      </p>
                    </div>
                    <div className="bg-primary/10 rounded-md p-3">
                      <p className="text-sm">
                        <span className="font-medium">Candidate:</span> I typically
                        break down complex problems into smaller parts...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-semibold">Interview Progress</div>
                    <div className="text-xs text-muted-foreground">
                      8 min remaining
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
