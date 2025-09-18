'use client';

import { useEffect, useRef } from 'react';

export function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 400;

    // Store original positions
    const nodes: Array<{
      x: number;
      y: number;
      z: number;
      originalX: number;
      originalZ: number;
      radius: number;
      connections: number[];
    }> = [];

    // Create nodes
    const layers = 4;
    const nodesPerLayer = [3, 5, 5, 3];
    
    for (let layer = 0; layer < layers; layer++) {
      const layerZ = (layer - 1.5) * 60;
      for (let i = 0; i < nodesPerLayer[layer]; i++) {
        const angle = (i / nodesPerLayer[layer]) * Math.PI * 2;
        const radius = 80;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        nodes.push({
          x,
          y,
          z: layerZ,
          originalX: x,
          originalZ: layerZ,
          radius: 3,
          connections: []
        });
      }
    }

    // Connect nodes
    let nodeIndex = 0;
    for (let layer = 0; layer < layers - 1; layer++) {
      const currentLayerStart = nodeIndex;
      const currentLayerSize = nodesPerLayer[layer];
      const nextLayerSize = nodesPerLayer[layer + 1];
      
      for (let i = 0; i < currentLayerSize; i++) {
        for (let j = 0; j < nextLayerSize; j++) {
          nodes[currentLayerStart + i].connections.push(
            currentLayerStart + currentLayerSize + j
          );
        }
      }
      nodeIndex += currentLayerSize;
    }

    let rotation = 0;
    let animationId: number;

    function animate() {
      if (!canvas || !ctx) return;

      // Clear with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Steady rotation
      rotation += 0.002; // Constant slow speed
      
      // Apply rotation to all nodes
      nodes.forEach(node => {
        const cos = Math.cos(rotation);
        const sin = Math.sin(rotation);
        node.x = node.originalX * cos - node.originalZ * sin;
        node.z = node.originalZ * cos + node.originalX * sin;
      });

      // Sort by depth
      const sortedNodes = [...nodes].sort((a, b) => b.z - a.z);

      // Draw connections
      sortedNodes.forEach((node) => {
        const scale = 200 / (200 + node.z);
        const x = canvas.width / 2 + node.x * scale;
        const y = canvas.height / 2 + node.y * scale;
        
        node.connections.forEach(connIndex => {
          const connNode = nodes[connIndex];
          const connScale = 200 / (200 + connNode.z);
          const connX = canvas.width / 2 + connNode.x * connScale;
          const connY = canvas.height / 2 + connNode.y * connScale;
          
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(connX, connY);
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * scale})`;
          ctx.lineWidth = 0.5 * scale;
          ctx.stroke();
        });
      });

      // Draw nodes
      sortedNodes.forEach(node => {
        const scale = 200 / (200 + node.z);
        const x = canvas.width / 2 + node.x * scale;
        const y = canvas.height / 2 + node.y * scale;
        
        ctx.beginPath();
        ctx.arc(x, y, node.radius * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.9 * scale})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="neural-network-container">
      <canvas 
        ref={canvasRef}
        className="neural-network-canvas"
      />
    </div>
  );
}