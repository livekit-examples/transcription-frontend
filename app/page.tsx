"use client";

import Image from "next/image";

import { RoomComponent } from "@/components/room";
import { ConnectionProvider } from "@/hooks/use-connection";

export default function Home() {
  return (
    <ConnectionProvider>
      <div className="grid place-items-center h-dvh w-full">
        <div className="w-full grid grid-rows-[64px_1fr_8px] lg:border border-white/20 h-full min-h-dvh lg:max-w-5xl mx-auto lg:min-h-[640px] lg:max-h-[640px] rounded-2xl px-4">
          <header className="border-b border-white/20">
            <div className="py-4 px-2 flex items-center justify-between">
              <h1 className="text-lg">Live Transcription</h1>
              <div className="inline-flex items-baseline gap-1">
                Built with{" "}
                <a href="https://docs.livekit.io/agents" target="_blank">
                  <Image
                    width={78.5} height={18}
                    src="/images/livekit-logomark.svg"
                    alt="LiveKit logo"
                    className="h-4 w-auto"
                  />
                </a>
              </div>
            </div>
          </header>
          <RoomComponent />
        </div>
      </div>
    </ConnectionProvider>
  );
}
