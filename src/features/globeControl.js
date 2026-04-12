export const globeControl = {
  spinRef: null,
  spinTarget: null,
  onSelect: null, // callback registered by Skills to receive selected tech name
  centerX: 50,   // projected globe center as % from left of canvas
  centerY: 50,   // projected globe center as % from top of canvas
  pulseMap: {},  // name → pulse trigger fn, registered by each Sprite
};

export const spinToAngle = (initialAngle) => {
  if (!globeControl.spinRef?.current) return;
  const currentY = globeControl.spinRef.current.rotation.y;
  const targetAngle = -initialAngle;
  const diff = ((targetAngle - currentY) % (2 * Math.PI) + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
  globeControl.spinTarget = currentY + diff;
};
