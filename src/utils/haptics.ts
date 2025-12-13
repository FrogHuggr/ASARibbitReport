/**
 * Trigger haptic feedback on supported devices
 * Uses the Vibration API where available
 */

type HapticType = 'light' | 'medium' | 'heavy' | 'success' | 'warning' | 'error';

const hapticPatterns: Record<HapticType, number | number[]> = {
  light: 10,
  medium: 25,
  heavy: 50,
  success: [10, 50, 10],
  warning: [25, 50, 25],
  error: [50, 100, 50],
};

export function triggerHaptic(type: HapticType = 'light'): void {
  // Check if the Vibration API is available
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    try {
      const pattern = hapticPatterns[type];
      navigator.vibrate(pattern);
    } catch {
      // Silently fail if vibration is not supported or blocked
    }
  }
}

/**
 * Check if haptic feedback is available on this device
 */
export function isHapticSupported(): boolean {
  return typeof navigator !== 'undefined' && 'vibrate' in navigator;
}
