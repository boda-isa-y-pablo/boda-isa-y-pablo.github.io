<template>
  <InvitationV2 />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import InvitationV2 from './components/InvitationV2.vue';

onMounted(() => {
  removeWatermark({ maxAttempts: 5 });
});

/**
 * This function removes the watermark injected by the hosting service Static.app
 */
function removeWatermark(options: { maxAttempts: number }) {
  const { maxAttempts } = options;
  console.log(`🔍 removeWatermark() initialized with maxAttempts=${maxAttempts}`);

  let attempts = 0;

  // Run immediately
  tryRemove("Initial check");

  // Observe future changes
  const observer = new MutationObserver((mutations) => {
    console.log(`👀 DOM mutation detected (attempt ${attempts + 1}/${maxAttempts}):`, mutations);
    tryRemove("MutationObserver triggered");
  });

  observer.observe(document.body, { childList: true, subtree: true });
  console.log("📡 MutationObserver is now watching the DOM");

  function tryRemove(source: string) {
    attempts++;
    console.log(`➡️ [${source}] Attempt ${attempts}/${maxAttempts}`);
    const watermark = document.querySelector("body > a[href*='static.app']");

    if (watermark) {
      console.log("❌ Watermark found, attempting to remove...");
      watermark.remove();
      console.log("✅ Watermark successfully removed!");
      observer.disconnect();
      console.log("🛑 MutationObserver disconnected (stopped watching)");
    } else if (attempts >= maxAttempts) {
      console.log(`⛔ Max attempts (${maxAttempts}) reached. Stopping observer.`);
      observer.disconnect();
    } else {
      console.log("⚠️ No watermark found on this attempt. Will keep watching...");
    }
  }
}
</script>
