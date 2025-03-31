<template>
  <Scroll />
  <footer v-if="$nav.currentLayout == 'cover'" class="absolute bottom-0 left-0 right-0 p-2">
    Alex Vaisman
  </footer>
  <footer v-else class="absolute bottom-1 left-0 right-2 text-right">
    <SlideCurrentNo/>/<SlidesTotal/>
  </footer>
  <Progress level="1" position="bottom"/>
</template>