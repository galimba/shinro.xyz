/**
 * LidarGrid - CSS-only TRON-style 3D grid animation
 *
 * Features:
 * - True 3D perspective grid floor using CSS transforms
 * - Infinite scrolling animation (grid flows toward viewer)
 * - Glowing horizon line anchors the 3D space
 * - Scan beam sweeps across the grid
 *
 * Desktop only - completely hidden on mobile for zero overhead
 */
export function LidarGrid() {
  return (
    <div className="hidden md:block grid-scene">
      {/* 3D perspective container */}
      <div className="grid-perspective">
        {/* The infinite scrolling grid floor */}
        <div className="grid-floor" />
      </div>

      {/* Horizon glow line */}
      <div className="horizon-glow" />

      {/* Scan beam moving across grid */}
      <div className="scan-beam" />
    </div>
  );
}
