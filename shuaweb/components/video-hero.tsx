"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoHeroProps {
    videoSrc: string;
    posterSrc?: string;
}

export function VideoHero({ videoSrc, posterSrc }: VideoHeroProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const handleCanPlay = () => {
            setIsLoaded(true);
        };

        videoElement.addEventListener("canplay", handleCanPlay);

        return () => {
            videoElement.removeEventListener("canplay", handleCanPlay);
        };
    }, []);

    const handlePlay = () => {
        if (!videoRef.current) return;

        videoRef.current.play().catch(() => setIsPlaying(false));
        setIsPlaying(true);
    };

    const togglePlay = () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
        } else {
            handlePlay();
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        if (!videoRef.current) return;
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    return (
        <div className="relative h-full w-full overflow-hidden">
            {/* Video */}
            <div className="absolute inset-0 bg-black">
                <video
                    ref={videoRef}
                    src={videoSrc}
                    poster={posterSrc}
                    muted={isMuted}
                    loop
                    playsInline
                    className={`object-cover w-full h-full transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-6 left-6 flex space-x-3 z-10">
                <Button
                    variant="ghost"
                    size="icon"
                    className="bg-white/20 text-white hover:bg-white/40 rounded-full h-10 w-10 backdrop-blur-sm transition-all duration-300"
                    onClick={togglePlay}
                >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="bg-white/20 text-white hover:bg-white/40 rounded-full h-10 w-10 backdrop-blur-sm transition-all duration-300"
                    onClick={toggleMute}
                >
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </Button>
            </div>
        </div>
    );
}