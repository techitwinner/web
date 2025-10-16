<template>
  <nav class="toc">
    <p class="toc-text">Table of Contents</p>
    <ul v-if="toc.length">
      <template v-for="item in toc" :key="item.id">
        <li>
            <a 
              :href="'#' + item.id" 
              @click.prevent="scrollToHeading(item.id)"
              :class="`toc-link ${indentClass(item.depth)} ${activeId === item.id ? 'text-accent' : ''}`"
            >
              <span>
                {{ item.text }}
              </span>
            </a>
        </li>

        <!-- Render children if any -->
        <template v-if="item.children?.length">
          <li v-for="child in item.children" :key="child.id">
            <UTooltip :text="child.text">
              <a 
                :href="'#' + child.id" 
                @click.prevent="scrollToHeading(child.id)"
                :class="`toc-link ${indentClass(child.depth)} ${activeId === child.id ? 'text-accent' : ''}`"
              >
                <span>
                  {{ child.text }}
                </span>
              </a>
            </UTooltip>
          </li>
        </template>
      </template>
    </ul>
    <p v-else>
      Not available
    </p>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

type TocItem = {
  id: string
  depth: number
  text: string
  children?: TocItem[]
}

// Props
const props = defineProps<{
  toc: TocItem[]
}>()

// Active heading ID
const activeId = ref<string>('');

// Get all headings from toc (flattened)
const allHeadings = computed(() => {
  const headings: TocItem[] = [];
  
  props.toc.forEach(item => {
    headings.push(item);
    if (item.children?.length) {
      headings.push(...item.children);
    }
  });
  
  return headings;
});

// Function to add indentation based on heading depth
const indentClass = (depth: number) => {
  // Customize based on your depth logic
  switch (depth) {
    case 1:
      return 'toc-link-indent'
    case 2:
      return 'toc-link-indent-2'
    case 3:
      return 'toc-link-indent-3'
    case 4:
      return 'toc-link-indent-4'
    default:
      return ''
  }
}

const scrollToHeading = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    history.pushState({}, '', `#${id}`);
    
    activeId.value = id;
    
    // Perform smooth scroll
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

onMounted(() => {
  setTimeout(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeadings = entries
          .filter(entry => entry.isIntersecting)
          .map(entry => entry.target.id);
        if (visibleHeadings.length > 0) {
          activeId.value = visibleHeadings[0];
        }
      },
      {
        rootMargin: '-10% 0px -85% 0px',
        threshold: 0.1
      }
    );
    allHeadings.value.forEach(heading => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });
    onUnmounted(() => {
      observer.disconnect();
    });
  }, 100);
});
</script>

<style scoped>
.toc a {
  display: block;
  padding: 2px 0;
}
</style>