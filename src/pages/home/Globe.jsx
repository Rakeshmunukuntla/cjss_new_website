"use client";

import createGlobe from "cobe";
import React, { useEffect, useRef } from "react";

// Convert hex → RGB normalized
const hexToRgbNormalized = (hex) => {
  let r = 0,
    g = 0,
    b = 0;
  const cleanHex = hex.startsWith("#") ? hex.slice(1) : hex;

  if (cleanHex.length === 3) {
    r = parseInt(cleanHex[0] + cleanHex[0], 16);
    g = parseInt(cleanHex[1] + cleanHex[1], 16);
    b = parseInt(cleanHex[2] + cleanHex[2], 16);
  } else if (cleanHex.length === 6) {
    r = parseInt(cleanHex.substring(0, 2), 16);
    g = parseInt(cleanHex.substring(2, 4), 16);
    b = parseInt(cleanHex.substring(4, 6), 16);
  }

  return [r / 255, g / 255, b / 255];
};

const Globe = ({
  className,
  theta = 0.25,
  dark = 1,
  scale = 1.1,
  diffuse = 1.2,
  mapSamples = 60000,
  mapBrightness = 1.5,
  baseColor = "#3b82f6",
  markerColor = "#60a5fa",
  glowColor = "#0ea5e9",
}) => {
  const canvasRef = useRef(null);
  const globeRef = useRef(null);

  const phiRef = useRef(0);
  const thetaRef = useRef(theta);
  const isDragging = useRef(false);
  const lastMouseX = useRef(0);
  const lastMouseY = useRef(0);

  const autoRotateSpeed = 0.003;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resolvedBaseColor =
      typeof baseColor === "string" ? hexToRgbNormalized(baseColor) : baseColor;

    const resolvedMarkerColor =
      typeof markerColor === "string"
        ? hexToRgbNormalized(markerColor)
        : markerColor;

    const resolvedGlowColor =
      typeof glowColor === "string" ? hexToRgbNormalized(glowColor) : glowColor;

    const initGlobe = () => {
      if (globeRef.current) {
        globeRef.current.destroy();
        globeRef.current = null;
      }

      const rect = canvas.getBoundingClientRect();
      const size = Math.min(rect.width, rect.height);
      const dpr = window.devicePixelRatio || 1;

      canvas.width = size * dpr;
      canvas.height = size * dpr;

      try {
        globeRef.current = createGlobe(canvas, {
          devicePixelRatio: dpr,
          width: canvas.width,
          height: canvas.height,
          phi: phiRef.current,
          theta: thetaRef.current,
          dark,
          scale,
          diffuse,
          mapSamples,
          mapBrightness,
          baseColor: resolvedBaseColor,
          markerColor: resolvedMarkerColor,
          glowColor: resolvedGlowColor,
          markers: [],
          offset: [0, 0],
          opacity: 1,

          onRender: (state) => {
            if (!isDragging.current) {
              phiRef.current += autoRotateSpeed;
            }
            state.phi = phiRef.current;
            state.theta = thetaRef.current;
          },
        });
      } catch (error) {
        console.error("Globe failed:", error);
      }
    };

    initGlobe();

    const onMouseDown = (e) => {
      isDragging.current = true;
      lastMouseX.current = e.clientX;
      lastMouseY.current = e.clientY;
      canvas.style.cursor = "grabbing";
    };

    const onMouseMove = (e) => {
      if (isDragging.current) {
        const dx = e.clientX - lastMouseX.current;
        const dy = e.clientY - lastMouseY.current;

        const speed = 0.005;
        phiRef.current += dx * speed;
        thetaRef.current = Math.max(
          -Math.PI / 2,
          Math.min(Math.PI / 2, thetaRef.current - dy * speed)
        );

        lastMouseX.current = e.clientX;
        lastMouseY.current = e.clientY;
      }
    };

    const stopDrag = () => {
      isDragging.current = false;
      canvas.style.cursor = "grab";
    };

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", stopDrag);
    canvas.addEventListener("mouseleave", stopDrag);

    const handleResize = () => initGlobe();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (globeRef.current) globeRef.current.destroy();
    };
  }, [
    theta,
    dark,
    scale,
    diffuse,
    mapSamples,
    mapBrightness,
    baseColor,
    markerColor,
    glowColor,
  ]);

  return (
    <div
      className={className || "flex items-center justify-center w-full h-full"}
      style={{
        minWidth: "400px",
        minHeight: "400px",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          aspectRatio: "1",
          display: "block",
          cursor: "grab",
        }}
      />
    </div>
  );
};

export default Globe;
