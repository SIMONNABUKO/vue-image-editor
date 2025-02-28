<template>
  <div class="emoji-picker">
    <input
      v-model="search"
      type="text"
      placeholder="Search emoji..."
      class="w-full px-2 py-1 mb-2 bg-[#1a1b1f] text-white rounded border border-white/10"
    />
    <div class="emoji-list">
      <button
        v-for="emoji in filteredEmojis"
        :key="emoji"
        @click="selectEmoji(emoji)"
        class="emoji-button"
      >
        {{ emoji }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'EmojiPicker',
  emits: ['select'],
  setup(props, { emit }) {
    const emojis = [
      '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
      '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚',
      '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩',
      '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣',
      '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬',
      '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🤗',
      '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑', '😬', '🙄', '😯',
      '😦', '😧', '😮', '😲', '🥱', '😴', '🤤', '😪', '😵', '🤐',
      '🥴', '🤢', '🤮', '🤧', '😷', '🤒', '🤕', '🤑', '🤠', '😈',
      '👿', '👹', '👺', '🤡', '💩', '👻', '💀', '☠️', '👽', '👾',
    ];

    const search = ref('');
    const filteredEmojis = computed(() => {
      if (search.value) {
        return emojis.filter(emoji => emoji.includes(search.value));
      }
      return emojis;
    });

    const selectEmoji = (emoji) => {
      emit('select', { i: emoji });
    };

    return {
      search,
      filteredEmojis,
      selectEmoji
    }
  }
}
</script>

<style scoped>
.emoji-picker {
  width: 250px;
  max-height: 300px;
  overflow-y: auto;
  background-color: #2a2b2f;
  border-radius: 8px;
  padding: 10px;
}

.emoji-list {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 5px;
}

.emoji-button {
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.1s;
}

.emoji-button:hover {
  transform: scale(1.2);
}
</style>