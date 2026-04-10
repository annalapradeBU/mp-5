import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  /* to get rid of an error i had :/ */
  experimental: {
    styledComponents: true,
  } as any,
};

export default nextConfig;
