const metrics = {
  ttt: "Total Travel Time (sec)",
  delay: "Total Delay (sec)",
  avgDelay: "Avg Delay per Vehicle (sec)",
  stops: "Total Vehicle Stops",
  fuel: "Fuel Used (gal)",
  hc: "Hydrocarbons (g)",
  co: "Carbon Monoxide (g)",
  nox: "Nitrous Oxides (g)"
};

const trafficData = {
  wvhs: {
    am: {
      before: { ttt: 48.6*3600, //convert to seconds
               delay: 24.1*3600,
               avgDelay: 68.1,
               stops: 2656,
               fuel: 34.1,
               hc: 596,
               co: 20637,
               nox: 1825 },
      after:  { ttt: 48.5*3600,
               delay: 22.9*3600,
               avgDelay: 61.7,
               stops: 2749,
               fuel: 34.9,
               hc: 561,
               co: 20320,
               nox: 1758 }
    },
    pm: {
      before: { ttt: 53.9*3600,
               delay: 27.5*3600,
               avgDelay: 63.0,
               stops: 2667,
               fuel: 38.7,
               hc: 680,
               co: 23755,
               nox: 2086 },
      after:  { ttt: 56.4*3600,
               delay: 28.5*3600,
               avgDelay: 58.3,
               stops: 2924,
               fuel: 40.1,
               hc: 488,
               co: 21250,
               nox: 1672 }
    }
  },
  hhs: {
    am: {
      before: { ttt: 48.6*3600,
               delay: 24.1*3600,
               avgDelay: 68.1,
               stops: 2656,
               fuel: 34.1,
               hc: 596,
               co: 20637,
               nox: 1825 },
      after:  { ttt: 48.5*3600,
               delay: 22.9*3600,
               avgDelay: 61.7,
               stops: 2749,
               fuel: 34.9,
               hc: 561,
               co: 20320,
               nox: 1758 }
    },
    pm: {
      before: { ttt: 53.9*3600,
               delay: 27.5*3600,
               avgDelay: 63.0,
               stops: 2667,
               fuel: 38.7,
               hc: 680,
               co: 23755,
               nox: 2086 },
      after:  { ttt: 56.4*3600,
               delay: 28.5*3600,
               avgDelay: 58.3,
               stops: 2924,
               fuel: 40.1,
               hc: 488,
               co: 21250,
               nox: 1672 }
    }
  }
};
