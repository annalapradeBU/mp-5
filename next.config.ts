import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  /* to get rid of an error i had :/ */
 compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
